import Example1 from "../images/examplephoto1.jpg";
import Example2 from "../images/examplephoto2.jpg";
import Example3 from "../images/examplephoto3.jpg";

export var photoArray = [Example1, Example2, Example3];

export var photoGroup = [];
var size = 3;
while (photoArray.length > 0) photoGroup.push(photoArray.splice(0, size));
