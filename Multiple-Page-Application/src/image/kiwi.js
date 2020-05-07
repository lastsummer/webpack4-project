import kiwi from './image.png'
import  './kiwi.scss'

class KiwiImage {
  render(){
    const img = document.createElement('img')
    img.src = kiwi
    img.alt = 'kiwi'
    img.classList.add('kiwi-image')

    const body = document.querySelector('body');
    body.appendChild(img)
  }
}


export default KiwiImage;