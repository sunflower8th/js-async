var fs = require('fs');

var fileName = 'file1.text';

// 1,普通方法 读文件
fs.readFile(fileName,function(err,data){
  if(!err){
    console.log("异步回调函数读取结果"+data.toString())
  }
})


// 2,使用thunk方法
var thunk = function(fileName){
    return cb =>{
      fs.readFile(fileName,function(err,data){
          if(err) cb(err)
           cb(null,data)
      })
    }
} 
// generator 函数中使用 thunk + yield
function* thunkTest(){
  var fileName =  'file1.text';
  var res = yield thunk(fileName);
}

var res = thunkTest(); //得到generator 的指针
var dataRes = res.next();
dataRes.value(function(err,data){
    console.log("thunk 读取结果"+data.toString());
})


// 使用promise + generator + yield 读取文件
var promiseTest = function(fileName){
  return new Promise(function(resolve,reject){
    fs.readFile(fileName,function(err,data){
      if(err) reject(err)
      resolve(data)
    })
  })
}

var thunkPromise = function *(){
  var fileName =  'file1.text';
  var res = yield promiseTest(fileName);
}

var thunkPromiseRes = thunkPromise().next();

thunkPromiseRes.value.then(function(data){
   console.log('promise读取的结果 '+data)
})

// 使用co + generator 
//  co 函数包裹了promise
var co = require('co');
var readFile2 = (path)=>{
  return cb => {
    fs.readFile(path,(err,content)=>{
      if(!err){
        cb(err,content)
      }
    })
  }
}

function *coThunk(){
  var str1 = yield readFile2(__dirname+'/file1.text');
  // console.log(str1.toString())
  var str2 = yield readFile2(__dirname+'/file2.text')
  // console.log(str2)
  return [str1,str2]
}

co(coThunk()).then(result => {
  console.log("co 函数读取返回结果"+result)
})
















// var thunkify  = require('thunkify');
// var read = thunkify(fs.readFile);

// read('package.json')(function(err, str){
//     if(!err){
//         // console.log(str.toString())
//     }
// });


// function f(a, b, callback){
//     var sum = a + b;
//     // console.log(sum)
//     callback(sum);
//     callback(sum);
//   }
  
//   var ft = thunkify(f);
// //   console.log(ft.toString())
//   ft(1, 2)(console.log);


// //   tunk 控制generator 执行流程
//   function run(fn) {
//     var gen = fn(); // 获取generator对象
  
//     function next(err, data) {
//       var result = gen.next(data);
//       console.log(result)
//       if (result.done) return;
//       result.value(next);
//     }
  
//     next();
//   }
  
//   var gen = function* (){
//     var f1 = yield read('file1.text');
//     console.log(f1.toString())
//     var f2 = yield read('file2.text');
//     console.log(f2.toString())
//     // ...
//     // var fn = yield readFile('fileN');
//   };
  
//   run(gen)


