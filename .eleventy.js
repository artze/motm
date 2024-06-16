/** @param {import('@11ty/eleventy').UserConfig} eleventyConfig */
module.exports = function (elventyConfig) {
  elventyConfig.addPassthroughCopy({
    "./public/": "/",
  });

  return {
    dir: {
      input: "content",
      includes: "../_includes",
      data: "../_data",
      output: "_site",
    },
  };
};
