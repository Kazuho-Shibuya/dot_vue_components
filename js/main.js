(function () {
  "use strict";

  //components

  var likeComponent = Vue.extend({
    props: ['message'],
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button @click="countUp">{{ message }} {{ count }}</button>',
    methods: {
      countUp: function () {
        this.count++;
      }
    }
  });

  var app = new Vue({
    el: "#app",
    components: {
      'like-component': likeComponent
    }
  });
})();
