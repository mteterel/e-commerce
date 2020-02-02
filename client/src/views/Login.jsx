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
      history.push("/");
    }
  }, [history, props.isLoggedIn]);

  const handleSubmit = (email, password) => {
    props.loginAsync(email, password);
  };

  return (
    <div>
      <Helmet title={"Login"} />
      <Container>
        <h2 className={"og-page-title"}>Login</h2>
        <hr />
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
