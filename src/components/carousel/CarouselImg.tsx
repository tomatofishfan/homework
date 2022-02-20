import Link from "next/link";
import Image from 'next/image'

type Data = {
  id: string;
  imgUrl: string;
  name: string;
}

const CarouselImg = ({ id, imgUrl, name }: Data): JSX.Element => {
  return (
    <Link href={`/product/${id}`}>
      <a>
        <div className="carousel_img">
          <Image
            className="image"
            src={imgUrl}
            alt={name}
            layout="fill"
            objectFit='contain'
            priority={true}
          />
        </div>
      </a>
    </Link>
  )
}

export default CarouselImg;