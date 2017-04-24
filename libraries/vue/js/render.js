var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      {msg: 'Foo' },
      {msg: 'Bar' }
    ]
  },

});

var example2 = new Vue({
	el: '#example-2',
	data: {
		a: 1,
		b: 2
	},

	methods: {
		doSomething: function (){
			this.a++;
		}
	},

	watch: {
		'a': function(val, oldVal){
			console.log('watch a: ', arguments);
		}
	}
})