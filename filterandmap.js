var arr=[10,50,70,100];
var map=arr.map(function(val,index){
    val=val+50;
    return val;
})
console.log("before mapping",arr);
console.log("after mapping",map);