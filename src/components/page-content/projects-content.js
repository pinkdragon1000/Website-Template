import React from "react";
import { ProjectCard, SocialBox } from "../export-components";
import { projectGroup } from "../../utils/projects-content-utils";
import Style from "style-it";

class ProjectsContent extends React.Component {
  render() {
    const styles = `
    .row center-container {
      position: absolute; 
      bottom: 0px; 
    }
    `;
    return Style.it(
      `${styles}`,
      <div>
        {projectGroup.map((option, i) => (
          <div className="row" key={i}>
            <ProjectCard
              title={option[0].title}
              description={option[0].description}
              socialbox={
                <SocialBox
                  fill="var(--dark-purple)"
                  options={option[0].socialBoxOptions}
                  width={30}
                  height={30}
                  className="social-box"
                />
              }
            />
            {option[1] === undefined ? (
              ""
            ) : (
              <ProjectCard
                title={option[1].title}
                description={option[1].description}
                socialbox={
                  <SocialBox
                    fill="var(--dark-purple)"
                    options={option[1].socialBoxOptions}
                    width={30}
                    height={30}
                    className="social-box"
                  />
                }
              />
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default ProjectsContent;
