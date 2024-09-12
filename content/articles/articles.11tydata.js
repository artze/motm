module.exports = {
  permalink: function ({ title }) {
    return `/articles/${this.slugify(title)}`;
  },
};
