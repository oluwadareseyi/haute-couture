import React from "react";
import { ReactComponent as Cross } from "../assets/images/cross-icon.svg";

const mensClothes = [
  {
    url:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600799241/Haute/Rectangle_21_siojtz.png",
    name: "dagbana",
  },
  {
    url:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600799251/Haute/Rectangle_22_ovxyiw.png",
    name: "ocean eyes",
  },
  {
    url:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600799233/Haute/Rectangle_23_pizpma.png",
    name: "ocean eyes",
  },
  {
    url:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600799225/Haute/Rectangle_24_cez3jo.png",
    name: "lost boys",
  },
  {
    url:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600799250/Haute/Rectangle_25_fqkfh7.png",
    name: "lost boys",
  },
  {
    url:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600799258/Haute/Rectangle_26_pii1ej.png",
    name: "lost boys",
  },
  {
    url:
      "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600799238/Haute/Rectangle_27_xmrlai.png",
    name: "lost boys",
  },
];

const Home = () => {
  return (
    <div className="landing">
      <section className="hero">
        <nav>
          <div className="logo">Haute Couture</div>
          <div className="hamburger"></div>
        </nav>

        <div className="main-hero">
          <div className="left">
            <div className="title">FASHION REDEFINED.</div>
            <div className="sub">
              ROCK YOUR STYLE, <br /> BEING BORING ISN’T <br /> ALLOWED HERE
            </div>
            <div className="crosses">
              <Cross />
            </div>
          </div>
          <div className="right">
            <div className="hero-image">
              <img
                src="https://res.cloudinary.com/dmwfd0zhh/image/upload/v1600769377/Haute/hero-model_vdigac.png"
                alt="fashion-model"
              />

              <div className="label">Haute Couture</div>
              <div className="label label-2"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured">
        <div className="title">Featured</div>
        <div className="sub">Ladies Summer Collection</div>
        <div className="featured-grid">
          <div className="item left">Lucid Dreams</div>
          <div className="item center-top">Ocean Eyes</div>
          <div className="item center-bottom">Ocean Eyes</div>
          <div className="item right">Lucid Dreams</div>
        </div>
        <div className="button">View all</div>
      </section>

      <section className="mens-wear">
        <div className="title">Featured</div>
        <div className="sub">Men Summer Collection</div>
        <div className="image-con">
          {mensClothes.map(({ url, name }, i) => (
            <div
              key={i}
              className="image"
              style={{ backgroundImage: `url(${url})` }}
            >
              {name}
            </div>
          ))}
        </div>
        <div className="button">View all</div>
      </section>
    </div>
  );
};

export default Home;
