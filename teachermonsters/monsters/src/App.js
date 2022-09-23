import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [title, setTitle] = useState("");
  const [monsters, setMonsters] = useState([]);

  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Hello Monsters!!!-So far Working</h1>
      <h2 className="app-title">Title as you type: {title}</h2>

      <SearchBox
        className="title-search-box"
        onChangeHandler={onTitleChange}
        placeholder="set title"
      />
      <br />

      <h1 className="app-title">Monsters Rolodex {title}</h1>

      <SearchBox
        className="title-search-box"
        onChangeHandler={onTitleChange}
        placeholder="title monsters"
      />

      <br />
      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <br />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
