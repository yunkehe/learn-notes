var Child = {
	methods: {
		go: function(){
			console.log('测试')
		}
	},
  data: function(){

  },
	template: '<div>初始化一个组件</div>'
};

var Child2 = Vue.extend({
	template: '<div>vue.extend初始化组件</div>'
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

var data = { counter: 0 }
// Vue.component('simple-counter', );

var simpleCounter = {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  // 技术上 data 的确是一个函数了，因此 Vue 不会警告，
  // 但是我们却给每个组件实例返回了同一个对象的引用
  data: function () {
    return {
        counter: 0
    }
  },
};

new Vue({
  el: '#example-2',
  components: {
    'simple-counter': simpleCounter
  }
})