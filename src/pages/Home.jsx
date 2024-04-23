import { useState } from "react";
import "../App.css";
import { list, list2 } from "../assets/cards-list";
import Cards from "../components/Cards";
import Filter from "../components/Filter";
import Header from "../components/Header";
import { Mode } from "@mui/icons-material";
const queryString = `SELECT * FROM users`;

export function Home() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  sendQuery();
  return (
    <div className="Home">
      <Header />
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {selectedFilter == 0 ? <Cards list={list} /> : <Cards list={list2} />}
    </div>
  );
}

function sendQuery() {
  var encoded = encodeURIComponent(queryString);
  console.log(encoded);
  console.log(`---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`)
  var url=`http://localhost:3005/sql?data=${encoded}`
  console.log(url)
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
}