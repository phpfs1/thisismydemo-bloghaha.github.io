
const baseUrl = "../node_modules/jquery/dist/";


require.config({
	//baseUrl : "node_modules/jquery/dist",
    paths : {
        "jquery" : [baseUrl+"jquery.min"],
		"math"   : "math"
    },
// 	shim: {  不支持 amd 的话, 需要新增 shim
// 			
// 　　　　　　'backbone': {
// 　　　　　　　　deps: ['underscore', 'jquery'],
// 　　　　　　　　exports: 'Backbone'
// 　　　　　　}
// 　　　　}
})

require(["jquery"],function($){
    $(function(){
        //alert("load finished");  
    })
})


require(["math"],function(math){
	console.log(math.add(1,2));
})