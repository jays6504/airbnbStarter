import { useState } from "react";
import "../App.css";
import { list, list2 } from "../assets/cards-list";
import Cards from "../components/Cards";
import Filter from "../components/Filter";
import Header from "../components/Header";

export function Home() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  fetch("http://localhost:3005")
    .then((response) => response.json())
    .then((json) => console.log(json));
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