import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../auth/actions";
import App from "../components/App";

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

const mapStateToProps = state => {
  const { auth } = state;
  return {
    ...auth
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
