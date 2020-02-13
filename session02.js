
/**
 * Functions
 */

// function foo(cb){
//     return 0;
// }

// let bar = function () {
//     return 1;
// }

// ES6
// let baz = (a, b) => {

// }


// var baz = v =>  console.log(v) 

// baz(9)


/**
 * IIFE function
 */


//  (() => {
//     //
//     //
//     //
//     console.log('inside IIFE')
//  })()


/**
 * Closure
 * 
 * Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.
 * 
 */


// function foo (x) {
//     var d = 22

//     function bar () {
//         console.log(x)
        
//         return d
//     }

//     return bar;
// }

// let baz = foo(9)
// console.log( baz() )


// function add(a, b){
    
//     if(b) return a+b;
//     else{
//         return (c) => {
//             return a+c;
//         }
//     }    
// }

// console.log(add(8, 2))  // 10
// console.log( add(8)(2) ) ; // 10







// for(var i = 0; i<5; i++){

//     ((j) => {
//         setTimeout(()=>{
//             console.log(j)
//         }, j*1000)
//     }) (i)

// }


// var i ;
// for(i = 0; i<5; i++){
//         setTimeout(()=>{
//             console.log(i)
//         }, i*1000)
// }



/**
 * arguments object
 */

// function bar(a){
//     console.log('a', a)
//     console.log(arguments)
//     // for( let i=0; i< arguments.length; i++ ){
//     //     console.log(arguments[i])
//     // }
// }

// bar(1,2,3,4,5,6);


/**
 * Spread operator
 */

// function foo( ...args ){
//     console.log(args)
//     console.log(typeof args)
// }

// foo(5,6,7,8,9)



// function baz(a,b,c){
//     console.log('a', a)
//     console.log('b', b)
//     console.log('c', c)
// }

// let bar = ['x', 'y', 'z']
// baz(...bar); // 'x', 'y', 'z'

// console.log(bar)
// console.log(...bar)





/**
 * object | array Destructuring
 */


// let obj = {
//     name: 'Anss',
//     num: 303030
// }


// let name = obj.name;
// let phone = obj.num

// let { num: phone, name: username } = obj

// console.log(phone, username)

// let a = arr[0]
// let b = arr[1]
// let c = arr[2]

// let arr = [55,66,77, 99, 102, 600]
// let [ a, b, ...h ] = arr



// // let [ a, b, c ] = arr

// console.log( a,b, h)


/**
 * Array concatination with spread op
 */

// let arr1 =  [1,2,3,4]

// let arr2 = [11,12,13,14]

// let arr3 = [...arr1, ...arr2]
// console.log(arr3)

// console.log( arr1.concat(arr2) )



/**
 * Object concatination with spread op
 */

// let obj1 = {
//     a: 5,
//     b: 9
// }

// let obj2 = {
//     a: 30,
//     d: 60
// }

// let obj3 = { ...obj1, ...obj2 }
// console.log(obj3)













/**
 * This keyword
 */



// function bar(a, b){

//     let obj = {
//         a: a,
//         b: b,
//         foo: () => { return;}
//     }   

//     return obj

// }

// c1 = bar(9,10)
// c2 = bar(20,30)



















// function identify() { // this -> current context .. which context ?
//     return this.name.toUpperCase();
// }
// function speak() {
//     console.log(
//         ` Hello, Im ${identify.call(this)} `
//     )

// }

// let me = {
//     name: 'Anss'
// }
// let you = {
//     name: 'Ahmed'
// }
// console.log(
//     identify.call(me)
// )
// console.log(
//     identify.call(you)
// )
// speak.call(me)
// speak.call(you)
















/**
 * Count function call
 */

// function foo(num){
//     console.log('foo' + num)

//     this.count++;
// }

// foo.count = 0;

// for( let i=0; i<5; i++){
//     foo(i)
// }

// console.log(foo.count)






/**
 * String concatination | Formater
 */

// let a = 'Anss';
// let b = "Ahmed"
// console.log( `Hello Im ${ a } - ${ ahmed }` )
// console.log( 'Hello Im' + a + ' - ' + b )






/**
 * Fix function count
 */


// function foo(num){
//     console.log(this)
//     console.log('foo' + num)


//     foo.count++;
// }

// foo.count = 0;

// for( let i=0; i<5; i++){
//     foo(i)
// }

// console.log(foo.count)





/**
 * Solve with this keyword by binding foo object
 */

// function foo(num){
//     console.log('foo' + num)

//     this.count++;
// }

// foo.count = 0;

// for( let i=0; i<5; i++){
//     foo.call(foo)
// }

// console.log(foo.count)











/**
 * Call-stack | call-site
 */

// function baz(){
//     // call-stack -> baz
//     // call-site -> global
//     console.log('baz')
//     bar();
// }

// function bar(){
//     // call-stack -> baz -> bar
//     // call-site -> baz
//     console.log('bar')
//     foo();
// }

// function foo(){
//     // call-stack -> baz -> bar -> foo
//     // call-site -> bar
//     console.log('foo')
// }

// baz();





/**
 * Use strict with this keyword
 */


// "use strict";

// function foo() {
//     console.log(this.a)
// }
// var a = 2

// foo();


// function bar() {
//     console.log(this.a)
// }

// var a = 2

// bar()

// let obj = {
//     a: 9,
//     foo: bar
// }


// obj.foo()







/**
 * Chaining
 */


// function foo() {
//     console.log(this.a)
// }

// let objy = {
//     a: 42,
//     foo: foo
// }

// let objx = {
//     a: 52,
//     b: objy
// }

// objx.b.foo()




/**
 * context lost 
 */


// function foo(){ 
//     console.log(this.a)
// }

// var a = 'global a'

// var obj = {
//     a: 2,
//     b: foo
// }

// obj.b()

// var bar = obj.b

// bar()








/**
 *  context lost why ?
 *      TODO: search
 */

// var a = 'global a'
// function foo() { 
//     // call-stack -> ?
//     // call-site -> ?
//     console.log(this.a)
// }

// function doFoo( fun ) {
//     // call-stack -> doFoo
//     // call-site -> global
//     fun()
// }
// var obj = {
//     a:  2,
//     b: foo
// }

// // doFoo( foo )
// doFoo( obj.b )



// function foo() {
//     console.log( this.a )
// }


// let obj = {
//     a: 2
// }

// foo.call(obj)










/**
 * What if we bind primitive values like number
 */



// function foo() {
//     console.log( this )
// }

// let xx = 5

// foo.call(xx)
// foo()





