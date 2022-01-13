import { useState } from "react";

export default function Document(props){
    const [buttonDisabled,setButtonRead]=useState(true);
    return(<div>
        <h1 className = "title" >{props.title}</h1>
            <div className = "content"  >
                 <div style = {{overflowY:"scroll",width:"300px",height : "300px"}}
             onScroll={(e)=> {
                console.log(e.target.scrollHeight + " "+ e.target.scrollTop + " "+ Math.floor(e.target.scrollTop)  + " "+  e.target.clientHeight);
                console.log(e.target.scrollHeight - Math.floor(e.target.scrollTop));
                 if((e.target.scrollHeight - Math.floor(e.target.scrollTop) === e.target.clientHeight) || (e.target.scrollHeight - Math.ceil(e.target.scrollTop) === e.target.clientHeight)){  
                 setButtonRead((buttonDisabled)=>{return false;});

             }
             }}
                 
                 >{props.content}</div>
                   
            <button disabled = {buttonDisabled}>I Agree</button>
            </div>
        </div>

    );

}