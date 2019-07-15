import React from "react";
import "./us.scss";

function About() {
  return (
    <div className="about-us-container">
      <div className="hero">
        <img
          src={`${process.env.PUBLIC_URL}/images/aboutUs/about-dgp-bg.png`}
          alt=""
        />
        <div className="hero-text">
          <span className="title">Vision Statement</span>
          <span className="desc">Our vision is to create a world of good</span>
        </div>
      </div>
      <div>
        <div className="text-blob">
          Discover Your Good - DoGoodPoints was founded with an entrepreneurial
          spirit and an audacious objective: to help people like you discover
          causes that inspire and engage you to do good.
        </div>

        <div className="video">
          <div className="left">
            <div className="quote">
              “When I was first approached by Do Good Points, I was excited to
              learn how they can grow our online donations and donors”
            </div>
            <div className="name">
              Matt Hill, Chief Environmental Evangelist
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/aboutUs/quote.svg`}
              alt=""
            />
          </div>
          <div className="right" />

          <img
            className="video-img"
            src={`${process.env.PUBLIC_URL}/images/aboutUs/video-mockup@2x.jpg`}
            alt=""
          />
        </div>

        <div className="bottom">
          <div className="row">
            <img
              src={`${
                process.env.PUBLIC_URL
              }/images/aboutUs/business-corporation.svg`}
              alt=""
            />
            <div className="text-desc">
              <div className="title"> Do Good. Be Good. </div>
              <div className="desc">
                All of us have good in us, and we each have a role to play in
                making the world a better place. Whether it’s simply learning
                about a cause and sharing with others, or donating time or
                resources, we can be good by doing good, not tomorrow, but
                today.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="text-desc">
              <div className="title"> Do Good Together</div>
              <div className="desc">
                There is power in community and in finding a tribe of people who
                share your passion for a cause. Community motivates, supports,
                and empowers us to do good and to do it effectively. When we are
                each working towards a collective purpose greater than
                ourselves, we can make a big impact.
              </div>
            </div>
            <img
              src={`${
                process.env.PUBLIC_URL
              }/images/aboutUs/good-community.svg`}
              alt=""
            />
          </div>
          <div className="row">
            <img
              src={`${process.env.PUBLIC_URL}/images/aboutUs/group-2.svg`}
              alt=""
            />
            <div className="text-desc">
              <div className="title"> Do Good Business</div>
              <div className="desc">
                Doing good benefits everyone. The business of giving should be
                responsible, effective, and intentional, which enables us to “do
                good” more and often. We believe each of us deserves the chance
                to thrive financially – especially those in social impact and
                philanthropy sectors – and compensate our team to reflect the
                real price of doing good.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
