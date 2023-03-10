import { View, Text } from "react-native";
import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";

const SocialSignInButtons = () => {
  const onSignInFacebook = () => {
    console.log("sign in with facebook");
  };

  const onSignInGoogle = () => {
    console.log("sign in with google");
  };

  const onSignInApple = () => {
    console.log("sign in with Apple");
  };

  return (
    <>
      <CustomButton
        onPress={onSignInFacebook}
        text="Sign In with Facebook"
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        onPress={onSignInGoogle}
        text="Sign In with Google"
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        onPress={onSignInApple}
        text="Sign In with Apple"
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSignInButtons;
