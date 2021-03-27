import React from "react";
import Style from "style-it";

class CardSubcontent extends React.Component {
  render() {
    const styles = `
    .card-subcontent-header {
      text-align: center;
      color: var(--dark-purple);
  }
    `;
    return Style.it(
      `${styles}`,
      <div>
        <h2 className="card-subcontent-header">{this.props.header}</h2>
        <div>{this.props.textcontent}</div>
      </div>
    );
  }
}
export default CardSubcontent;
