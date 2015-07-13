define("moduleB", function(){
    var count = 0;

    return {
        getCount: function(){
            return count;
        },
        runCounter: function(){
            ++count;
            return this;
        }
    }
})