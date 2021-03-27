import React from "react";
import Style from "style-it";

class Header extends React.Component {
  render() {
    const styles = `
    .row {
      height: 7rem;
    }
    .gradient-bg {
      padding-top: 1.5rem;
      min-width: 618px;
      background-image: radial-gradient(circle at 38% 55%, hsla(149,0%,62%,0.1) 0%, hsla(149,0%,62%,0.1) 23%,transparent 23%, transparent 78%,transparent 78%, transparent 100%),radial-gradient(circle at 34% 85%, hsla(149,0%,62%,0.1) 0%, hsla(149,0%,62%,0.1) 7%,transparent 7%, transparent 41%,transparent 41%, transparent 100%),radial-gradient(circle at 0% 36%, hsla(149,0%,62%,0.1) 0%, hsla(149,0%,62%,0.1) 2%,transparent 2%, transparent 59%,transparent 59%, transparent 100%),radial-gradient(circle at 42% 37%, hsla(149,0%,62%,0.1) 0%, hsla(149,0%,62%,0.1) 6%,transparent 6%, transparent 21%,transparent 21%, transparent 100%),radial-gradient(circle at 48% 39%, hsla(149,0%,62%,0.1) 0%, hsla(149,0%,62%,0.1) 8%,transparent 8%, transparent 90%,transparent 90%, transparent 100%), var(--gradient);
    }

    .header-img {
      border-radius: 50%;
      margin-top: 5rem;
    }

    .header {
      color: var(--white);
      font-size: 5rem;
      padding-left: 1.6rem;
    }

    .subheader {
      font-weight: 400;
      color: var(--white);
      text-align: center;
    }
    `;
    return Style.it(
      `${styles}`,
      <div className="gradient-bg">
        <div className="column">
          <div className="row center-container">
            <img className="header-img" src={this.props.imgdir} alt="" />
            <h1 className="header">{this.props.header}</h1>
          </div>
          <h1 className="subheader">{this.props.subheader}</h1>
          {this.props.socialbox}
        </div>
      </div>
    );
  }
}
export default Header;
