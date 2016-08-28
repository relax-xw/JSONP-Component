
#### JSONP 解决跨域问题

  - 问题
    + 安全 -> 禁止AJAX跨域操作
    + 使用CORS
    + 使用JSONP
    + Angular 的$http 服务支持 JSONP，但是某些 API 不支持Angular 的JSONP 写法
    + 即： callback=JSON_CALLBACK（JSON_CALLBACK为占位符，会被Angular内部替换）
      替换后的内容是 xxx.xxx的形式，就是这种形式的回调名称不被支持（如 豆瓣 API）
    + 自己实现 JSONP 组件
