import { useEffect, useState } from "react";
import "./App.css";
import Document from "./Document";

function App() {
  const [contentText,setContent] = useState("");

  useEffect(()=>{
    fetch("https://jaspervdj.be/lorem-markdownum/markdown.txt").then((response)=>response.text()).then((text)=>
    {
      setContent((contentText)=> {return text;});
    });
  },[]);
  return (
    <div className="App">
      <section className="hero">
        <div className="hero-body">
          <p className="title">A React Task</p>
          <p className="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div className="container is-fullhd">
        <div className="notification">
          Edit the <code>./src</code> folder to add components.
        </div>
        <div>
          <Document title = "Terms and Conditions" content = {contentText}></Document>
        </div>
      </div>
    </div>
  );
}

export default App;
