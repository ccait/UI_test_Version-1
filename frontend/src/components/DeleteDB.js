import React from "react";
import { Button, message, Popconfirm } from 'antd';
const confirm = (e) => {
  console.log(e);
  message.success('Click on Yes');
  fetch('/delete_all_collections',
  {method:'DELETE'}).then((res) =>{
    console.log('delete success', res);
  }).catch((err)=>{
    console.log('delete failed:',err);
  });
};
const cancel = (e) => {
  console.log(e);
  message.error('Deletion Canceled');
};
const ConfirmDelete = () => (
  <Popconfirm
    title="Delete the task"
    description="Are you sure to DELETE the data?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
    <Button type="primary" danger>Delete</Button>
  </Popconfirm>
);
function DeleteDB(){
    return(
        <section>
            <div class="container-fluid">
                <h1 class="mt-5">Delete Your Database</h1>
                <ConfirmDelete/>
            </div>
        </section>
    );
}


export default DeleteDB;