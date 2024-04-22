import "../App.css";
import "./style.css";
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
       <div className="Home">
          <Header />
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
              {card.imgSrc.map((src, i) => (
                <SwiperSlide key={i}>
                  <img src={src} className="card-img" />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="card-info-flex">
              <h3 className="card-title">{card.title}</h3>
              <div className="card-rating">
                <StarRateRoundedIcon />
                <p>{card.rating}</p>
              </div>
            </div>
            <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.desc}</p>
            <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.date}</p>
            <p style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--black" }}>
              <span style={{ fontWeight: "600" }}>₹{card.price}</span> night
            </p>
          </div>
        </div>
      </>
    );
  }