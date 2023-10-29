import React from "react";
import "./App.css";

class user extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    try {
      const users = await fetch("https://jsonplaceholder.typicode.com/users");
      if (users.ok) {
        const response = await users.json();
        this.setState({
          users: response,
        });
      } else {
        alert("Failed fetch");
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <h1 className="text text-center m-5 text-xl	">Users</h1>
        <div className="flex gap-5  flex-wrap justify-center items-center">
          {this.state.users.map((user) => (
            <div
              key={user.id}
              className="flex  flex-col gap-5 p-5 font-mono w-80 text-center border-solid border-2 border-black"
            >
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.company.name}</p>
              <p>{user.phone}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default user;
