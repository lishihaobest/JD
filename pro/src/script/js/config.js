//require.config({  })   配置模块

require.config({
	baseUrl:'../src/script/thirdplugins/',//基路径，模块的共有的路径。
	paths:{//引入模块的地址，文件不能添加扩展名
		'jquery':'jquery',
		'jqlazy':'jquery-lazyload',
		'cookie':'cookie',
	},
	shim:{//非AMD规范的JS文件,就需要使用Require中的shim.
		exports:'',//exports 表示输出的对象名
		dep:['jquery']//deps 为数组,表示其依赖的库,
	}
});
