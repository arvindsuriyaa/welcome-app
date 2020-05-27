import React from "react";
import "./App.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { action1 } from "./store/actions/actions";

function App(props) {
  console.log("App Props", props);
  return (
    <div className="App">
      <h1>Welcome</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading:state.isLoading,
    isEdit:state.isEdit
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: bindActionCreators({ action1 }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
