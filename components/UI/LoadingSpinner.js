import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";

const LoadingSpinner = () => {
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
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

export default LoadingSpinner;
