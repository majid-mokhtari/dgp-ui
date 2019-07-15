import React from "react";
import "./how.scss";

export default function How(props) {
  return (
    <div className="how-it-works-container">
      <div className="hero">
        <img
          src={`${process.env.PUBLIC_URL}/images/howItWorks/top-bg.jpg`}
          alt=""
        />
        <div className="hero-text">
          <span className="title">What is “Good Points”</span>
          <span className="desc">
            DoGoodPoints is a digital marketing platform that makes it fun to do
            good by connecting you with causes and charities that ignite passion
            and inspire action.
          </span>
        </div>
      </div>
      <div>
        <div className="text-blob">Easy Ways To Earn Good Points</div>
      </div>
      <div className="ways-to-earn-container">
        <div className="left-section-container">
          <div className="section">
            <img
              src={`${process.env.PUBLIC_URL}/images/howItWorks/learn.svg`}
              alt=""
            />
            <div>
              <div className="title">Learn</div>
              <div className="desc">Easy Ways To Earn Good Points</div>
              <div className="earn">Earn 5 Points </div>
            </div>
          </div>
          <div className="section">
            <img
              src={`${process.env.PUBLIC_URL}/images/howItWorks/share.svg`}
              alt=""
            />
            <div>
              <div className="title">Join the Discussion</div>
              <div className="desc">
                Join the discussion by commenting on causes/stories you care
                about.
              </div>
              <div className="earn">Earn 5 Points </div>
            </div>
          </div>
          <div className="section">
            <img
              src={`${process.env.PUBLIC_URL}/images/discussion.svg`}
              alt=""
            />
            <div>
              <div className="title">Share</div>
              <div className="desc">
                Sharing is caring! Share stories, articles, and information
                about causes you care about with your friends.
              </div>
              <div className="earn">Earn 5 Points </div>
            </div>
          </div>
          <div className="section">
            <img
              src={`${process.env.PUBLIC_URL}/images/howItWorks/donate.svg`}
              alt=""
            />
            <div>
              <div className="title">Donate $20</div>
              <div className="desc">
                Donate to causes and organizations you wish to support! They
                need our help and support.
              </div>
              <div className="earn">Earn 5 Points </div>
            </div>
          </div>
        </div>
        <div className="right-section-container" />
        <img
          src={`${process.env.PUBLIC_URL}/images/howItWorks/group-2.png`}
          alt=""
        />
      </div>
    </div>
  );
}
