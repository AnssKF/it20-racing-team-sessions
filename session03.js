
// console.log('hello')

/**
 * Currying
 */


// const add = (a, b, c) => {

//     if(b && c) return a+b+c;

//     else return (bb, cc) => {

//         if(b) { cc=bb; bb=b; }

//         if (cc) return a + bb + cc;

//         else return (cc) => {
//             return a+bb+cc;
//         }
//     }

// }



// console.log(
//     add(1,2,3),
//     add(1,2)(3),
//     add(1)(2,3),
//     add(1)(2)(3)
// )




















/**
 * 
 * this
 */

// var a = 'global'

// function foo(){
//     console.log(this.a)
// }

// function doFoo(){
//     this.a  = 99

//     this.bar = foo;

//     this.bar()

//     console.log('dofoo', this.a)
// }

// var obj = {
//     a: 55
// }

// doFoo.call(doFoo)






















/**
 * 
 * new Binding
 * 
 */

// function foo(a){
//     this.a = a

//     this.baz = () => {
//         console.log('inside baz')
//     }

//     console.log('inside foo')
// }

// /**
//  * brand new empty object gets created
//  * bind
//  * return
//  */

// var bar = new foo(5);
// console.log(bar.baz())
























/**
 * 
 * 
 * this with arrow function
 * 
 * arrow-fun adopt the "this" binding from the enclosing scope
 */


  "use strict";

// function foo(){

//     console.log("inside foo: this.a:", this.a)

//     return ()=>{
//         console.log( "inside bar: this.a:", this.a )
//     }
// }
// var a = 'global'
// var obj1 = {
//     a:22
// }
// var obj2 = {
//     a:33
// }
// // var bar  = foo()
// // bar()

// var bar  = foo()
// // bar()
// bar.call(obj2)
























/**
 * 
 * Performance - Main thread + eventloop
 * 
 * async operations
 * 
 */


//  for( i=0; i<5 ;i++){
//      setTimeout(() => {
//         console.log(i)
//      }, 3000)
//  }


// // code

// d = new Date();

// console.log('before')

// setTimeout( ()=>{
//     console.log('inside STO')
// }, 3000 )

// // code 

// console.log('after')




















 /**
  * 
  * Callbacks 
  * 
  */


// function foo(cb){
//     cb()
// }

// function bar(){
//     console.log('inside bar')
// }

// foo(bar)












// function foo(){
//     console.log('inside foo')
// }

// function baz() {
//     console.log('inside baz')
// }

// function dalay(fun){
//     console.log('inside dalay');

//     setTimeout(fun);
// }

// dalay(foo) // foo


// dalay(baz) // baz











/**
 * 
 * what if x and y not exist yet
 * 
 */


// let x = null
// let y = null

// setTimeout(()=>{
//     x = 5
// }, 2000)

// setTimeout(()=>{
//     y = 6
// }, 1000)


// function add(a,b){
//     return a+b
// }


// setTimeout( () => console.log(add(x,y)), 2000 )













/**
 * 
 * Async add function
 * 
 */


// function add( getA, getB, result ) {
    
//     x = null;
//     y = null

//     getA( (xValue) => {
//         x = xValue;

//         if(y){
//             result( x + y )
//         }
//     } )
    
//     getB( (yVal) => {
//         y = yVal

//         if(x){
//             result( x + y )
//         }
//     } )

// }

// function fetchX(callback){ // async fetch function
//     setTimeout( () => {
//         x = 5;
//         callback(x)
//     }, 2000 )
// }

// function fetchY(cb){
//     setTimeout( () => {
//         y = 6;
//         cb(y)
//     }, 2000 )
// }

// function res(value){ // result handler function
//     console.log(value)
// }

// add(fetchX, fetchY, res)










/**
 * callback-hell
 */


// listen('click', () =>{

//     setTimeout( ()=>{

//         ajax( 'url', (res) => {
//             if( res){
//                 ajax('url2', (res) => {
//                     // .....and so on....
//                 })
//             }
//         } )

//     }, 2000 )

// }  )





















/**
 * 
 * 
 * 
 * Promise
 * Promise is data structure that holds a value that is promised to be ‘resolved’ in the future.
 * When it resolves you then can use the value, or catch if something went wrong.
 * 
 */

//  let xPromise = new Promise( (res, rej) => {
//      setTimeout( ()=>{
//         let x = 5;

//         if( x ){
//             res(x)
//         }else{
//             rej('Error in fetching x')
//         }

//      }, 3000 )
//  } )

//  let yPromise = new Promise( (res, rej) => {
//      setTimeout( ()=>{
//         let y = 6;

//         if( y ){
//             res(y)
//         }else{
//             rej('Error in fetching y')
//         }

//      }, 2000 )
//  } )



// xPromise.then( (value) => {
//     console.log(value)
// } )


// ----------------------


/**
 * 
 * Promise based add function
 * 
 */

// function add( xPromise, yPromise ){

//     let result = new Promise( (res, rej) => {
//         let x = null;
//         let y = null;

//         xPromise.then( (value) => {
//             x = value;

//             if(x && y) {
//                 res(x+y) // resolve promise with x+y value
//             }
//         } )

//         yPromise.then( (value) => {
//             y = value
//             if(x && y) {
//                 res(x+y) // resolve promise with x+y value
//             }
//         } )

//     } )

//     return result;
// }



// let res = add( xPromise, yPromise )

// res
// .then( (value) => {
//     console.log(value)
// } )
// .catch( (err) => console.log(err) ) // catch error if promise rejected



/**
 * another way
 */

// function add( xPromise, yPromise ){

        /**
         * Promise.all execute array of promises
         */

//     let p = Promise.all([xPromise, yPromise])
//         .then( value => { // value here is an array of resolved values
//             return value[0] + value[1]
//         } )

//     return p
// }

// add(xPromise, yPromise)
//     .then( v => console.log(v) )
//     .catch( e => console.log(e) )




/**
 * Promise race helper function
 * exacute array of promises and return fastest resolved one
 */

// function foo( xPromise, yPromise ){

//     return Promise.race( [xPromise, yPromise] )

// }

// foo(xPromise, yPromise).then( v => console.log(v) )





/**
 * 
 * Another way using async-await
 * 
 * Async await should be inside functions
 * 
 * we define function to be async and await promises inside it
 * 
 */

// function getX(){ // fetch function return an promise
//     return new Promise( (res, rej) => {
//         setTimeout( ()=>{
//            let x = 5;
   
//            if( x ){
//                res(x)
//            }else{
//                rej('Error in fetching x')
//            }
   
//         }, 3000 )
//     } )
// }

// function getY(){
//     return new Promise( (res, rej) => {
//         setTimeout( ()=>{
//            let y = 6;
   
//            if( y ){
//                res(y)
//            }else{
//                rej('Error in fetching y')
//            }
   
//         }, 3000 )
//     } )
// }

// async function add() {
    /**
     * add now is an Async function so we can await getX and getY
     */
//     let x = await getX()
//     let y = await getY()

//     return x + y;
// }


/**
 * we can't await add() in global
 * 
 * we can await add() if it inside async function
 */
// add().then( v => console.log(v) ) 









