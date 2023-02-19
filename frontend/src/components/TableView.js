import React from "react";
import { Table } from 'antd';
import columns from'./DisplayDB';
import notifications from'./DisplayDB';

function TableView(){
    return(
        <section>
            <div class="container-fluid">
                <h1 class="mt-5">Data Table</h1>
                <Table 
                dataSource={notifications}
                columns={columns}
                rowKey="id"
                bordered/>
            </div>
        </section>
    );
}

export default TableView;