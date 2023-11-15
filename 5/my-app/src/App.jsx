import React from "react";
const element = React.createElement("h1" , {className : "heading"}, "hello world!")
console.log(element)

const exampleExample = (
  <h1 className="heading" tabIndex={0}>
    <span className="text">apiResponse</span>
    <img src="" alt="" />
  </h1>
)

/* exampleExample = {
  type : "h1",
  props : {
    className : "heading",
    tabIndex : 0,
    children : [
      {
        type : "span",
        props : {
          className : "text"
        }
      },
      {
        type : "img",
        props : {
          src : "",
          alt : ""
        }
      }
    ]
  }
} */