import React from "react";

import { NavbarItem, Card } from "../export-components";

import Style from "style-it";

class NavbarandContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;

    const styles = `
        
    .tab-list-item {
        display: inline-block;
        list-style: none;
        padding: 1rem 1rem;
        cursor: pointer;
        font-size: 1.5rem;
    }

    .tab-list {
        text-align: center;
    }

    .tab-list-active {
        font-weight: 600;
        border-bottom: 0.2rem solid var(--light-purple);
        border-radius: 0.4rem;
        color: var(--dark-purple);
    }

    .tab-list-active::before {
        content: "✿ ";
        color: var(--light-purple);
    }
    `;

    return Style.it(
      `${styles}`,
      <div className="tabs">
        <ol className="tab-list">
          {children.map((child) => {
            const { label } = child.props;

            return (
              <NavbarItem
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          <Card>
            {children.map((child) => {
              if (child.props.label !== activeTab) return undefined;
              return child.props.children;
            })}
          </Card>
        </div>
      </div>
    );
  }
}

export default NavbarandContent;
