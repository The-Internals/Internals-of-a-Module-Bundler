module.exports = {
  mode: 'development',
  entry: './entry.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      runtime: true,
      chunks: 'all',
      minChunks: 2,
    },
  },
  // alias: {
  //   bundle: './src/bundle'
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'css-loader',
          options: {},
        },
      },
    ],
  },
};

// module.accept((bundle) => {
//   updateMyReducer(bundle);
// });

// __foo() {
//   webpack.foo();
// }

// webpack.foo = new Function();

// function foo() {
//   console.log('bar');
// }
