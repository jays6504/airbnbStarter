import "../App.css";
import "./listingStyle.css";
import Header from "../components/Header";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import App from "../App";
import { list } from "../assets/cards-list";

export function CreateListing() {
  return (
    <>
      <div className="Home">
        <Header />
        <h1 className="create-listing-title">Create Listing:</h1>
        <div className="input-bar">
        Title
          <input className="listing-name-input"></input>
        </div>
        
        <div className="input-bar">
        Description
          <input className="listing-desc-input"></input>
        </div>
        
        <div className="input-bar">
        Address
          <input className="listing-address-input"></input>
        </div>

        <div className="input-bar">
        City
          <input className="listing-city-input"></input>
        </div>
        
        <div className="input-bar">
        Price
          <input className="listing-country-input"></input>
        </div>
        
        <div className="input-bar">
        Category
          <input className="listing-category-input"></input>
        </div>

        <div className="input-bar">
        Zip Code
          <input className="listing-zipcode-input"></input>
        </div>
        
        <div className="input-bar">
        Image Link
          <input className="listing-image-link-input"></input>
        </div>

        <div className="button-div">
          <button className="create-listing-button" onClick={CreateListingButton}>Create Listing</button>
        </div>
      </div>
    </>
  );
}

async function CreateListingButton()
{
  var listing_address = document.querySelector(".listing-address-input").value;
  sanitize(listing_address);
  var listing_name = document.querySelector(".listing-name-input").value;
  sanitize(listing_name);
  var listing_desc = document.querySelector(".listing-desc-input").value;
  sanitize(listing_desc);
  var listing_city = document.querySelector(".listing-city-input").value;
  switch(listing_city.toLowerCase())
  {
    case "san francisco":
      listing_city = 3;
      break;
    case "new york":
      listing_city = 2;
      break;
    case "state college":
      listing_city = 1;
      break;
  }
  var listing_price = document.querySelector(".listing-country-input").value;
  sanitize(listing_price);
  var listing_price = parseInt(listing_price);
  if (listing_price < 0|| isNaN(listing_price))
  {
    alert("Invalid input");
    return;
  }
  var listing_category = document.querySelector(".listing-category-input").value;
  switch(listing_category.toLowerCase())
  {
    case "hotel":
      listing_category = 3;
      break;
    case "apartment":
      listing_category = 2;
      break;
    case "house":
      listing_category = 1;
      break;
  }
  var listing_zipcode = document.querySelector(".listing-zipcode-input").value;
  sanitize(listing_zipcode);
  var listing_image = document.querySelector(".listing-image-link-input").value;

  var queryString = `INSERT INTO project.Listing (listing_name, listing_desc, city_id, price, zip_code, link, category_id, owner_id, address) VALUES ('${listing_name}', '${listing_desc}', ${listing_city}, ${listing_price}, '${listing_zipcode}', '${listing_image}', ${listing_category}, ${App.account_id}, '${listing_address}');`;
  console.log(queryString);
  var encoded = encodeURIComponent(queryString);
  console.log(encoded);
  fetch(`http://localhost:3005/sql?data=${encoded}`);
}

var inputBlacklist = [";", ":", "<", ">", "{", "}", "[", "]", "(", ")", "@", "#", "$", "%", "^", "&", "*", "+", "=", "?", "/", "\\", "|", "~", "`", "'", "\""];

function sanitize(String) {
  console.log(String);
  inputBlacklist.forEach(element => {
    if (String.includes(element)) {
      alert("Invalid input");
      return;
    }
  })
}