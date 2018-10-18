(function(exports,require,module,__filename,__dirname) 
//module wrapper function 
{
    console.log(__filename);
    console.log(__dirname);
var url='http://mylogger.io/log';
function log(message)
{
    //send an http request
    console.log(message);
}
module.exports=log;//exports is a reference

})