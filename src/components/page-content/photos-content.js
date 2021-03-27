import React from "react";
import PhotoCard from "../reusable-components/photo-card";
import { photoGroup } from "../../utils/photos-content-utils";

class PhotosContent extends React.Component {
  render() {
    return (
      <div>
        {photoGroup.map((option, i) => (
          <div className="row" key={i}>
            <PhotoCard imagesrc={option[0]} />
            {option[1] === undefined ? "" : <PhotoCard imagesrc={option[1]} />}
            {option[2] === undefined ? "" : <PhotoCard imagesrc={option[2]} />}
          </div>
        ))}
      </div>
    );
  }
}

export default PhotosContent;
