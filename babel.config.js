module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    ["module-resolver", {
      "root": ["./"],
      "alias": {
        "manage": "./src/manage",
        "page": "./src/page",
        "src": "./src"
      }
    }]
  ]
};
