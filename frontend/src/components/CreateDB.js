import React from "react";
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Tooltip, Button} from 'antd';

function CreateDB(){
    return(
        <section>
            <div class="container-fluid">
                <h1 class="mt-5">Specify the Name and Fields of a Database:</h1>

                <form method="POST"  action="/create_Schema">
                <Input type="text" placeholder="Name" name="CollectionNameInput" class="form-control" />
                <Input type="text" placeholder="Schema" name="CollectionSchemaInput" class="form-control" 
                suffix={
                <Tooltip title="Example: Name Age ID Emergency_Contact">
                    <InfoCircleOutlined style={{color: 'rgba(0,0,0,.45)',}}/>
                    </Tooltip>
                } />
                <Button htmlType="submit" type="primary" >Create</Button>
                </form>
            </div>
        </section>
    );
}

export default CreateDB;