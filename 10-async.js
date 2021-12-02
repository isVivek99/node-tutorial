const {readFile, writeFile} = require('fs')
readFile('./content/first.txt','utf8',(err, result)=>{
    if(err){
        console.log("err:",err)
       return
    }
    console.log("res:",result)
    const first = result
    readFile('./content/second.txt','utf8', (err,res)=>{
        if(err){
            console.log(err)
            return
        }
        const second = res
        writeFile('./content/result-async.txt',`Here is the result : ${first}, ${second}`,
        (err,res)=> {
            if(err){
                console.log(err)
                return
            }
            console.log(res)
        })
    })
})