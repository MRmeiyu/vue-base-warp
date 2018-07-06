import Vue from 'vue';

// 占位字符
Vue.filter('placeholder', function (val, chars) {
  return val || chars || '--';
});

// JSON
Vue.filter('json', function (val) {
  return JSON.stringify(val);
});
