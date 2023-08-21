import React from "react";
import { useState } from "react";


interface Props {
    items: string[];
    header: string;

    setItemList: (item: string) => void;
}
    
function MyTable(props: Props) {

    const [getIndexItem, setIndexItem] = useState(0);
    

    // IDentifies if there is data
    if(props.items.length === 0){
        return <h1>No Data Found</h1>
    }


    return (
        <>
            <h1>{props.header}</h1>
            {/* {item1.length === 0 ? <h1>No Data Found</h1> : <h1>Datafound</h1>} */}
            {props.items.length === 0 && <h1>No Data FOund</h1>}
            <ul className="list-group">
                {props.items.map((element, index) =>
                   <li className ={getIndexItem === index ? "list-group-item active" : "list-group-item"} 
                   key={element} 
                   onClick={(event) => {setIndexItem(index); props.setItemList(element);}}>
                    Lorem Ipsum{element}
                    </li> 
                )}
                
            </ul>
        </>
    );
}

export default MyTable;