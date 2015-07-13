
//先载依赖moduleB
define("moduleC", ["moduleB"], function(mB){
    var count = 0;

    return {
        getCount: function(){
            return mB.getCount() + 1;
        }
    }
})