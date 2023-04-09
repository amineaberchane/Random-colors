import React from "react";
import Title from "./Title";
import { Button } from 'react-bootstrap';

// Function handleClick
const handleClick=(e)=>{
    let body =document.querySelector("body");
    body.style.background=getRandomColor();
    e.target.style.background=getRandomColor();
}


// Get Random Color
const getRandomColor =()=>{
    let char = "0123456789ABCDEF";
    let hashtag = "#";
    for (let i = 0 ; i<6 ; i++){
        hashtag += char[Math.floor(Math.random() * 16)];
    }
    return hashtag;
}

function RandomColor() {
  return (
    <div className="container m-auto text-center">
      <Title text={"Randomize Color"} classes={"mb-4"} />
      <Button   className="btn btn-success btn-lg" onClick={handleClick}>Click Here</Button>
      <Button    className="btn btn-primary btn-lg" onClick={handleClick}>Click Here</Button>
      <Button  className="btn btn-danger btn-lg"  onClick={handleClick}>Click Here</Button>
      <Button  className="btn btn-warning btn-lg" onClick={handleClick}>Click Here</Button>
    </div>
  );
}

export default RandomColor;
