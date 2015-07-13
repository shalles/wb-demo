// AMD简单实例

/* 以requirejs为例
 * API请看链接 http://requirejs.org/docs/api.html
 *
 */

require.config({
    baseUrl:"src", //在path之上
    paths:{
        "modules": "src",
        "moduleB": "moduleA"
    }
})

//[module.name, , ]async  模块名与文件名可不同如 moudleB
require(["moduleC", "moduleB", "moduleD", "jquery"], function(mC, mA, mD, $){
    var countC1 = mC.getCount(),
        countA = mA.runCounter().runCounter().getCount(),
        countC2 = mC.getCount(),
        countD = mD.getCount();
    var countD2 = mD.add().getCount();
    alert(countA + ", " + countC1 + ", " + countC2 + ", " + countD+ ", " + countD2 + ", " + $("#title").text());
})