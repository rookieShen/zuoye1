/**
 * Created by Administrator on 2017/8/12.
 */
var http = require('http')
http.get(process.argv[2],function (response) {
    response.setEncoding('utf-8')
    response.on('data',function (data) {console.log(data)})
    response.on('error',function (error) {console.log(error)})
})