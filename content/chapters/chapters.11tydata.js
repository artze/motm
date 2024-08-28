module.exports = {
  layout: "base.njk",
  permalink: function ({ title }) {
    return `/${this.slugify(title)}`;
  },
  tags: ["content"],
};
