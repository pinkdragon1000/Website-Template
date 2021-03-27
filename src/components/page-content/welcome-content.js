import React from "react";
import { CardSubcontent } from "../export-components";
import { welcomeContent } from "../../utils/welcome-content-utils";

class WelcomeContent extends React.Component {
  render() {
    return (
      <div>
        {welcomeContent.map((option, i) => (
          <CardSubcontent
            key={i}
            header={option.header}
            textcontent={option.textcontent}
          />
        ))}
      </div>
    );
  }
}

export default WelcomeContent;
