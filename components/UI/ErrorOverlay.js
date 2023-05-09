import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";
import Button from "../UI/Button";

const ErrorOverlay = ({ message, onConfirm }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: GlobalStyles.colors.primary700,
        padding: 24,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          marginBottom: 8,
          fontSize: 20,
          fontWeight: "bold",
          color: "white",
        }}
      >
        An error occured!
      </Text>
      <Text
        style={{
          textAlign: "center",
          marginBottom: 8,
          fontSize: 18,
          color: "white",
        }}
      >
        {message}
      </Text>
      <Button onPress={onConfirm}> Okay </Button>
    </View>
  );
};

export default ErrorOverlay;
