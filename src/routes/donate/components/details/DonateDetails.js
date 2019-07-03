import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import { Icon } from "antd";
import "./donateDetails.scss";
import LikeButton from "../../../../components/likeButton/LikeButton";
import * as util from "../../../../lib/util";
import DonateTabs from "./tabs/DonateTabs";
import EarnSection from "./earn/EarnSection";

function DonateDetails(props) {
  const { selectedDonation } = props;
  const { id } = props.match.params;

  useEffect(() => {
    props.actions.getDonateDetails(id);
    window.scrollTo(0, 0);
  }, []);

  if (!selectedDonation) return null;
  const images = JSON.parse(selectedDonation.creative);
  return (
    <div className="donate-details-container">
      <img
        className="donate-details-img"
        src={images["600x400"][0]}
        alt="donate-details-img"
      />
      <div className="donate-details">
        <img
          className="donate-details-logo"
          src={selectedDonation.logoURL}
          alt="donate-details-logo"
        />
        <h1>{selectedDonation.short_desc}</h1>
        <div className="donate-details-tags">
          {selectedDonation.categories.map((tag, i) => {
            return (
              <span key={i}>
                <Icon type="tag" />
                {tag}
              </span>
            );
          })}
        </div>
        <div className="donate-details-likes">
          <span>
            Liked by {util.intToString(selectedDonation.likeCount)} Do-gooders
          </span>
          <LikeButton {...props} border />
        </div>
      </div>
      <DonateTabs {...props} />
      <EarnSection {...props} />
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

const mapStateToProps = state => {
  const { donate } = state;
  return {
    ...donate
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DonateDetails);
