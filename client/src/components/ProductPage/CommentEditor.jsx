import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { FaStar } from "react-icons/all";
import { Button, Form, Spinner } from "react-bootstrap";
import axios from "axios";
import PropTypes from "prop-types";

const CommentEditor = props => {
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(null);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (isSending) {
      axios
        .post(
          "https://localhost:8000/api/products/" + props.productId + "/reviews",
          {
            comment: content,
            rating: rating
          }
        )
        .catch(err => alert(err))
        .finally(() => {
          setIsSending(false);
        });
    }
  }, [content, isSending, props.productId, rating]);

  const handleSubmit = e => {
    e.preventDefault();
    setIsSending(true);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <span>Rating: </span>
        <Rating
          emptySymbol={<FaStar />}
          fullSymbol={<FaStar color={"#fdcc0D"} />}
          onChange={value => setRating(value)}
          initialRating={rating}
        />
      </div>
      <Form.Group>
        <Form.Control
          as={"textarea"}
          rows={4}
          placeholder={"Write a review..."}
          onChange={e => setContent(e.target.value)}
          value={content}
        />
      </Form.Group>
      <Form.Group>
        <Button
          type={"submit"}
          disabled={isSending}
          variant={"primary"}
          size={"sm"}
        >
          {isSending ? (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          ) : (
            "Submit"
          )}
        </Button>
      </Form.Group>
    </Form>
  );
};

CommentEditor.propTypes = {
  productId: PropTypes.number.isRequired
};

export default CommentEditor;
