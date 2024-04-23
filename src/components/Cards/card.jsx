import React from "react";
import "./styles.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

function Card({ card }) {
  const cardData=card;
  console.log(cardData);
  return (
    <Link to={{pathname:"/listing"}} state={cardData}>
      <div className="card-box">
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
        <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.address}, {card.property_city}, {card.property_country}</p>
        <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.listing_desc}</p>
        <p style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--black" }}>
          <span style={{ fontWeight: "600" }}>${card.price_per_night}</span> night
        </p>
      </div>
    </Link>
  );
}

export default Card;
