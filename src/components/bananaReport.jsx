import React from "react";
import { Translation } from "react-i18next";

class BananaReport extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  plusOne = () => {
    this.setState({ count: eval(this.state.count + 1)})
  }

  render() {
    return (
      <Translation>
        {(t) => (
          <div className="container">
            <button className="plus" onClick={this.plusOne}>+</button>
            <h3 className="subtitle">{t("banana", { count: this.state.count } )}</h3>
          </div>
        )}
      </Translation>
    );
  }
}

export default BananaReport;
