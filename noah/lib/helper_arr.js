/**
 * 数组对象helper
 */
window.helper_arr = {
	 /**
	  * 取对象中指定key值数据
	  * ar: 对象数组
	  * key: 逐级key组成的数组
	  * --------------------
	  * 		res={'a':{'b':'y':{'c':'你好'}}};
	  * 		HAr.get( res,['a','b','c'], '哈哈没找到吧' ); 相当于取res['a']['b']['c'], 没取到返回'哈哈没找到吧'
	  */
	get : function(arr, key, def){

	},

	/**
	 * 计算对象长度
	 * obj:对象
	 */

	len : function(){

	},

	/**
	 * 数据处理
	 * 1, HAr.rebuild(result,'id','row')  将同结构对象组成的数组结果集， 以单元对象id项值为key，单元对象为value的对象返回
	 * 2, HAr.rebuild(result,'id','group') 将同结构对象组成的数组结果集， 以单元对象id项值为key，id项值相同的单元组合的数组为value， 返回2维对象数组
	 * 3, HAr.rebuild(result,['id','name']) 将同结构对象组成的数组结果集， 对象key为id的数据为key，key为name的数据位value组成新对象返回
	 * 4, HAr.rebuild(result,'id') 将同结构对象组成的数组结果集， 将单元对象id的值组成一个数组返回
	 */

	 rebuild : function(){

	 },

	 /**
	  * 排序
	  * result[0]={name:"George", age:32, retiredate:"March 12, 2014"}
	  * result[1]={name:"Edward", age:17, retiredate:"June 2, 2023"}
	  * 
	  * 直接调用函数: result.sort(HAr.by("age","inc/dec")); 则按age项排序后返回新数组
	  */

	  by : function(){

	  },

	  /* 名称: 求数组中最大值
	 */

	 max : function(){
	 	
	 }
}