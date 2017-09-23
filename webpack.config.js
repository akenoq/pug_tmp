module.exports = {
    entry: "./static/script/MainClass.js",
    output: {
		filename: "./static/script/app.js"
	},
    module: {
	    rules: [
            {
                test: /\.pug$/,
                use: "pug-loader"
            }
        ]
    }
};
