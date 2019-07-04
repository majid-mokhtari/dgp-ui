import React, { useState, useEffect } from "react";
import "./charities.scss";
import Home from "../../../../donate/components/home/Home";

export default function Charities(props) {
  return (
    <div className="featured-charities-container">
      <div className="featured-charities-title">
        <h1>You Might Be Interested In Donating To Them</h1>
        <h3>Donate to the causes that you support and earn points</h3>
      </div>
      <Home />
    </div>
  );
}
