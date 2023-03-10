import React, { useEffect } from "react";
import { redirect, useLocation } from "react-router-dom";
import authService from "./authService";

const parseJwt = (token) => {
  try {
    return JSON.parse(Buffer.from(token.split(".")[1], "base64"));
    // return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

const AuthVerify = ({ props }) => {
  let location = useLocation();

  useEffect(() => {
    //   const user = JSON.parse(localStorage.getItem("user"));
    const user = authService.getCurrentUser();
    // console.log("USER TEST TOKEN");

    if (user) {
      const decodedJwt = parseJwt(user.accessToken);
      console.log("USER  TOKEN", decodedJwt);
      if (decodedJwt.exp * 1000 < Date.now()) {
        console.log("expier");
        authService.logout();
        // redirect("/login");
      }
    }
  }, [location, props]);

  return <div></div>;
};

export default AuthVerify;
