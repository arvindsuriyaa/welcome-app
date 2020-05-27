import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { bindDispatch } from "./utils";

function App(props) {
  console.log("App Props", props);
  return (
    <div className="App">
      <h1>Welcome</h1>
    </div>
  );
}

const mapStateToProps = createSelector(
  (state) => state.app,
  (app) => ({ app })
);

export default connect(mapStateToProps, bindDispatch)(App);
