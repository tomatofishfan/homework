import type { NextPage } from "next";
import { useEffect, useState } from "react";
import axios from "axios";

import { Carousel, Title } from "@/components/_uikits";
import { AxiosResponse, ProductList } from "@/interfaces/demo";

const Demo: NextPage = () => {
  const [data, setData] = useState<ProductList[]>([]);

  const fetchData = () => {
    axios.get('/api/products/recommend/picked_product_flash_sale')
      .then((res: AxiosResponse<ProductList>) => {
        setData([res.data])
      }).catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    fetchData();
  }, [])

  // click event
  const atClickTriall = () => {
    alert('免費試用!');
  }

  return (
    <>
      {
        data.length > 0 && data.map((list: ProductList) => (
          <section key={list.id} className="section">
            <div className="section_inner">
              <Title title={list.attributes.name} />
              <Carousel custom={list.attributes.custom} atClickTriall={atClickTriall} />
            </div>
          </section>
        ))
      }
    </>
  )
}

export default Demo