import { Platform } from "react-native";

export const formatPrice = (price) => {
  "worklet";
  return Platform.OS === "ios"
    ? `\$${price.toLocaleString("en-US", { currency: "USD" })}`
    : `\$${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};
