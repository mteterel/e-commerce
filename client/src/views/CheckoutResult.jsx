import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import apiService from "../api";
import CheckoutSuccess from "../components/Checkout/CheckoutSuccess";
import CheckoutFailure from "../components/Checkout/CheckoutFailure";

const CheckoutResult = () => {
  const params = useParams();
  const [orderResult, setOrderResult] = useState(null);

  useEffect(() => {
    // query for checkout result
    apiService.fetchCheckoutResult(params.orderUuid).then(res => {
      setOrderResult(res.data.orderResult);
    });
  }, [params.orderUuid]);

  return <div>{orderResult ? <CheckoutSuccess /> : <CheckoutFailure />}</div>;
};

export default CheckoutResult;
