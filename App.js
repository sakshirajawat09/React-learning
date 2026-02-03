import React from "react"
import ReactDOM from "react-dom/client"


const parent = React.createElement("div", {id:"parent"},  
  [
    React.createElement("div", {id:"child_1"},  
    [ React.createElement("h1", {id:"h1_tag"}, "Hii I am h1 tag" ),
      React.createElement("h2", {id:"h2_tag"}, "Hii I am h2 tag" )
    ]
  ),
  React.createElement("div", {id:"child_2"},  
    [ React.createElement("h1", {id:"h1_tag"}, "Hii I am h1 tag" ),
      React.createElement("h2", {id:"h2_tag"}, "Hii I am h2 tag" )
    ]
  )
  ]
)

const heading = React.createElement(
  "h1", 
  {id: "heading"},  //attribute
   "hello from react")

   console.log(parent) //object
const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
root.render(parent)

// for function use

// const root = ReactDOM.createRoot(document.getElementById("root"));

// function App() {
//   return <h1>Hello Sakshi 👩‍💻</h1>;
// }

// root.render(<App />);
