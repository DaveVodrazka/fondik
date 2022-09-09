const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/main.ts',
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		new CopyPlugin({
			patterns: [{ from: 'src/ads.txt' }],
		}),
	],
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
};
