import React from "react";
import "../index.css";
import {
  Header,
  NavbarandContent,
  Footer,
  SocialBox,
} from "./export-components";
import {
  headerData,
  navbarOptions,
  socialBoxOptions,
  footerData,
} from "../utils/app-utils";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header
          imgdir={headerData.imgdir}
          header={headerData.header}
          subheader={headerData.subheader}
          socialbox={<SocialBox fill="white" options={socialBoxOptions} />}
        />

        <NavbarandContent>
          {navbarOptions.map((option, i) => (
            <div key={i} label={option.name}>
              {option.component}
            </div>
          ))}
        </NavbarandContent>

        <Footer label={footerData} />
      </div>
    );
  }
}

export default App;
