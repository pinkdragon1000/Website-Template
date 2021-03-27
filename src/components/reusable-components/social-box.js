import React from "react";
import { Icon } from "../export-components";

class SocialBox extends React.Component {
  render() {
    return (
      <div className="row center-container">
        {this.props.options.map((option, i) => (
          <a href={option.url} target="blank_" key={i}>
            <Icon
              name={option.icon}
              fill={this.props.fill}
              width={this.props.width || 50}
              height={this.props.height || 50}
            />
          </a>
        ))}
      </div>
    );
  }
}

export default SocialBox;
