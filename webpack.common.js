const path = require('path')
const WorkboxPlugin = require('workbox-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		publicPath: '/',
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, './build')
	},
	module: {
		rules: [
			{
				test: /\.(sc|sa|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							config: {
								path: './'
							}
						}
					},
					{
						loader: 'sass-loader',
						options: {
							implementation: require('sass')
						}
					}
				]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						plugins: ['@babel/plugin-syntax-dynamic-import']
					}
				}
			},
			{
				test: /\.(ico|png|jpe?g|gif|svg|ttf|woff)$/,
				use: [
					{
						loader: 'file-loader'
					}
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'bundle.[hash].css'
		}),
		new HtmlWebpackPlugin({
			inject: true,
			template: path.join(__dirname, './index.ejs')
		}),
		new WorkboxPlugin.GenerateSW({
			exclude: [/\.(?:png|jpg|jpeg|svg)$/],
			runtimeCaching: [
				{
					urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
					handler: 'CacheFirst',
					options: {
						cacheName: 'images',
						expiration: {
							maxEntries: 999
						}
					}
				}
			]
		})
	],
	devtool: 'inline-source-map',
	mode: 'development',
	devServer: {
		historyApiFallback: true
	},
	externals: {
		config: JSON.stringify({
			baseURL: 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/'
		})
	}
}
