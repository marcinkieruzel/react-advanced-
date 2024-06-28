import React from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import { useParams } from "react-router-dom";
import useSwr from "swr";
import EventEmitter from "events";
import "swiper/css";

type Props = {
  emitter: EventEmitter;
};

const SingleProperty: React.FC<Props> = ({ emitter }): JSX.Element => {
  const params = useParams<{ id: string }>();

  const { data, error, mutate } = useSwr(
    "http://localhost:3001/properties/" + params.id,
    (url: string) => fetch(url).then((res) => res.json())
  );

  if (!data) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="container">
      <hr />
      {/* <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data?.fields?.gallery?.map((image: string, index: number) => (
          <SwiperSlide key={`${image}`}>
            <div
              style={{
                height: "400px",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundImage: `url(${image})`,
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper> */}

      <hr />
      <div className="row">
        <div className="col-9">
          <h1>{data.title}</h1>
          <h2>Price: {data.fields.price} $</h2>

          <p
            className="lead"
            dangerouslySetInnerHTML={{ __html: data?.excerpt }}
          ></p>

          <ul className="list-group">
            <li className="list-group-item">
              Bedrooms: {data?.fields?.bedrooms}
            </li>
            <li className="list-group-item">Baths: {data.fields?.baths}</li>
            <li className="list-group-item">
              Space: {data?.fields?.space} square meters
            </li>
          </ul>
        </div>

        <div className="col-3">
          <button
            onClick={() => {
              // emitter.emit("test", "Hello from Single Property");

              emitter.emit("add_property_to_cart", data);

              // dispatch({ type: CartActionNames.ADD_TO_CART, payload: data });
            }}
            type="button"
            className="btn btn-primary"
          >
            I'm interested in this property
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleProperty;
