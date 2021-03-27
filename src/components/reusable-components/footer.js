import React from "react";
import Style from "style-it";

class Footer extends React.Component {
  render() {
    const styles = `
    .footer {
        padding-top: 1rem;
        text-align: center;
    }
    `;
    return Style.it(
      `${styles}`,
      <div className="footer">{this.props.label}</div>
    );
  }
}

export default Footer;
