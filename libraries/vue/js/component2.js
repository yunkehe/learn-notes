Vue.component('child', {
  // 声明 props
  props: ['message'],
  // 就像 data 一样，prop 也可以在模板中使用
  // 同样也可以在 vm 实例中通过 this.message 来使用
  template: '<span>{{ message }}</span>'
})

var bus = new Vue();

Vue.component('button-counter', {
  template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    incrementCounter: function () {
      this.counter += 1
      this.$emit('increment')
      bus.$emit('id-selected', 1);
    }
  },
});


var brotherComponent = Vue.extend({
    template: '<button v-on:click="getItem1">获取1的信息</button>',
    data: function(){},
    methods: {
        getItem1: function(){
            alert('hello');
        }
    },
    mounted: function() {
          bus.$on('id-selected', function (id) {
                alert(id)
          })
      }
});

Vue.component('brother-component', brotherComponent);

new Vue({
  el: '#counter-event-example',
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function () {
      this.total += 1
    }
  }
})




