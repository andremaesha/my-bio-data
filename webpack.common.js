const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Clean = require("clean-webpack-plugin");
const workbox = require("workbox-webpack-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");
const ImageminWebpackPlugin = require("imagemin-webpack-plugin").default;
const ImageminMozjpeg = require("imagemin-mozjpeg");

module.exports = {
  entry: {
    app: "./src/app.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(png|jpeg|jpg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
              publicPath: "images/",
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new Clean.CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ["app"],
      filename: "index.html",
      favicon: "./src/images/internet.png",
    }),
    new HtmlWebpackPlugin({
      template: "./src/nav.html",
      chunks: ["app"],
      filename: "nav.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/about.html",
      chunks: ["app"],
      filename: "pages/about.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/education.html",
      chunks: ["app"],
      filename: "pages/education.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/home.html",
      chunks: ["app"],
      filename: "pages/home.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/skill.html",
      chunks: ["app"],
      filename: "pages/skill.html",
    }),
    new copyWebpackPlugin({
      patterns: [
        {
          from: "./src/images",
          to: "images",
        },
        {
          from: "./src/manifest.json",
        },
      ],
    }),
    new workbox.InjectManifest({
      swSrc: "./src/sw.js",
    }),
    new ImageminWebpackPlugin({
        plugins: [
          ImageminMozjpeg({
            quality: 50,
            progressive: true,
          }),
        ],
      }),
  ],
};
