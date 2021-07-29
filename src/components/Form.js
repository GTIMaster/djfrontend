import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      posts: [],
    };
  }

  // lifecycle Method
  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     // fetch("http://127.0.0.1:8000/api/Users/")
  //     .then((response) => response.json())
  //     // .then((data) => console.log(data));
  //     .then((data) => this.setState({ posts: data }));
  // }

  usernameHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  userpasswordHandler = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  render() {
    const { posts } = this.state;
    return (
      <>
        <h1>Form</h1>
        <input
          type="text"
          placeholder="Enter your Username"
          value={this.state.username}
          className="form-control"
          onChange={this.usernameHandler}
        />
        <input
          type="text"
          placeholder="Password"
          value={this.state.password}
          className="form-control"
          onChange={this.userpasswordHandler}
        />
        <button className="btn  btn-primary">click me</button>

        {posts.map((post) => (
          <h2 key={post.id}>{post.title}</h2>
        ))}
      </>
    );
  }
}

export default Form;
