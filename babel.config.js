module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["import", { "libraryName": "antd-mobile", "style": "css" }] // `style: true` for less
  ]
};
