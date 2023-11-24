import * as React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const PageHead = ({ img, title }) => {

  const isBrowser = typeof window !== "undefined";
  if (!isBrowser) {
    return;
  }

  function moveImages() {
    
    const windowScrollTop = window.scrollY || window.pageYOffset;
    const image = document.querySelector('.page--head .page--head_img-contain .gatsby-image-wrapper');

    //const elementScrollTop = image.scrollTop;
    const windowHeight = window.innerHeight;
    const scrollPxPastTrigger = windowScrollTop;
    const percentScrolled = scrollPxPastTrigger / windowHeight;
    const moveLength = 100;
    const transformString = `translateY(-${moveLength * percentScrolled}px)`;

    if(image !== null){
      image.style.transform = transformString;
    }

  }

  //moveImages();

  window.addEventListener('scroll', moveImages);



  return (
    <div className="page--head">
      <div className="page--head_img-contain">
          <GatsbyImage
            image={getImage(img)}
            alt={`${title} Featured Image`}
          />
      </div>
      <h1>{title}</h1>
    </div>
  )
}

export default PageHead