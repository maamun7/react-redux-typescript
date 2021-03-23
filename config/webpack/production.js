const path = require('path');
const OfflinePlugin = require('offline-plugin');
const DIST = path.resolve(__dirname, '../../dist');
const ENTRY = path.resolve(__dirname, '../../src/index');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const webpack = require('webpack');
const INDEX_HTML = path.resolve(__dirname, '../../public/index.html');

module.exports = require('./base')({
	mode: 'production',

	entry: path.join(process.cwd(), ENTRY),

	output: {
		filename: '[name].[chunkhash].js',
		chunkFilename: '[name].[chunkhash].chunk.js',
	},

	tsLoaders: [
		{ loader: 'babel-loader' },
		{
			loader: 'ts-loader',
			options: {
				transpileOnly: true,
				logLevel: 'info',
			},
		},
	],

	optimization: {
		minimize: true,
		minimizer: [
		  	new TerserPlugin({
				terserOptions: {
					warnings: false,
					compress: {
						comparisons: false,
					},
					parse: {},
					mangle: true,
					output: {
						comments: false,
						ascii_only: true,
					},
				},
			//	sourceMap: true,
		  	}),
		],
		nodeEnv: 'production',
		sideEffects: true,
		concatenateModules: true,
		runtimeChunk: 'single',
		splitChunks: {
		  	chunks: 'all',
		  	maxInitialRequests: 10,
		  	minSize: 0,
		  	cacheGroups: {
				vendor: {
			  		test: /[\\/]node_modules[\\/]/,
			  		name(module) {
						const packageName = module.context.match(
							/[\\/]node_modules[\\/](.*?)([\\/]|$)/,
						)[1];

						return `npm.${packageName.replace('@', '')}`;
			  		},
				},
		  	},
		},
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: INDEX_HTML,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true,
			},
			inject: true,
		}),
		//new OfflinePlugin(),
		/* new OfflinePlugin({
			responseStrategy: 'network-first',
			relativePaths: false,
			publicPath: '/',
			appShell: '/',
			excludes: ['.htaccess'],
	
			caches: {
				main: [':rest:'],
				additional: ['*.chunk.js'],
			},
		  	safeToUseOptionalCaches: true,
		}), */
	
		new CompressionPlugin({
			algorithm: 'gzip',
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0.8,
		}),
	
		new WebpackPwaManifest({
			name: 'React Redux Typescript',
			short_name: 'React RT',
			description: 'React boilerplate with redux & typescript !',
			background_color: '#fafafa',
			theme_color: '#b1624d',
			inject: true,
			ios: true,
			icons: [
				{
					src: path.resolve('public/static/images/icon-512x512.png'),
					sizes: [72, 96, 128, 144, 192, 384, 512],
				},
				{
					src: path.resolve('public/static/images/icon-512x512.png'),
					sizes: [120, 152, 167, 180],
					ios: true,
				},
			],
		}),

		new webpack.ids.HashedModuleIdsPlugin({
			hashFunction: 'sha256',
			hashDigest: 'hex',
			hashDigestLength: 20,
		}),
	],
	
	performance: {
		assetFilter: assetFilename => !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
	}
});