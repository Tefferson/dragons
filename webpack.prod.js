const merge = require('webpack-merge')
const common = require('./webpack.common')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = merge(common, {
	devtool: 'eval',
	plugins: [
		new CopyWebpackPlugin([
			{ from: './src/favicon.ico', to: './favicon.ico' },
			{ from: './src/assets/images', to: './assets/images' },
			{ from: './src/assets/static', to: './assets/static' },
			{ from: './src/assets/manifest.json', to: './assets/manifest.json' }
		])
	]
})
