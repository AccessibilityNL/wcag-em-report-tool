module.exports = function (eleventyConfig) {

  // Copy assets
  eleventyConfig.addPassthroughCopy({'app/assets/**/*': 'assets/'});

  return {
    dir: {
      input: "app/views",
      includes: "../_includes",
      output: "_build"
    }
  };
};
