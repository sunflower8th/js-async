var fs = require('fs');

var readFile = function (fileName){
  return new Promise(function (resolve, reject){
    fs.readFile(fileName, function(error, data){
      if (error) reject(error);
      resolve(data);
    });
  });
};


 async  function asyncReadFile(){
    var f1 = await readFile('test.text');
    // var f2 = await readFile('/etc/shells');
    console.log(f1.toString());
    console.log(f2.toString());
  };

  //async 返回一个promise对象
  function timeout(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  
  async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value)
  }
  
  asyncPrint('hello world', 50);