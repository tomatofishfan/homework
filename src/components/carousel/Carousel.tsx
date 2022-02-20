import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import CarouselImg from "./CarouselImg";
import CarouselIntro from "./CarouselIntro";

import useScrollBox from '@/hooks/useScrollBox';
import { ProductData } from "@/interfaces/demo";

type Data = {
  custom: ProductData;
  atClickTriall: () => void
}

const Carousel = ({ custom, atClickTriall }: Data): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const { isDragging } = useScrollBox(ref);

  const atClickCarouselArrow = (dir: number) => {
    switch (dir) {
      case -1:
        if (ref.current) {
          ref.current.scrollLeft -= 280;
        }

        break;
      case 1:
        if (ref.current) {
          ref.current.scrollLeft += 280;
        }
        break;
      default:
        break;
    }
  }

  return (
    <div className="carousel">
      <div className="carousel_outer">
        <div className="carousel_inner" ref={ref} style={{ scrollBehavior: isDragging ? undefined : 'smooth' }}>
          <div className="carousel_list" role="list" style={{ pointerEvents: isDragging ? 'none' : undefined }}>
            {
              custom.map((product) => (
                <div key={product.id} className="carousel_item">
                  <CarouselImg id={product.attributes.productable_id} imgUrl={product.attributes.shop_cover_image_url} name={product.attributes.name} />
                  <CarouselIntro attributes={product.attributes} atClickTriall={atClickTriall} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
      {
        custom.length > 3 &&
        <>
          <FontAwesomeIcon icon={faChevronLeft} className="fa-w-20 carousel_arrow carousel_arrow-left" onClick={() => { atClickCarouselArrow(-1) }} />
          <FontAwesomeIcon icon={faChevronRight} className="fa-w-20 carousel_arrow carousel_arrow-right" onClick={() => { atClickCarouselArrow(1) }} />
        </>
      }

    </div>
  )
}

export default Carousel;