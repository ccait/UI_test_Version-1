import React, {useEffect, useState} from "react";
import Dropdown from 'react-dropdown';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';

function CreateAlgoTable(){

    let selectedTable;
    let modelData = {};
    let fields = [];

    useEffect( ()=> {
        fetchItems();
    }, []);
    let nameItems = [];
    const [tablenames, setItems] = useState([]);
    const fetchItems = async() => {
        const names = await fetch('/tablesName'); //retrieving list of collection names
        const tablenames = await names.json(); 
        setItems(tablenames);
    };
    for (let i = 0; i < tablenames.length; i++){
        nameItems[i] = {
            key: i,
            value: tablenames[i]
        };
    };
    //upload button:
    const props = {
        headers: {
          authorization: 'authorization-text',
        },
      };
    const UploadButton = () => (
        <Upload
          name="file"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          accept=".txt, .csv"
          {...props}
          onChange={(e) => uploadFile(e)}
        >
          <Button icon={<UploadOutlined />}>Upload Data</Button>
          <p id="show-text"></p>
        </Upload>
      );
// dropdown onclick:
    function onClick(e){
        console.log('selected:',e.value);
        selectedTable = e;
    };

// create selected algo table to backend
function createAlgo(){
    console.log('create algo table');
    alert('creating');
      fetch("/create_algo",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(modelData)
  })
  .then(function(res){ console.log(res) })
  .catch(function(res){ console.log(res) })
  };

//upload handle:
const uploadFile = (info) => {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
      var preview = document.getElementById('show-text');
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log('reading file');
        console.log(e.target.result);
        const data = e.target.result.split(' ');
        preview.innerHTML = e.target.result.split(' ');
        fetch('/get_fields', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
    body:JSON.stringify(selectedTable)}).then((res)=>{
          return res.json();
        }).then( (json) => {
            fields = Object.keys(json[0]);
          modelData=
          {
            fields:fields,
            data: data,
            name: selectedTable
          };
          console.log('fields:', fields);
          console.log('data:', data);
          return ('get model response');
        })
        .catch((err) => {
          console.warn(err);
        })
      };
      reader.readAsText(info.file.originFileObj);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };
    return(
        <section>
            <div class="container-fluid">
                <h1 class="mt-5">Create Algo by Specifying 0 to 5 for Each Field:</h1>
                <Dropdown options={nameItems} onChange={onClick} placeholder="Select a Table to Match your Algo" class="dropdown"/>
                <h1 class="mt-5">Upload Your Algo File:</h1>
                <form method="POST" >
                    <UploadButton/>
                </form>
                <button onClick={createAlgo}>Create Above Algo file for Selected Table</button>
            </div>
        </section>
    );
}

export default CreateAlgoTable;