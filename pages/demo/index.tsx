import type { NextPage } from "next";
import Link from "next/link";
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons'
import { faChevronLeft, faChevronRight, faUserGroup, faStar, faStarHalfStroke, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Demo: NextPage = () => {
  return (
    <section className="section">
      <div className="section_inner">
        <div className="section_title">
          <hr className="section_title_line"></hr>
          <div className="section_title_inner">
            <FontAwesomeIcon icon={faFaceSmile} className="fa-icon fa-w-24 mr-15" />
            <h2>強檔多益教材</h2>
          </div>
          <hr className="section_title_line"></hr>
        </div>
        <div className="carousel">
          <div className="carousel_outer">
            <div className="carousel_inner">
              <ul>
                <li>
                  <Link href="/">
                    <a>
                      <div className="carousel_img">
                        <Image
                          className="image"
                          src="https://public.wordup.com.tw/shop/books/monster_7000/Cover_monster_7000_new_D.png"
                          alt=""
                          layout="fill"
                          objectFit='contain'
                          priority={true}
                        />
                      </div>
                    </a>
                  </Link>
                  <div className="carousel_body">
                    <div className="carousel_body_box">
                      <div className="carousel_body_together">
                        <FontAwesomeIcon icon={faUserGroup} className="fa-icon fa-w-18" />
                        4193人一起學習
                      </div>
                      <div className="carousel_body_text">
                        <Link href="/">
                          <a>
                            <h4>怪物講師多益單字＋五回題庫（2021修訂版</h4>
                          </a>
                        </Link>
                        <p>最專業的怪物講師多益系列，一次補齊！</p>
                      </div>
                      <div className="carousel_body_score">
                        <div className="carousel_body_star">
                          <FontAwesomeIcon icon={faStar} className="fa-icon fa-w-16" />
                          <FontAwesomeIcon icon={faStarHalfStroke} className="fa-icon fa-w-16" />
                        </div>
                        <span>4.7</span>
                        <span>(153)</span>
                      </div>
                      <div className="carousel_body_hashtag">
                        <span>#英文基礎</span>
                        <span>#英文基礎</span>
                        <span>#英文基礎</span>
                      </div>
                    </div>
                    <div className="carousel_body_box">
                      <div className="carousel_body_price">
                        <h6>NT$933</h6>
                        <p>定價 NT$1098</p>
                      </div>
                      <div className="carousel_body_btn">
                        <button
                          className="btn btn-primary"
                          type="button"
                        >
                          免費試用
                        </button>
                        <Link href="/">
                          <a className="btn btn-secondary">
                            看更多
                            <FontAwesomeIcon icon={faArrowRight} className="fa-icon fa-w-14" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <FontAwesomeIcon icon={faChevronLeft} className="fa-w-20 carousel_arrow carousel_arrow-left" />
          <FontAwesomeIcon icon={faChevronRight} className="fa-w-20 carousel_arrow carousel_arrow-right" />
        </div>
      </div>
    </section>
  )
}

export default Demo