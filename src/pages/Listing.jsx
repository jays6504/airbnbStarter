import { useState } from "react";
import "../App.css";
import { list, list2 } from "../assets/cards-list";
import Cards from "../components/Cards";
import Filter from "../components/Filter";
import Header from "../components/Header";
export function Listing() {
    const [selectedFilter, setSelectedFilter] = useState(0);
    return (
      <>
        <h1>Listing</h1>
      </>
    );
  }