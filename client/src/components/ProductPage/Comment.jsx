import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";
import Rating from "react-rating";
import { FaStar, FaUser } from "react-icons/all";

const Comment = props => {
  return (
    <Row>
      <Col md={1}>
        <FaUser color={"#161616"} size={"90%"} />
      </Col>
      <Col md={11}>
        <div>
          <span style={{ verticalAlign: "middle" }}>
            Review from user <strong>{props.user}</strong>
          </span>
          <span style={{ marginLeft: "0.4em", marginRight: "0.4em" }}>
            &middot;
          </span>
          <Rating
            readonly
            initialRating={3.0}
            emptySymbol={<FaStar />}
            fullSymbol={<FaStar color={"#fdcc0d"} />}
          />
        </div>
        <p style={{ fontSize: "14px", margin: 0 }}>{props.content}</p>
      </Col>
    </Row>
  );
};

Comment.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Comment;
