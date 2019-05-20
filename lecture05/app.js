//IIFE立即调用函数表达式
//第一个（）内是一个匿名函数 有独立的词法作用域，避免外界访问此IIFE中的变量，而且也不会污染全局作用域。第二个（）创建了一个立即执行函数表达式，
(function () {
'use strict';

angular.module('myFirstApp',[])

.controller('MyFirstController', function(){

});

})();