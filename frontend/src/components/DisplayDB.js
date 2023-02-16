import { Table } from "antd";
import React, {useEffect, useState}from "react";

function DisplayDB(){
    return(
        <section>
            <div class="container-fluid">
                <h1 class="mt-5">Please Confirm Your Current Database:</h1>
                <TableView/>
            </div>
        </section>
    );
};


function TableView(){
    useEffect( ()=> {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const fetchItems = async() => {
        const tst = await fetch('/test'); //retrieving data from backend
        const items = await tst.json(); //set data
        setItems(items);
    }
    return(
        <section>
        {items.map(
            item => {
                <div>{item.name}</div>
            }
        )}
        </section>
        
    );
};

export default DisplayDB;