import { memoize } from "lodash";
import { bindActionCreators } from "redux";
import * as actions from "../store/actions";

const bindDispatch = memoize((dispatch) => ({
  dispatch,
  actions: bindActionCreators(actions, dispatch),
}));

export default bindDispatch;
