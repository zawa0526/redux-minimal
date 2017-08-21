import React from "react";
import GitList from "./common/GitList";

export default class GitHome extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <GitList/>
      </div>
    );
  }
}
