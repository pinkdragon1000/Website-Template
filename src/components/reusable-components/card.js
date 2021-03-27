import React from "react";
import Style from "style-it";

class Card extends React.Component {
  render() {
    const styles = `
    .content-text {
      background-color: var(--grey);
      height: 100%;
      min-height: 26rem;
      width: 85vw;
      padding: 3rem;
  }
    `;
    return Style.it(
      `${styles}`,
      <div className="column center-container">
        <div className="content-text">{this.props.children}</div>
      </div>
    );
  }
}
export default Card;
