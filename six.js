/**
 * Created by Administrator on 2017/8/12.
 */
var filterFn = require('./six_filter.js');
var dir = process.argv[2];
var extName = process.argv[3];
filterFn(dir,extName,function (err,list) {
    if (err)
        if (err) throw err;
    list.forEach(function (file) {
        console.log(file)
    })
})