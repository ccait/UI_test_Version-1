import React from "react";
import { Button } from 'antd';
import {useNavigate} from 'react-router-dom';
import { message, Popconfirm } from 'antd';
const cancel = (e) => {
  console.log(e);
  message.error('Canceled');
};

function Start(){
    const navigate = useNavigate();
    return(
        <section>
            <div class="container-fluid">
            <h1 class="mt-5">Start De-identification Process:</h1>
            <Popconfirm
    title="Start De-identification"
    description="Are you sure to start the De-identification?"
    onConfirm={
        (e) => {
            navigate('/hpcr/result');
            console.log(e);
            message.success('Start De-identification');
        }
    }
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
    <Button type="dashed" danger>Start</Button>
  </Popconfirm>
            </div>
        </section>
    );
}

export default Start;