import React,{useState,useEffect} from "react";
import { FlexBox } from "./style";

const items = [
    {
        name:"개",
        src:require("../../img/개.jpeg")
    },
    {
        name:"고양이",
        src:require("../../img/고양이1.jpeg")
    },
    {
        name:"유재석",
        src:require("../../img/유재석.jpeg")
    },
    {
        name:"마라탕",
        src:require("../../img/마라탕.jpeg")
    }
]
const Game =()=>{
    const [foods,setFoods]=useState([]);
    const [display,setDisplay] = useState([])
    const [winner,setWinner] = useState([])
    useEffect(()=>{
        items.sort(()=>Math.random() -0.5);
        setFoods(items);
        setDisplay([items[0], items[1]])
    },[])

    const clickHandler = (food)=> (event)=>{
        
        if(foods.length <=2){
            if(winner.length === 0){
                setDisplay([food])
            }else{
                let updateFood =[...winner,food];
                setFoods(updateFood);
                setDisplay([updateFood[0],updateFood[1]])
                setWinner([])
            }
        } else if(foods.length >2){
            setWinner([...winner,food])
            setDisplay([foods[2], foods[3]])
            setFoods(foods.slice(2))
        }
        
    }
    return(
        <FlexBox>
            <h1 className="title">이상형 월드컵</h1>
            {display.map((d,idx) =>{
                return(
                    <div className="flex-1"
                    key={idx}
                    onClick={clickHandler(d) }
                    
                    >
                    <img className="dog-img" src={d.src} />             
                    <div className="name">{d.name}</div>
                    </div>
                );
            })};
            
            
        </FlexBox>
    );
}

export default Game;