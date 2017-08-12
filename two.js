/**
 * Created by Administrator on 2017/8/11.
 */
console.log(process.argv);
var resule = 0;
for (var i=2;i<process.argv.length;i++){
    resule += Number(process.argv[i])
}
console.log(resule);