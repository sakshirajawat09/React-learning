import React from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"))

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

console.log(parent) //object

// root.render(parent)

const heading = React.createElement(
  "h1", 
  {id: "heading"},  //attribute
   "hello from react") //childrens

// root.render(heading)

//  //React using jsx

const heading2 = <h1 className="heading" tabIndex="5">hello  from jsx </h1> 


// root.render(heading2)

// normal component
const Title = (
  <h2>hii i am just a title</h2>
)

const HeadingComponent = () => {
  return <h1 className="heading">hiiii, i am just functional component</h1>
}

const HeadingComponent3 = () => <h1 className="heading">hiiii from HeadingComponent3</h1>


const HeadingComponent2 = () =>(
  <div id="containers" >
  {Title} //normal variable
  <HeadingComponent />
  {HeadingComponent3()}
  <h1 className="heading">hiiii</h1>
  </div>
);




root.render(<HeadingComponent2/>)
