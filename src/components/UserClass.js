import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };

    {
      console.log(this.props.name + "Bacha");
    }
  }

  async componentDidMount() {
    const username = this.props.social;
    console.log(this.props.name + "child DidMount");
    const res = await fetch("https://api.github.com/users/" + username); // return promise
    const data = await res.json(); // full filmet the promise
    console.log("===========", data, "await res.json()");
    this.setState({
      userInfo: data,
    });
  }

  componentDidUpdate() {
    this.timmer = setInterval(() => {
      console.log("componentDidUpdate");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timmer);
    console.log("componentWillUnmount" + this.props.name);
  }

  render() {
    const { name, location, social } = this.props;
    const { userInfo } = this.state;
    {
      console.log(this.props.name + "Bacha  render");
    }
    return (
      <div className="user-card">
        <h2>Name: {userInfo.login}</h2>
        <h3>Lacation: {userInfo.location}</h3>
        <h3>Contact: {userInfo.html_url}</h3>
        <h4>From class Component</h4>
      </div>
    );
  }
}

export default UserClass;
