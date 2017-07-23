/*
 ./webpack.config.js
 */
const path = require('path');
module.exports = {
	entry: ['babel-polyfill', './main.js'],
	output: {
		path: path.resolve('dist'),
		filename: 'main.bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
		]
	}
}