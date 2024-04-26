import "../App.css";
import "./listingStyle.css";
import { useLocation } from 'react-router-dom'
import Header from "../components/Header";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "../components/Cards";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import App from "../App";

var thisCard;
var listing_id;

export function Listing() {
  const location = useLocation();
  const card = location.state;
  console.log(card);
  listing_id = card.id;
  thisCard = card;
  console.log(thisCard);
  return (
    <>
      <div className="card-box1">
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        loop={true}
        mousewheel={true}
        cssMode={true}
        pagination
        modules={[Pagination, Navigation]}
        className="swiper-container"
      >
          <SwiperSlide key={0}>
            <img src={card.listing_image} className="card-img" />
          </SwiperSlide>
      </Swiper>
      <div className="card-info-flex">
        <h3 className="card-title">{card.listing_name}</h3>
      </div>
      <p style={{ margin: 0, color: "var(--font-grey)" , }}>{card.address}, {card.property_city}, {card.property_country}</p>
      <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.listing_desc}</p>
      <p style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--black" }}>
        <span style={{ fontWeight: "600" }}>${card.price_per_night}</span> night</p>
        <div className="input-bar">
        Start Date
          <input className="startDateInput"></input>
        </div>
        <div className="input-bar">
        End Date
          <input className="endDateInput"></input>
        </div>
        <div className="button-div">
          <button className="bookButton" onClick={(booking)}>Book Now</button>
        </div>
      </div>
    </>
  );
}

function booking()
{
  var startDate = document.querySelector(".startDateInput").value;
  sanitize(startDate);
  var endDate = document.querySelector(".endDateInput").value;
  sanitize(endDate);
  var queryString = `INSERT INTO project.Booking (listing_id, start_date, end_date, renter_id) VALUES (${thisCard.id}, '${startDate}', '${endDate}',${App.account_id});`;
  var encoded = encodeURIComponent(queryString);
  var url=`http://localhost:3005/sql?data=${encoded}`
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
}

var inputBlacklist = [";", ":", "<", ">", "{", "}", "[", "]", "(", ")", "!", "@", "#", "$", "%", "^", "&", "*", "+", "=", "?", "/", "\\", "|", "~", "`", "'", "\"", ",", "."];

function sanitize(String) {
  console.log(String);
  inputBlacklist.forEach(element => {
    if (String.includes(element)) {
      alert("Invalid input");
      return;
    }
  })
}