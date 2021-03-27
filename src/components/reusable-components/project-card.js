import React from "react";
import Style from "style-it";

class ProjectCard extends React.Component {
  render() {
    const styles = `
    .project-card {
        width: 40rem;
        min-height: 20rem;
        background-color: var(--white);
        border-radius: 4.375rem;
        margin: 1rem;
        text-align: center;
        padding: 0.5rem;
        bottom: 0rem;
        position: relative;
    }

    .spacer {
      position: absolute;
      bottom: 0rem;
    }
    `;
    return Style.it(
      `${styles}`,
      <div className="project-card">
        <p>{this.props.title}</p>
        {this.props.description}
        <div className="spacer" />
        {this.props.socialbox}
      </div>
    );
  }
}

export default ProjectCard;
