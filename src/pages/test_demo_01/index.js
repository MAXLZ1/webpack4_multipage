import './index.css'
import img from '../../images/Flutter-Logo.png';
var imgElement = document.createElement('img');
imgElement.src = img;
document.body.appendChild(imgElement);
(() => {
    console.log(1);
})();
