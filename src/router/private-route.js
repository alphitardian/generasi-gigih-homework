import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedin } = useSelector((state) => state.credential);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.any,
};
