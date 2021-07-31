import { Platform } from "react-native";

export const formatPrice = (price) => {
  "worklet";
  return Platform.OS === "ios"
    ? `\$${price.toLocaleString("en-US", { currency: "USD" })}`
    : `\$${parseFloat(price.toString())
        .toFixed(2)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};
