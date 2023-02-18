import React, {useEffect, useState}from "react";
import Dropdown from 'react-dropdown';
import '../components.css';


function DisplayDB(){

    useEffect( ()=> {
        fetchItems();
    }, []);
    let nameItems=[];
    const [items, setItems] = useState([]);
    const fetchItems = async() => {
        const names = await fetch('/tablesName'); //retrieving list of collection names
        const items = await names.json(); 
        setItems(items);
    };
    const onClick = (e) => console.log(e.key);
    
    for (let i = 0; i < items.length; i++){
        nameItems[i] = {
            key:i,
            value: items[i]
        };
    };
    return(
        <section>
            <div class="container-fluid">
                <h1 class="mt-5">Please Confirm Your Current Database:</h1>
                {JSON.stringify(nameItems)}
                <Dropdown options={nameItems} onChange={onClick} placeholder="Select an option" class="dropdown"/>
            </div>
        </section>
    );
};

export default DisplayDB;