import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";
import ReactImageMagnify from "react-image-magnify";
import ReactSlick from "react-slick";
import "./ProductGallery.module.scss";

const ProductGallery = props => {
  return (
    <div>
      <ReactSlick
        customPaging={i => (
          <a>
            <Image thumbnail src={props.images[i]} />
          </a>
        )}
        arrows={false}
        dots={true}
        infinite={true}
        autoplay={true}
        autoplaySpeed={2800}
        dotsClass={"slick-dots slick-thumb"}
        slidesToShow={1}
        slidesToScroll={1}
      >
        {props.images.map((v, i) => (
          <div key={i}>
            <ReactImageMagnify
              smallImage={{
                src: v,
                isFluidWidth: true
              }}
              largeImage={{
                src: v,
                width: 700,
                height: 700
              }}
              enlargedImagePosition={"over"}
            />
          </div>
        ))}
      </ReactSlick>
    </div>
  );
};

ProductGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ProductGallery;
