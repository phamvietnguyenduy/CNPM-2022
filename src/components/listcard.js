import React from "react";
import Card from "./Card/Card";
var list=[
    {
        name:"Hifi-Tshirt",
        prive:"12300$"
    },
    {
        name:"Hifi-Tshirt",
        prive:"12300$"
    },{
        name:"Hifi-paint",
        prive:"12300$"
    }
]
function Listcard(){
    var card= list.map((item,i)=>{
        return  <Card name={item.name} price={item.prive}/>
    })
    return (
        <div>
           {card}
        </div>
    );
}
export default Listcard