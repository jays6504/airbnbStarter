import "../App.css";
import "./listingStyle.css";
import Header from "../components/Header";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function CreateListing() {
    return (
      <>
       <div className="Home">
          <Header />
          <h1 className="create-listing-title">Create Listing:</h1>
          <div className="input-bar">
          Listing Name
            <input className="listing-name-input"></input>
          </div>
          
          <div className="input-bar">
          Listing Desc
            <input className="listing-desc-input"></input>
          </div>
          
          <div className="input-bar">
          City
            <input className="listing-city-input"></input>
          </div>
          
          <div className="input-bar">
          Listing Country
            <input className="listing-country-input"></input>
          </div>
          
          <div className="input-bar">
          Listing Category
            <input className="listing-category-input"></input>
          </div>

          <div className="input-bar">
          Listing Zip Code
            <input className="listing-zipcode-input"></input>
          </div>
          
          <div className="input-bar">
          Listing Image Link
            <input className="listing-image-link-input"></input>
          </div>

          <div className="button-div">
            <button className="create-listing-button">Create Listing</button>
          </div>
        </div>
      </>
    );
  }