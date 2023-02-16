import React, {useEffect, useState} from 'react';


function Test() {
    useEffect( ()=> {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const fetchItems = async() => {
        const tst = await fetch('/ttttest'); //retrieving data from backend
        const items = await tst.json(); //set data
        setItems(items);
    }
    return(
        <section>
            <form method="POST" action="/addTest">
                <input type="text" name="testInput"/>
                <input type="submit" value="Send"/>
            </form>
            {
            items.map(item => (
                <div>
                    {item.test}
                </div>
            ))
            }
        </section>
    );
}

export default Test;