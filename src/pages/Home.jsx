import { useState } from "react";
import "../App.css";
import Cards from "../components/Cards";
import Header from "../components/Header";
import Filter from "../components/Filter";
import Suspense from "react";
import {list} from "../assets/cards-list";
import { wait } from "@testing-library/user-event/dist/utils";
import { useNavigate, loader} from "react-router-dom";


const queryString = 'SELECT * FROM project.Homepagelistings;';


export function Home() {
  const [selectedFilter, setSelectedFilter] = useState(0);

  

  var queryResponse = sendQuery();
  console.log(queryResponse);
  console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
    if (list == undefined) {
      return (
        <div className="Home">
          <Header />
          <h1>Failed to load listings</h1>
        </div>
      );
    }

  console.log('Top');
  console.log(list);
  console.log('Bottom');
  return (
    <div className="Home">
      <Header />
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {selectedFilter == 0 ? <Cards list={list}/>: <Cards list={list}/>}
    </div>
  );

}

function sendQuery() {
  var encoded = encodeURIComponent(queryString);
  var url=`http://localhost:3005/sql?data=${encoded}`
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
}