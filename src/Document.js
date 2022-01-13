import { useState } from "react";

export default function Document(props){
    const [buttonRead,setButtonRead]=useState(false);
    return(<div>
        <h1 className = "title" >{props.title}</h1>
            <div className = "content" style = {{overflowY:"scroll",overflowX:"auto",height : "300px"}}
             onScroll={(e)=> {
                console.log(e.target.scrollHeight + " "+ e.target.scrollTop + " "+ Math.floor(e.target.scrollTop)  + " "+  e.target.clientHeight);
                console.log(e.target.scrollHeight - Math.floor(e.target.scrollTop));
                 if((e.target.scrollHeight - Math.floor(e.target.scrollTop) === e.target.clientHeight) || (e.target.scrollHeight - Math.ceil(e.target.scrollTop) === e.target.clientHeight)){  
                 setButtonRead((buttonRead)=>{return true;});
             }
             }} >
                {props.content}
            </div>
            <button disabled = {buttonRead?"":"disabled"}>I Agree</button>
        </div>

    );

}