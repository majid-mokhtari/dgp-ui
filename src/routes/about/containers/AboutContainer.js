import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";
import About from "../components/About";

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

const mapStateToProps = state => {
  const { about } = state;
  return {
    ...about
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
