import { ProxyState } from "../AppState.js";
import Image from "../Models/Image.js";
import imageService from "../Services/ImageService.js";

//TODO Create methods for constructor, and rendering the image to the page
function _drawBackgroundImage() {
  let image = ProxyState.image
  document.getElementById("bg-img").style.backgroundImage = `url(${image})`
}

//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)
export default class ImageController {
  constructor() {
    this.getImage()
    ProxyState.on('image', _drawBackgroundImage)
  }

  getImage() {
    try {
      imageService.getImage()
    } catch (error) {
      console.error(error);
    }
  }

}