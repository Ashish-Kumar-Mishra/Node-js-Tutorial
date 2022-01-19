// console.log('Node App');
// const a=5;
// const b=10;
// console.log('a is equal to :%s and b is equal to :%s',a,b);
// console.log(a*b);


/*                        Module                */
// const os=require('os')
// console.log(os.type());
// console.log(os.platform());

// own module
const car = {
  branch: 'BMW',
  model: "Z4"
}
// console.log(car);
// module.exports=car
exports.car = car

// const lodash = require('lodash');
/*                        NPM Scripts               */
// console.log('NPM SCRIPTS');

/*                        types of package              */

/*                        NPX              */
const _ = require('lodash');
/*                        package json               */
/*                        unintall package               */
/*                        Event loop           */

// const bar=()=>console.log('bar'); 

// const baz=()=>console.log('baz'); 

// const foo=()=>{
//     console.log('foo');
//     bar();
//     baz();
// }
//  this is call stack will execute 
// foo 
// bar 
// baz
// const foo=()=>{
//     console.log('foo');
//     setTimeout(bar,1000);
//     baz();

// }
// foo();
//  this is call stack will execute 
// foo 
// baz 
// bar  // run in backgroung after 1sec


/*                                  callbacks                                    */

// function getMessage() {
//     setTimeout(() => {
//         console.log('get Message');
//         callback();
//     }, 1000)
// }
// function DisplayMessage() {
//     console.log('Display Message');
// }
// getMessage();
// DisplayMessage();



// function getMessage(msg, callback) {
//     setTimeout(() => {
//         console.log(msg);
//         callback();
//     }, 1000)
// }
// function DisplayMessage() {
//     console.log('Display Message');
// }
// // getMessage('get message',DisplayMessage)
// getMessage('get message',()=>console.log('display message'));


/*                                  promises                                      */

// let promise=new Promise(function(resolve,reject){
//     setTimeout(()=>resolve('Run Before'),1000)
//     // setTimeout(()=>reject(new Error('Whoops')),1000)
// });
// promise.then(
//     result=>{
//         console.log(result);
//         // getAfter();
//     },
//     error=>console.log(error)
//     );
// function getAfter(){
//     console.log('Print After');
// }
// getAfter();

/*                                  Async & Await                                     */
// function Clown() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('hi')
//         }, 2000)
//     })
// }

// // function msg(){
// //     const msg=Clown();
// //     console.log('Message',msg);
// // }
// // async function msg() {
// //     const msg = await Clown();
// //     console.log('Message:', msg);
// // }
// async function msg(callback) {
//     const msg = await Clown();
//     console.log('Message:', msg);
//     callback();
// }
// // msg();
// msg(getResult);
// function getResult(){
//     console.log('Execute after');
// }
// // getResult();

// /*                                  HTTP server                                    */
// const http=require('http');

// const hostname="127.0.0.1"
// const port=3000;

// // const server=http.createServer((req,res)=>{
// //     res.statusCode=200;
// //     res.setHeader('Content-Type','text/plain');
// //     res.end('welcomr to HTTP server')
// // })

// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/plain'})
//     res.write('welcome to HTTP server')
//     res.end();
// })

// server.listen(port,hostname,()=>{
//     console.log(`Server running at http://${hostname}:${port}`);
// });

//  /*                                  Making http request                                    */
//  const http=require('http')
//  http.get('http://api.open-notify.org/astros.json',resp=>{
//      let data="";
//      resp.on('data',chunk=>{
//          data+=chunk 
//      });

// resp.on('end',()=>{
//     let jsondata=JSON.parse(data)
//     console.log(jsondata);
// });
//  })

/*                                   http Post request                                    */
// const http=require('https');

// const data=JSON.stringify({
//     name:"John Doe",
//     Job:'Content Writer'
// });

// const options={
//     hostname:'reqres.in',
//     path:'/api/users',
//     method:'POST',
//     header:{
//         'Content-Type':'application/json'
//     }
// }


// // request
// const req=http.request(options,(res)=>{
//     let data="";
//     console.log('status code:',res.statusCode);
//     res.on('data',(chunk)=>{
//         data+=chunk;
//     });
//     res.on('end',()=>{
//         console.log("Body:",JSON.parse(data));
//     })
// })
// req.write(data);
// req.end();







// const axios=require('axios');

// const data=JSON.stringify({
//     name:"John Doe",
//     Job:'Content Writer'
// });

// const options={
//     hostname:'reqres.in',
//     path:'/api/users',
//     method:'POST',
//     header:{
//         'Content-Type':'application/json'
//     }
// }

// axios.post('https://reqres.in/api/users',data).then(res=>{
//     console.log(`Status Code:${res.status}`);
//     // console.log(`Body:${res.data}`);
//     console.log(`Body:${JSON.stringify(res.data)}`);
// }).catch(err=>{
// console.log(err);
// })


/*                                   Working with files                                   */
//  const fs=require('fs');
// //   Asynchronous version
//  fs.readFile("test.txt",'utf8',(err,data)=>{
//      if(err) throw err;
//      console.log(data);
//  });
// //   synchronous version
//  const data=fs.readFileSync('test.txt',{encoding:'utf-8',flag:'r'})
//  console.log(data);

//  fs.stat('test.txt',(err,stats)=>{
//      if(err){
//          console.log(err);
//          return
//  }
//  console.log(stats.isFile());
//  console.log(stats.isDirectory());
//  console.log(stats.isSymbolicLink());
//  console.log(stats.size);
//  })
/*                                   Write and updating files                                 */
//  Synchronous method
//  fs.writeFile()
//  fs.readFile()
//  fs.unlink()
//  or

// //  synchronous method 
//  fs.writeFileSync()
//  fs.readFileSync()
//  fs.unlinkSync()

// //  Creating json data from code

// const fs=require('fs');
// const content=[{
//     type:"Node Application"
// }];
// fs.writeFileSync('test.json',JSON.stringify(content));


// const fs=require('fs');
// const content="Hello Guys";
// // fs.writeFile('test.txt',content,{flag:'a+'},err=>{ // for appending data at end of the strint use 'a+'
// fs.writeFile('test.txt',content,{flag:'w+'},err=>{ // for updating 'w+' is used
// // fs.writeFile('test.txt',content,{flag:'a'},err=>{ // for  'a' is used for opening file for writing use 'a'
//     if(err){
//         console.log(err);
//         return 
//     }
//     console.log('Successfully Done');
// })

// //  removing the file
// const fs=require('fs');
// const webpack = require('webpack');
// const content="Hello Guys";

// fs.unlink('test.txt',err=>{
//     if(err){
// console.log(err);
// return
// }

// console.log('File removed');

// })

/*                                   Routing                                 */
// Performing task in a particular path is called Routing.

// //   concept of routing 
//  if (request.url=="example/path/here") {
//      response();
//  }

//         /*       this is lead to difficult in big project  for routing                    */
// const http=require('http');

// function index(request,response){
//     response.writeHead(200);
//     response.end('Node Routing')
// }

// function aboutus(request,response){
//     response.end('this is about page')
// }

// http.createServer(function(req,res){
//     if(req.url=='/'){
//         return index(req,res)
//     }
//     if(req.url=='/aboutus'){
//         return aboutus(req,res)
//     }
// }).listen(8000);

/*                               Easy  for project Routing                    */
// const http = require('http');

// const routes = {
//     '/': function index(request, response) {
//         response.writeHead(200);
//         response.end('Node Routing')
//     },
//     '/aboutus' :function aboutus(request, response) {
//         response.end('this is about page')
//     }
// }


// http.createServer(function (req, res) {
//     if(req.url in routes){
//       return routes[req.url](req,res);
//     }
//  }).listen(8000);     or  //  }).listen(process.env.PORT||8000)


/*                               Path Module                   */
// const path=require('path');

// // file=path.basename('Tutorial/test.json');
// // file=path.dirname('Tutorial/test.json');
// // file=path.isAbsolute('Tutorial/test.json');
// file=path.isAbsolute('D:/node js tutorial');
// let dir="node js tutorial";
// // file=path.join('D:/',dir,'test.json');
// // file=path.parse('node js tutorial/test.json')
// file=path.resolve('node js tutorial/test.json')
// console.log(file);

/*                               Event  Module                   */

// // event calling multiple times 
// const events=require('events');
// let ev= new events.EventEmitter();
// ev.on('my_event',function(data){
//     console.log("Event:",data);
// })
// ev.emit('my_event',"call emit() method to fire my_event")
// ev.emit('my_event',"call emit() method to fire my_event")



// // event calling Once 
// const events=require('events');
// let ev= new events.EventEmitter();

// ev.once('eventOnce',()=>{
//     console.log('EventOnes once fired');
// });
// ev.emit('eventOnce');
// ev.emit('eventOnce');




//  // passing of multiple events using once events

// const events=require('events');
// let ev= new events.EventEmitter();

// // ev.once('eventOnce',()=>{
// //     console.log('EventOnes once fired');
// // })
// // ev.once('eventOnce',(code,msg)=>{
// //     console.log(`Got ${code} and ${msg}`);
// // })
// var c1=(code,msg)=>console.log(`Got ${code} and ${msg}`)
// ev.once('eventOnce',c1);
// ev.off('eventOnce',c1);// this leads to unregister of events
// ev.emit('eventOnce',200,'Ok');

/*                               Streams                      */

// const http=require('http');
// const fs=require('fs');

// const server =http.createServer(function(req,res){
//     fs.readFile('test.json',(err,data)=>{
//         res.end(data)
//     })
// });

// server.listen(3000,()=>{
//     console.log('listening to the port 3000');
// })

/* if the data is big with this  operation will take more time to avoid this streams is used
  so to save time streams is used  */

// const http=require('http');
// const fs=require('fs');

// const server =http.createServer(function(req,res){
//     const stream=fs.createReadStream('test.json');
//     stream.pipe(res)
//     });

// server.listen(3000,()=>{
//     console.log('listening to the port 3000');
// });

/*                               Buffer                      */

// // buffer is like  an array of integer which each represent bite of data  
// const buf=Buffer.from('Hey');
// console.log(buf);// output of buf is  <Buffer 48 65 79> which represent string
// console.log(buf[0]);// output is 72 which represent first H character
// console.log(buf[1]);// output is 101 which represent second e character
// console.log(buf[2]);// output is 121 which represent third y character

// const buff=Buffer.alloc(4);
// buff.write('Hey');
// console.log(buff.toString());// output of buff is 'Hey' which represent string
// console.log(buff[0]);// output is 72 which represent first H character
// console.log(buff[1]);// output is 101 which represent second e character
// console.log(buff[2]);// output is 121 which represent third y character

// buf[1]=111 // o
// console.log(buf.toString());

/*                Exeception handling                                     */

// throw new Error('error message');

// try {
//   console.log("Start try block");
//   tyhfi;
//   console.log("end try block");
// } catch (err) {
//   console.log('Error message',err);
// }

// // example of promise
// doSomething1()
// .then(()=>{
//   return doSomething2().catch(err=>{
//     // handle error
//     throw err // break the chain!
//   })
// })
// .then(()=>{
//   return doSomething3().catch(err=>{
//     // handle error
//     throw err // break the chain!
//   })
// })
// .catch(err=>console.log(err))

//  example 
// async function someFunction(){
//   try {
//     await someOtherfunction()
//   } catch (err) {
//     console.error(err.message);
//   }
// }

