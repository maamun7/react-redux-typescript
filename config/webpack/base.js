const path = require('path');
const webpack = require('webpack');
const SRC = path.resolve(__dirname, '../../src');
const DIST = path.resolve(__dirname, '../../dist');
const ENTRY = path.resolve(__dirname, '../../src/index');

module.exports = config => ({
	mode: 'development',
	entry: [ENTRY],
	output: {
        path: DIST,
        publicPath: '/',
		...config.output,
    },
	optimization: config.optimization,
	performance: config.performance || {},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
				  	loader: 'babel-loader'
				},
			},

			{
				test: /\.(ts|js)x?$/i,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"@babel/preset-env",
							"@babel/preset-react",
							"@babel/preset-typescript",
						],
					},
				},
			},

			{
                test: /\.tsx?$/,
                include: SRC,
                exclude: [/node_modules/, /\.spec.tsx?$/, /\.test.tsx?$/, /__snapshots__/, /__tests__/],
                use: [
                    {
                        loader: 'thread-loader',
                        options: {
                            workers: 2,
                            workerParallelJobs: 50
                        }
                    },
                    'babel-loader'
                ]
            },

			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader'],
			},

			{
				test: /\.(eot|otf|ttf|woff|woff2)$/,
				use: 'file-loader',
			},

			{
				test: /\.svg$/,
				use: [
					{
						loader: 'svg-url-loader',
						options: {
							limit: 10 * 1024,
							noquotes: true,
						}
					}
				]
			},

			{
				test: /\.(jpg|png|gif)$/,
				use: [
				  	{
						loader: 'url-loader',
						options: {
					  		// Inline files smaller than 10 kB
					  		limit: 10 * 1024,
						}
					},
				  	{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								enabled: false,
							},
							gifsicle: {
								interlaced: false,
							},
							optipng: {
								optimizationLevel: 7,
							},
							pngquant: {
								quality: '65-90',
								speed: 4,
							}
						}
				  	}
				]
			},

			{
				test: /\.html$/,
				use: 'html-loader',
			},

			{
				test: /\.(mp4|webm)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 10000,
					},
				}
			}
		],
	},

	plugins: config.plugins.concat([
		new webpack.EnvironmentPlugin({
			NODE_ENV: 'development',
		}),
	//	new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true }),
	]),

    resolve: {
		modules: ['node_modules', 'src'],
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
        symlinks: false,
        symlinks: false,
		alias: {
			containers: path.resolve(__dirname, 'containers'),
			components: path.resolve(__dirname, 'components'),
			routes: path.resolve(__dirname, 'routes'),
			utils: path.resolve(__dirname, 'utils'),
			styled: path.resolve(__dirname, 'utils/styled'),
			store: path.resolve(__dirname, 'store'),
			pages: path.resolve(__dirname, 'pages'),
			types: path.resolve(__dirname, 'types'),
		},
        // plugins: [new TsconfigPathsPlugin()],
		
    },

	devtool: "inline-source-map",
	devServer: config.devServer || {},
});