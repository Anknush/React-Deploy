// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { CardApp } from "./components/cards/cards-component";
import { SearchBox } from "./components/cards/search-box/search-box-component";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      Movies: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((Response) =>
      Response.json().then((user) => this.setState({ Movies: user }))
    );
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { Movies, searchField } = this.state;
    const filterMonster = Movies.filter((movie) =>
      movie.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h2>Monster Roledex</h2>
        <SearchBox placeholder="search-box" handleChange={this.handleChange} />
        <CardApp Movies={filterMonster}></CardApp>
      </div>
    );
  }
}
export default App;
