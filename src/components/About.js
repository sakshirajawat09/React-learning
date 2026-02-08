import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  // constructor(props) {
  //   super(props);
  //   console.log("maa");
  // }

  componentDidMount() {
    console.log("parent DidMount");
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>welcome to the About page</p>
        <User
          name={"Sakshi Rajawat"}
          location={"indore"}
          social={"sakshi_.rajawat"}
        />
        <UserClass
          name={"Sakshi Rajawat"}
          location={"indore"}
          social={"sakshirajawat09"}
        />
        <UserClass name={"Eshan"} location={"indore"} social={"eshan29"} />
      </div>
    );
  }
}

export default About;
