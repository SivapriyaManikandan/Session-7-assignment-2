 var sum = 0;
function findsum(){
   
    var i;
    for (i=0;i<arguments.length;i++)
        {
            sum = sum + arguments[i];
        }
return sum;
}
findsum(1,2,3,4,5,6,7,8,9,10);
alert("finding sum");
console.log(sum);
