// generator +yield

function* fib2(){
    yield 0;
    yield 1;
    var p1 =0,p2=1,cur = p1+p2;
    // console.log('cur'+cur)
    while(true){
        // console.log('cur'+cur)
        yield cur;
        p1 = p2;
        p2 = cur;
        cur = p1+p2
    }
}

var fibIter2 = fib2(); //调用 generator 返回指针
for(var i=0;i<8;i++){
    // console.log(fibIter2.next().value);
}

function* list(){
    for(var i=0;i<arguments.length;i++){
        yield arguments[i]
    }

    return 'done'
}

// var o = list(1,2,3);
// console.log(o.next())
// console.log(o.next())
// console.log(o.next())
// console.log(o.next())
// console.log(o.next())


// function fab(max) {
//     var count = 0, last = 0, current = 1;

//     while(count++ < max) {
//         yield current;
//         var tmp = current;
//         current += last;
//         last = tmp;
//     }
// }

// for(var i of fab(10)) {
//     console.log(i);
// }

var someAsyncThing = function() {
    // return new Promise(function(resolve, reject) {
    //   resolve("I'm Resolved!");
    // });

    return cb = function(){
        cb(null,'23')
    }
  };
//   promise 返回 resolve的结果
//   someAsyncThing().then(function(res) {console.log(res);});
  // Works as expected: logs I'm Resolved!
  
//   function* getPromise() {
//     // yield + promise 返回的是 resolve的结果
//       var x = yield someAsyncThing();
//       console.log("x: " + x); // Fails x undefined
//   }
  
//   var y = getPromise();
//   console.log(y); // returns {}
  
//   console.log(y.next());

function getPromise(){

    var x = yield someAsyncThing;
    console.log('x'+x)
}

getPromise()