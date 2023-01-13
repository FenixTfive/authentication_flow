import { Text, View, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import {
  NavigationHelpersContext,
  useNavigation,
} from "@react-navigation/native";

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState("");
  const navigation = useNavigation();

  const onConfirmPressed = () => {
    console.log("Confirming");
    navigation.navigate("Home");
  };

  const onResendPressed = () => {
    console.log("Resending code");
  };

  const onSignInPressed = () => {
    console.log("back to sign in");
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>
        <CustomInput placeholder="Code" value={code} setValue={setCode} />

        <CustomButton onPress={onConfirmPressed} text="Confirm" />

        <CustomButton
          onPress={onResendPressed}
          text="Resend Code"
          type="SECONDARY"
        />
        <CustomButton
          onPress={onSignInPressed}
          text="Back to Sign in"
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#FDB075",
  },
});

export default ConfirmEmailScreen;
