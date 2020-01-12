import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import LoginForm from "../components/LoginForm";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router";
import { loginAsync } from "../store/user";
import { connect } from "react-redux";

const Login = props => {
  const history = useHistory();

  useEffect(() => {
    if (props.isLoggedIn) {
      // TODO: redirect to expected page
      history.push("/");
    }
  }, [props.isLoggedIn]);

  const handleSubmit = (email, password) => {
    props.loginAsync(email, password);
  };

  return (
    <div>
      <Helmet title={"Login"} />
      <Container>
        <h2>LOGIN {props.isLoggedIn ? "true" : "false"} :</h2>
        <LoginForm onSubmit={handleSubmit} />
      </Container>
    </div>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn
});

const mapDispatchToProps = {
  loginAsync
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
