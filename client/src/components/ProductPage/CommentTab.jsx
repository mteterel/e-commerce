import React from "react";
import PropTypes from "prop-types";
import { Col, ListGroup, Row } from "react-bootstrap";
import CommentEditor from "./CommentEditor";
import Comment from "./Comment";

const CommentTab = props => {
  return (
    <div style={{ padding: "1.3em" }}>
      <Row>
        <Col md={12}>
          <CommentEditor productId={props.productId} />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <ListGroup variant={"flush"}>
            {props.reviews.map((v, index) => (
              <ListGroup.Item key={index}>
                <Comment user={v.user} content={v.comment} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

CommentTab.propTypes = {
  productId: PropTypes.number.isRequired,
  reviews: PropTypes.array.isRequired
};

export default CommentTab;
