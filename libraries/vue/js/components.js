var Child = {
	methods: {
		go: function(){
			console.log('测试')
		}
	},
	template: '<div>初始化一个组件</div>'
};

var Child2 = Vue.extend({
	template: '<div>测试vue.extend初始化组件</div>'
})

var app1 = new Vue({
  el: '#app1',
  components: {
  	'my-component': Child,
  	'my-component2': Child2
  },
  data: {
    items: [
      {msg: 'Foo' },
      {msg: 'Bar' }
    ]
  }
});