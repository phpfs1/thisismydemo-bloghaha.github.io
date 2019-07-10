### require.js

```
1.下载 require.js
	
	<script src="./require.js" data-main="js/main" ></script>
	
	data-main 定义主文件
2. 
	写自己的模块
	
	define(function(){
		
		var add = function (x,y){
			return x + y
		}
		
		return {
			add : add
		}
		
	})
	
	引入第三方模块
	 1.支持 amd,并且 define
	 2.不支持amd
	 
	 1.jquery 支持 amd
	 
	 
	 const baseUrl = "../node_modules/jquery/dist/";
	 require.config({
	     paths : {
	         "jquery" : [baseUrl+"jquery.min"],
	 		  "math"   : "math"
	     },
	 });
	 
	 
	 2.backbone 不支持 amd ，需要加 shim
	 
	 require.config({
	 	
	     paths : {
	         "jquery" : [baseUrl+"jquery.min"],
	 		"math"   : "math"
	     },
	  	shim: {  //不支持 amd 的话, 需要新增 shim 			
	  　　　　　　'backbone': {
	  　　　　　　　　deps: ['underscore', 'jquery'],
	  　　　　　　　　exports: 'Backbone'
	  　　　　　　}
	  　　　　}
	 })
	
3. 具体使用


require(["jquery"],function($){
    $(function(){
        //alert("load finished");  
    })
})


4.配合 r.js  合并 打包 js
             合并 打包 css
			 
			 

```