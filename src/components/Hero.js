import React from "react";
import blackShirt from "../assets/images/blackshirt-rehearsal.png";
import whiteShirt from "../assets/images/whiteshirt-rehearsal.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="top-hero">
        <img
          className="black-shirt"
          src={blackShirt}
          alt="Students rehearsing on a football field"
        />
        <img
          className="white-shirt"
          src={whiteShirt}
          alt="Students rehearsing on a football field"
        />
      </div>
      <div className="bottom-hero">
        <h1 id="hero-title">Welcome to hornhelp!</h1>
        <p>
          We are focused on all things Brass Education. Soon you will find
          various resources that will benefit students on the concert stage and
          marching field. We are passionate about creating simple educational
          tools that help facilitate your progress!
        </p>
      </div>
    </section>
  );
}
