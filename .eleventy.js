module.exports = function (elventyConfig) {
  elventyConfig.addPassthroughCopy({
    "./public/": "/",
  });
};
