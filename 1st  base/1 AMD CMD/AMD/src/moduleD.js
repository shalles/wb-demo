
//AMD的类CMD模式
define(function(require, module, exports){  

    //与define([module1, moduleB], fucntion...)类似
    var mB = require("moduleB")

    //导出后访问module.exports = count 
    //module.exports = mB.getCount();

    //error 替换了module 没有导出 AMD  CMD 一样
    // module = {
    //     count: mB.getCount()
    // }

    //module.count
    //module.count = mB.getCount();   

    // error 
    // exports = {
    //     count: mB.getCount()
    // }


    //true moudle.count 
    //等同于CMD的
    //module.exports = {
    //    count: mB.getCount()
    //}
    //访问module.count
    //
    return {
        add: function(){
            mB.runCounter();
            return this;
        },
        getCount: mB.getCount
    }
})