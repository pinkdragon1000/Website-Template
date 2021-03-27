import React from "react";
import Style from "style-it";

class ExperienceBox extends React.Component {
  render() {
    const styles = `
    .experience-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 0rem;
    }

    .date {
        color: var(--med-grey);
        font-weight: 400;
        font-size: 1.1rem;
    }
    `;
    return Style.it(
      `${styles}`,
      <div>
        <div className="experience-header">
          <p>{this.props.title}</p>
          <a href={this.props.link}>{this.props.linktext}</a>
        </div>
        <p className="date">{this.props.date}</p>
        <ul>{this.props.children}</ul>
        <br />
      </div>
    );
  }
}
export default ExperienceBox;
