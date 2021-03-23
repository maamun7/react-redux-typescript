const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();
const ESLintPlugin = require('eslint-webpack-plugin');
const DIST = path.resolve(__dirname, '../../dist');
const ENTRY = path.resolve(__dirname, '../../src/index');
const STATIC = path.resolve(__dirname, '../../public/static');
const INDEX_HTML = path.resolve(__dirname, '../../public/index.html');

module.exports = require('./base')({
  	mode: "development",
	entry: [
		'react-hot-loader/patch',
		'webpack-hot-middleware/client?reload=true',
		path.join(process.cwd(), ENTRY),
	],
    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].js',
    },
	optimization: {
		splitChunks: {
		  	chunks: 'all',
		},
	},
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
	plugins: [
        new CleanWebpackPlugin(),
		new ErrorOverlayPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			process: 'process/browser',
		}),
        new HtmlWebpackPlugin({
			inject: true,
            template: INDEX_HTML,
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
		new ESLintPlugin({
			extensions: ["js", "jsx", "ts", "tsx"],
		}),
        new CopyPlugin({
			patterns: [
			  	{ from: STATIC, to: DIST },
			],
		}),        
		new ForkTsCheckerWebpackPlugin({
			async: false,
		}),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true
        }),
        new webpack.ids.HashedModuleIdsPlugin({
			context: __dirname,
			hashFunction: 'sha256',
			hashDigest: 'hex',
			hashDigestLength: 20
		}),
        new CompressionPlugin()
	],
	tsLoaders: [
		{ loader: 'babel-loader' },
		{
		  loader: 'ts-loader',
		  options: {
				transpileOnly: true,
				logLevel: 'info',
				getCustomTransformers: () => ({
					before: [styledComponentsTransformer],
				}),
		  	},
		},
	],
	devServer: {
		hot: true,
		inline: true,
		host: '127.0.0.1',
		port: 1234,
		//open: true, 
		overlay: true,
		contentBase: "/src/",
		historyApiFallback: true,
		watchContentBase: true,
		disableHostCheck: true,
		stats: { children: false },
	},
	performance: {
		hints: false,
	},
});
