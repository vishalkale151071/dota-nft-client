import React, { useEffect, useState } from 'react';
import './styles/style.css'

const ItemCard = ({ Id, contract, metaData}) => {
    
    const [item, setItem] = useState(null); // item variable to hold item
    const [itemData, setItemData] = useState({}); // itemData variable to hold item metaData
    
    useEffect(() => {
        contract.methods.getItem(Id).call().then(async (result) => { //get Item from smart contract
            setItem(result);
            setItemData(metaData[result["0"]])
        }); 
    }, [Id, contract.methods, metaData])
    
    return(
        (item)?(
       <figure className="card card--normal">
            <div className="card__image-container">
                <img className="Item-image" src={itemData.image} alt={item['0']} />   
            </div>
            <figcaption className="card__caption">
                <h1 className="card__name">{itemData.name}</h1>

                <table className="card__stats">
                    <tbody>
                        {(itemData.Strength) ? (<tr><th>Streangth</th><td>{itemData.Strength}</td></tr>): (null)}
                        {(itemData.Agility) ? (<tr><th>Agility</th><td>{itemData.Agility}</td></tr>): (null)}
                        {(itemData.Intelligence) ? (<tr><th>Intelligence</th><td>{itemData.Intelligence}</td></tr>): (null)}
                    </tbody>
                </table>
                
                <div className="card__abilities">
                <h4 className="card__ability">
                    <span className="card__label">Enhancement</span>
                </h4>
                </div>
            </figcaption> 
       </figure>):(
           <h3>Loading your item</h3>
       )
    );
}

export default ItemCard