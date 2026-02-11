module.exports = (api) => {
  const isTest = api.caller((caller) => caller && caller.name === "babel-jest");

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: isTest ? { node: "current" } : { browsers: ["> 1%", "last 2 versions"] },
        },
      ],
      ["@babel/preset-react", { runtime: "automatic" }],
    ],
  };
};