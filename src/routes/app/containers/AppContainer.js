import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "../../auth/actions";
import * as appActions from "../../app/actions";
import App from "../components/App";

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        ...authActions,
        ...appActions
      },
      dispatch
    )
  };
};

const mapStateToProps = state => {
  const { auth, app } = state;
  return {
    ...auth,
    ...app
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
