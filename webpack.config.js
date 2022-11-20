const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: { main: './src/main.ts', expose: './src/expose.ts' },
	module: {
		rules: [
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
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
};
