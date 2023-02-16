import React from "react";
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';


const uploadFile = (info) => {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
      var preview = document.getElementById('show-text');
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log(e.target.result);
        preview.innerHTML = e.target.result.split(' ');
      };
      reader.readAsText(info.file.originFileObj);
      console.log(preview.innerHTML.split(' '));
      return preview.innerHTML.split('2', 17);
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
      <Button icon={<UploadOutlined />}>Upload Data</Button>
      <p id="show-text"></p>
    </Upload>
  );
  
function CreateTable(){
    return(
        <section>
            <div class="container-fluid">
                <h1 class="mt-5">Upload the Table:</h1>

                <form method="POST"  action="/creatTB">
                    <UploadButton/>
                <Button htmlType="submit" type="primary" >Create</Button>
                </form>
            </div>
        </section>
    );
}

export default CreateTable;