import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup, faStar, faStarHalfStroke, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import useWindowSize from "@/hooks/useWindowSize";
import { ProductDatInfo } from "@/interfaces/demo";

type Data = {
  attributes: ProductDatInfo;
  atClickTriall: () => void;
}

const CarouselIntro = ({ attributes, atClickTriall }: Data): JSX.Element => {
  const { width } = useWindowSize();

  const setStar = (num: number) => {
    const stars = [];
    let number;
    for (number = 0; number < Math.floor(num); number++) {
      stars.push(<FontAwesomeIcon key={number} icon={faStar} className="fa-icon fa-w-16" />);
    }
    if (num % 1 > 0) {
      stars.push(<FontAwesomeIcon key={number + 1} icon={faStarHalfStroke} className="fa-icon fa-w-16" />);
    }
    return stars;
  }

  return (
    <div className="carousel_body">
      <div className="carousel_body_box">
        <div className="carousel_body_together">
          <FontAwesomeIcon icon={faUserGroup} className="fa-icon fa-w-18" />
          {attributes.students_count}人一起學習
        </div>
        <div className="carousel_body_text">
          <Link href={`/product/${attributes.productable_id}`}>
            <a>
              <h4>{attributes.name}</h4>
            </a>
          </Link>
          <p>{attributes.slogan}</p>
        </div>
        <div className="carousel_body_score">
          <div className="carousel_body_star">
            {
              setStar(attributes.average_rating)
            }
          </div>
          <span>{attributes.average_rating}</span>
          <span>({attributes.rating_count})</span>
        </div>
        {
          width > 600 &&
          <div className="carousel_body_hashtag">
            {
              attributes.tags.map((tag: any) => (
                <span key={tag}>#{tag}</span>
              ))
            }
          </div>
        }
      </div>
      <div className="carousel_body_box">
        <div className="carousel_body_price">
          <h6>NT${attributes.sale_price}</h6>
          <p>定價 NT${attributes.list_price}</p>
        </div>
        <div className="carousel_body_btn">
          <button
            className="btn btn-primary"
            type="button"
            onClick={atClickTriall}
          >
            免費試用
          </button>
          <Link href={`/product/${attributes.productable_id}`}>
            <a className="btn btn-secondary">
              看更多
              <FontAwesomeIcon icon={faArrowRight} className="fa-icon fa-w-14" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CarouselIntro;