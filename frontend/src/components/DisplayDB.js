import React, { useEffect, useState } from "react";
import Dropdown from 'react-dropdown';
import { Table } from 'antd';
import '../components.css';


function DisplayDB() {

    // get all table names:
    useEffect(() => {
        fetchItems();
    }, []);
    let nameItems = [];
    const [tablenames, setItems] = useState([]);
    const [done, setDone] = useState(false);

    const [col, setCol] = useState([])
    const [data, setData] = useState([])
    const fetchItems = async () => {
        const names = await fetch('/tablesName'); //retrieving list of collection names
        const tablenames = await names.json();
        setItems(tablenames);
    };
    for (let i = 0; i < tablenames.length; i++) {
        nameItems[i] = {
            key: i,
            value: tablenames[i]
        };
    };


    // dropdown menu selection onClick:
    let columns = [];
    let notifications = [];
    function onClick(e) {
        let fields = [];
        console.log(JSON.stringify(e.value));
        fetch('/get_fields',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(e)
            }).then((res) => {
                return res.json();
            })
            .then((json) => {
                // if algo file:
                if (Object.keys(json[0]).length === 1){
                    for (let i = 0; i <json.length; i++){
                        fields.push(Object.keys(json[i])[0]);
                    }
                    //if data table:
                } else fields = Object.keys(json[0]);
                

                console.log('fields:', fields);
                columns = [];  //clear previous selection
                notifications = [];
                //if algo file:
                if (Object.keys(json[0]).length === 1) {
                    let obj ={};
                    for (let i = 0; i < fields.length; i++){
                        columns.push({
                            title: fields[i],
                            dataIndex: fields[i]
                        });
                        obj[fields[i]] = Object.values(json[i]);
                    };
                    notifications.push(obj);
                    setCol(columns);
                    setData(notifications);
                    setDone(true);
                } else { // if data table:
                    for (let i = 0; i < fields.length; i++) {
                        columns.push({
                            title: fields[i],
                            dataIndex: fields[i]
                        });
                        notifications.push(json[i]);
                    };
                    setCol(columns);
                    setData(notifications);
                    setDone(true);
                };
                //console.log('columns:', columns);
                //console.log('data:', notifications);
            });
        console.log('columns:', columns);
        console.log('data:', notifications);
    };


    return (
        <section>
            <div class="container-fluid">
                <h1 class="mt-5">Please Confirm Your Current Database:</h1>

                <Dropdown options={nameItems} onChange={onClick} placeholder="Select a Table" class="dropdown" />
                {done && <Table
                    dataSource={data}
                    columns={col}
                    rowKey="id"
                    bordered />}
            </div>
        </section>
    );
};

export default DisplayDB;