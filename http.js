/*
 * @Author: xw
 * JSONP 组件
 * @Date:   2016-08-28 10:54:50
 * @Last Modified by:   xw
 * @Last Modified time: 2016-08-28 11:17:14
 */
'use strict';
(function (window, document) {
  // url  data  callback
  function jsonp(url, data, callback) {
    /*准备一个相对唯一的回调函数名称*/
    var fnSuffix = Math.random().toString().replace('.', '')
    var callbackFnName = 'json_callback' + fnSuffix
      /*将 callback 挂在window对象上*/
    window[callbackFnName] = callback
      /*========data参数处理========*/
    var query = url.indexOf('?') === -1 ? '?' : '&'
    for (let item in data) {
      query += item + '=' + data[item] + '&'
    }
    query += 'callback=' + callbackFnName
      /*将 script 标签挂在document上，挂在后会立刻请求src地址，并执行请求过后的内容*/
    var scriptElement = document.createElement('script');
    scriptElement.src = url + query;
    document.body.appendChild(scriptElement);
  }
  /*暴露方法*/
  window.jsonp = jsonp
})(window, document)
