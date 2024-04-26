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

export function Listing() {
    const location = useLocation();
    const card = location.state;
    console.log(card);
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
            <button className="bookButton">Book Now</button>
          </div>
        </div>
      </>
    );
  }