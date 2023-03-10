import React from "react";
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';

let modelData = {};


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
        //parse the file:
        const data = e.target.result.split('\n');
        preview.innerHTML = e.target.result.split(' ');
        fetch('/get_model', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST"}).then((res)=>{
          return res.json();
        }).then( (json) => {
          modelData=
          {
            fields: json,
            data: data
          };
          return ('get model response');
        })
        .catch((err) => {
          console.log(err);
        })
      };
      reader.readAsText(info.file.originFileObj);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };
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
      <Button icon={<UploadOutlined />}>Upload File</Button>
      <p id="show-text"></p>
    </Upload>
  );

  
export function CreateTable(){
  function createTB(){
    console.log('create tb');
    alert('creating');
      fetch("/create_table",
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

    return(
        <section>
            <div class="container-fluid">
                <h1 class="mt-5">Upload Data in txt File:</h1>
                <form method="POST" >
                    <UploadButton/>
                </form>
                <button onClick={createTB}>Save Above Data</button>
            </div>
        </section>
    );
};

export default CreateTable;