module.exports = {
  root: true,
  extends: "@react-native-community",
  // Add rules to make eslint's react-native and prettify agree with each other
  rules: {
    "quotes": ["error", "double"],
    "comma-dangle": ["error", "never"]
  }
};
