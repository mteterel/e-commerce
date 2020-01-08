import React, { useState } from "react";
import { Button, Col, Form, Input, Row } from "antd";

const LoginForm = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (props.onSubmit) props.onSubmit();
  };

  return (
    <div>
      <Row>
        <Col span={12} offset={6}>
          <h2>LOGIN :</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Item label="Email">
              <Input
                placeholder=""
                value={email}
                onChange={handleChangeEmail}
              />
            </Form.Item>
            <Form.Item label="Password">
              <Input.Password
                placeholder=""
                value={password}
                onChange={handleChangePassword}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit" /*disabled={hasErrors(getFieldsError())}*/
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default LoginForm;
