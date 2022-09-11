const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  publicPath: process.env.NODE_ENV === "production"
    ? '/yarikomi-page/'
    : './',
  assetsDir: './',
  outputDir: 'docs'
})
