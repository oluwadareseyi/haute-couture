import React from "react";
import { ReactComponent as Cross } from "../assets/images/cross-icon.svg";

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
    </div>
  );
};

export default Home;
