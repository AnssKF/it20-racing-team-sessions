
/**
 * 
 * JS Types
 * 
 */




/**
 * 
 * Objects
 * 
 */


// var foo = {
//     "key": "valye",
//     bar: 5,
//     baz: {
//         x: 9,
//         y: [8,9,3, { xx: 8 }]
//     },

// }


// console.log(typeof foo)

// console.log( foo.baz.y[3].xx )


// foo.anss = "anss"
// console.log(foo)








/**
 * 
 * Arrays
 * 
 */
// var foo = [ 1,2,3, "hello", {
//     baz: 3,
//     bar: 5
// }, 9, 7 ]

// console.log( typeof foo )

// for( var i=0; i< foo.length; i++ ){
//     console.log(foo[i])
// }

// foo.forEach( xx => console.log(xx) )






/**
 * 
 * Functions
 * 
 */

// function foo(a, b, c){
//     console.log(a,b,c)
// }

// foo(1,2,"Hello")

// console.log( typeof foo )


/**
 * Every thing in js is an object
 */

// foo.anss = "Hello anss"

// console.log(foo.anss)

// console.log(foo)


/**
 * Function aliasing
 */

// var bar = foo 

// bar(1, 2 , 'hello')


// baz = {
//     a: 5,
//     b: 6,

//     z: foo
// }

// baz.z(1,2,'hello')



/**
 * String helper functions
 * 
 */
// var foo = "hello"

// console.log( foo.toUpperCase() )





/**
 * 
 * Type conversion
 * 
 */

// var a = "55";

// var b = +a;


// var b = +"55"
// // 0 + "55"  -> 0 + 55
// console.log(b)


// var a = "222" - -"111";
// // "222" -  -111
// // 222 - -111
// console.log(a)
// console.log(typeof a)


// console.log( [1, 2, 3] + [4, 5, 6] )


/**
 * 
 *  ||  and  &&
 * 
 */

// var x = 5;
// var y = 7;

// z = y || x
// if(y) {z = y} else {z=x}

// console.log(z)


// var x = 0;
// var y = 9;

// z = y && x

// console.log(z)


/**
 * Every thing in js is an object
 */

// console.log( typeof null )
// console.log( Number(null) )




/**
 * 
 * Falsy table
 * 
 */
//  * ""
//  * 0, -0, NaN
//  * null, undefined
//  * false

// if( [] ) {
//     console.log('Yes')
// }else{
//     console.log('No')
// }



/**
 * 
 * Equality
 * 
 */

/**
 * *   ==      -> check for value equality with coercion alloed
 * *   ===     -> check for value and type equality with coercion not allowed
 */


// if( 5 == '5' ){
//     console.log('yes')
// }else {
//     console.log('no')   
// }

// var a = [1,2,3]
// var b = [1,2,3]
// var c = "1,2,3"

// console.log(a)
// console.log(b)

// // "1,2,3" == "1,2,3" -> true
// // 0xasbsad == 0xilihli -> false

// console.log("a==c", a==c)
// console.log("b==c", b==c)
// console.log("a==b", a==b)




/**
 * 
 * Scope and Hoisting
 * 
 */


// global scope
// function foo (x) {
//     // foo scope

//     function bar(){
//         // bar scope
//         var a_bar;


//         a_bar = 3;
//         // a is known
//         console.log(a_bar)
//     }

//     var a_foo

//     a_foo = 2;

//     console.log(x)

    

//     console.log(a_foo)
//     bar();

// }

// var a_global;

// a_global = '1'


// foo(5)




/**
 * 
 * Use strict
 * 
 */

// "use strict";

// var a_global = '1'

// function foo () {
//     // foo scope
    
//     var a_foo = 2;
    
//     function bar(){
//         // bar scope
        
//         a_bar = 3;
//         // a is known
//         console.log(a_bar)
//     }

//     zzzasa = 9
//     console.log(a_foo)
//     bar();

    
//     console.log('a_bar +', a_bar)

// }

// foo()
// console.log('a_bar +', a_bar)


/**
 * 
 * let keyword
 * 
 */

// function foo(){
//     var a = 1;

//     if(a>=1){
//         var b = 2;

//         while(b<5){
//             let c = b*2;
//             b++;

//             console.log('a, c', a, c);
//         }

//         console.log('c:', c)
//     }

//     console.log('b:', b)
// }

// foo();

// function f(){
//     let a = 5
//     console.log('inside function',a)
// }

// f()

// console.log(a)




/**
 * Functions
 * 
 */

// function foo(){

//     console.log('inside foo')
// }

// const bar = function (){
//     console.log('inside bar')
// }

// const baz = () => {
//     console.log('inside baz')
// }


// setTimeout( () => {
//     console.log('aaa')
// } , 1000);


/**
 * Scope Problem
 */

// var i
// for( i =0; i<5; i++ ){

//     setTimeout(
//     ()=>{
//         console.log(i)
//     }
//     , 1000)

// }


/**
 * Solve by copy i to j
 */

// function pp (j){
//     setTimeout(()=>{
//         console.log(j)
//     }, 2000)
// }

// for(var i = 0; i<5; i++){
//     pp(i)
// }


/**
 * Solve with let
 */

// for( let i =0; i<5; i++ ){

//     setTimeout(
//     ()=>{
//         console.log(i)
//     }
//     , 1000)

// }































































