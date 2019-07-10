({

	appDir: './', //项目根目录

	dir: './dist', //输出目录，全部文件打包后要放入的文件夹（如果没有会自动新建的）

	baseUrl: './',

	fileExclusionRegExp: /^(r|build)\.js|.*\.scss$/, //过滤，匹配到的文件将不会被输出到输出目录去

	optimizeCss: 'standard',

	removeCombined: true ,//如果为true，将从输出目录中删除已合并的文件,
	 paths: {
        "foo.bar": "../scripts/foo/bar",
        "baz": "../another/path/baz"
    },

})

// 打包 css https://www.jb51.net/article/138964.htm
