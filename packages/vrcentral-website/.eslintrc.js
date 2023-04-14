module.exports = {
  extends: [require.resolve("eslint-vrcentral-config"), "next/core-web-vitals"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
};
