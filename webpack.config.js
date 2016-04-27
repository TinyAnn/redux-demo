const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const cheerio = require('cheerio')
const fs = require('fs')

const nodeRoot = path.join(__dirname, 'node_modules');
const reactPath = path.join(nodeRoot, 'react/dist/react.js');
const reactDOMPath = path.join(nodeRoot, 'react-dom/dist/react-dom.js');
const reduxPath = path.join(nodeRoot, 'redux/dist/redux.js');
const reduxReactPath = path.join(nodeRoot, 'react-redux/dist/react-redux.js');

const TARGET = process.env.npm_lifecycle_event;
const NpmInstallPlugin = require('npm-install-webpack-plugin');
process.env.BABEL_ENV = TARGET;

const PATHS = {
	app: path.join(__dirname, 'app'),
  	src: path.join(__dirname, 'src'),
  	dist: path.join(__dirname, 'src/dist')
}

const config = {
	entry:{
		index: path.resolve(PATHS.src, 'index'),
		test: path.resolve(PATHS.src, 'test'),
        common: ['react', 'react-dom', 'redux', 'react-redux']
    },
	output:{
		path: PATHS.dist,
		filename: '[name].[hash].js'
	},
	resolve: {
		alias: {
			'react': reactPath,
			'react-dom': reactDOMPath,
			'redux':reduxPath,
			'react-redux':reduxReactPath
		},
    	extensions: ['', '.js', '.jsx'],
    	root:__dirname
  	},
  	module:{
  		loaders:[{
  			test: /\.jsx?$/,
  			loader: 'babel',
  			include:[PATHS.app, PATHS.src]
  		},{
  			test:/\.css$/,
  			loader: 'style!css',
  			include:PATHS.app
  		},{
  			test:/\.scss$/,
  			loader: 'style!css!sass',
  			include:PATHS.app
  		},{
  			test: /\.(png|jpg)$/,
      		loader: 'url?limit=25000',
      		include:PATHS.app
  		}],
  		perLoaders:[{
            test: /\.jsx?$/,
            include: PATHS.app,
            loader: 'jshint-loader'
        }],
  		noParse: ['react', 'react-dom', 'redux', 'react-redux']
  	},
  	//配置jshint的选项，支持es6的校验
  	jshint: {
	  "esnext": true
	},
    plugins:[
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js')
    ]
}

if(TARGET ===  'start' || !TARGET){
	module.exports = merge(config, {
	 	devtool: 'eval-source-map',
		devServer: {
			contentBase: PATHS.src,
			historyApiFallback: true,
			hot: true,
			inline: true,
			progress: true,
			stats: 'errors-only',
			host: process.env.HOST,
			port: process.env.PORT
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
	      	new NpmInstallPlugin({
	        	save: true
	      	})
		]
	});
}

if(TARGET === 'build'){
	module.exports = merge(config, {
		/*plugins: [
	      	function(){
	      		const indexSrc = './src/index.html'
	            this.plugin('done', stats => {
	                fs.readFile(indexSrc, (err, data) => {
	                    const $ = cheerio.load(data.toString());
	                    $('script[src]').attr('src', 'dest/[name].'+stats.hash+'.js');
	                    fs.write(indexSrc, $.html(), err => {
	                        !err && console.log('Set has success: '+stats.hash)
	                    })
	                })
	            })
	        }
		]*/
	});
}