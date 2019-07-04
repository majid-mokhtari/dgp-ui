import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import { Icon } from "antd";
import LikeButton from "../../../../components/likeButton/LikeButton";
import * as util from "../../../../lib/util";
import DonateTabs from "./tabs/DonateTabs";
import EarnSection from "./earn/EarnSection";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  margin: 20px;
  flex-wrap: wrap;
`;
const StyledImg = styled.img`
  width: 60%;
  height: 400px;
`;
const StyledDonateDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px;
  align-items: center;
`;
const StyledLogo = styled.img`
  width: 100%;
  margin: auto;
`;
const StyledTagsContainer = styled.div`
  display: flex;
  margin-bottom: 25px;
  justify-content: center;
`;
const StyledTag = styled.div`
  margin-left: 10px;
`;
const StyledIcon = styled.i`
  margin-right: 10px;
  margin-bottom: 20px;
`;
function DonateDetails(props) {
  const { selectedDonation } = props;
  const { id } = props.match.params;

  useEffect(() => {
    props.actions.getDonateDetails(id);
    window.scrollTo(0, 0);
  }, []);

  if (!selectedDonation) return null;
  const images = JSON.parse(selectedDonation.creative);
  console.log(selectedDonation);
  return (
    <StyledContainer>
      <StyledImg src={images["600x400"][0]} alt="donate-details-img" />
      <StyledDonateDetails>
        <StyledLogo src={selectedDonation.logoURL} alt="donate-details-logo" />
        <h1>{selectedDonation.short_desc}</h1>
        <StyledTagsContainer>
          {selectedDonation.categories.map((tag, i) => {
            return (
              <StyledTag key={i}>
                <StyledIcon>
                  <Icon type="tag" />
                </StyledIcon>
                {tag}
              </StyledTag>
            );
          })}
        </StyledTagsContainer>
        <div>
          <span>
            Liked by {util.intToString(selectedDonation.likeCount)} Do-gooders
          </span>
          <LikeButton {...props} border />
        </div>
      </StyledDonateDetails>
      <DonateTabs {...props} />
      <EarnSection {...props} />
    </StyledContainer>
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
