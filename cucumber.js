module.exports = {
  default: {
    paths: ["tests/feature/*.feature"],
    require: ["tests/stepDef/**/*.js", "tests/support/**/*.js"],
    format: ["progress","allure-cucumberjs/reporter"],
    parallel: 1,
    retry: 0,
  },
};
