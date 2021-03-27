import React from "react";
import Style from "style-it";

class PhotoCard extends React.Component {
  render() {
    const styles = `
    .photo-card {
        width: 20rem;
        min-height: 15rem;
        margin: 0.02rem;
        text-align: center;
        padding: 0.5rem;
        bottom: 0rem;
        position: relative;

    }

    .image-fit{
        border-radius: 4.375rem;
        object-fit: cover; 
        width:300px; 
        height:300px; 
    }

    .spacer {
      position: absolute;
      bottom: 0rem;
    }
    `;
    return Style.it(
      `${styles}`,
      <div className="photo-card">
        <img className="image-fit" src={this.props.imagesrc} alt="" />
      </div>
    );
  }
}

export default PhotoCard;
