var rang = function(min,max){
    return {
        cur:min,
        hasNext:function(){
            return this.cur<max;
        },
        next:function(){
          return this.cur++
        },
        reset:function(){
          throw Error('unsuppoer opeator')  
        }
    }
}

for(var iter = rang(1,10);iter.hasNext();){
    i = iter.next();
    console.log(i);
}



