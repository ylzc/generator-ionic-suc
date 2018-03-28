const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        app: ['./src/index.js'],
    },
    output: {
        filename: 'build/[name].js',
        path: path.resolve(__dirname, "www"),
        chunkFilename:'build/[name].js'
    },
    module: {
        rules: [
            {
                test: /node_modules[\s\S]*\.css$/,
                include: /(node_modules)/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true //css压缩
                        }
                    },
                ]
            },
            {

                test: /www[\s\S]*\.css$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: "style-loader/url"
                    },
                    {
                        loader: "file-loader",
                        options: {
                            name: "assets/build/[name].[hash:7].css"
                        }
                    },
                    {
                        loader: "extract-loader",
                        options: {
                            publicPath: "../",
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true //css压缩
                        }
                    },
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                            removeComments: true,//清除HTML注释
                            collapseWhitespace: true,//压缩HTML
                            collapseBooleanAttributes: false,//省略布尔属性的值 <input checked="true"/> ==> <input />
                            removeEmptyAttributes: false,//删除所有空格作属性值 <input id="" /> ==> <input />
                            removeScriptTypeAttributes: false,//删除<script>的type="text/javascript"
                            removeStyleLinkTypeAttributes: false,//删除<style>和<link>的type="text/css"
                            minifyJS: false,//压缩页面JS
                            minifyCSS: false//压缩页面CSS
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader/url"
                    },
                    {
                        loader: "file-loader",
                        options: {
                            name: "build/[name].[hash:7].css"
                        }
                    },
                    {
                        loader: "extract-loader",
                        options: {
                            publicPath: "../",
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true //css压缩
                        }
                    },
                    {
                        loader: 'sass-loader',
                    }
                ]
            },
            {
                test: /\.(woff|woff2|svg|eot|ttf)$/,
                loader: 'url-loader',
                query: {
                    limit: 500,
                    loader: 'file-loader',
                    name: "assets/fonts/[name].[hash:7].[ext]"
                }
            },
            {
                test: /\.(jpeg|jpg|png|gif)$/,
                loader: "url-loader",
                query: {
                    limit: 100,
                    loader: 'file-loader',
                    name: "assets/images/[name].[hash:7].[ext]"
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([
            "./www/build",
            "./www/assets"
        ]),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./www/dll/manifest.json')
        }),
        new webpack.ProvidePlugin({
            "$": 'jquery',
            "jQuery": 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html', //通过模板生成的文件名
            template: 'src/index.html',//模板路径
            inject: true, //是否自动在模板文件添加 自动生成的js文件链接
            minify: {
                removeComments: true,//清除HTML注释
                collapseWhitespace: true,//压缩HTML
                collapseBooleanAttributes: false,//省略布尔属性的值 <input checked="true"/> ==> <input />
                removeEmptyAttributes: false,//删除所有空格作属性值 <input id="" /> ==> <input />
                removeScriptTypeAttributes: false,//删除<script>的type="text/javascript"
                removeStyleLinkTypeAttributes: false,//删除<style>和<link>的type="text/css"
                minifyJS: false,//压缩页面JS
                minifyCSS: false//压缩页面CSS
            },
            hash:true
        })
    ],
};
