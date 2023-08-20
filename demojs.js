// dansing();
// coocking();

// function coocking(){
//     console.log("hii i am coocking function");
// }
// function dansing(){
//     console.log("hii i am dansing function");
// }



// function sayHello(){
//     console.log("hello");
// }
// function sayHii(){
//     console.log("Hii..");
// }

// function add(n1,n2,callback){
//     console.log(n1+n2);

//      callback();
// }

// let a=10;
// let b=20;
// add(a,b,sayHello);
// add(20,30,sayHii);
// add(90,40,function(){
//     console.log("bye...");
// })


// loop in js..........
// for in.. loop 
//as a  object
// let animal = {
//     name:"sam",
//     age:20,
// }
// for(let key in animal)
// {
//     console.log(key,animal[key]);
// }

// //array
// let names = ["sam","raj","asha"]
// for(let index in names){
//     console.log(index,names[index]);
// }
// //for of.. loop
// for(let name of names){
//     console.log(name);
// }





//     function company(){
//         user();
//     }

//     function user(){
//         setTimeout(()=>{
//             console.log("user");
//             order(production);
//         })
//     }
//     function order(call_pro){
//         setTimeout(() => {
//             console.log("order");
//             call_pro();
//         },2000)
//     }


//     let production =() => {
//              setTimeout(() => {
//                  console.log("production");
//                  setTimeout(() => {
//                      console.log("id");
//                      setTimeout(() => {
//                          console.log("Table-1");
//                          setTimeout(() => {
//                              console.log("Table-2");
//                              setTimeout(() => {
//                                 console.log("Exit");
//                              },5000)
//                          }, 1000);
//                      },2000)
//                  },3000)
//              },2000)
//          }
        
// company(user)





// function entershop(callback){
//     console.log("enter shop");
//     setTimeout(() => {
//         console.log("welcome to e-commerce shop");
//         callback();
//     },2000)
// }
// function placeorder(callback){
//     console.log("please take a order");
//     setTimeout(() => {
//         console.log("order place successfully!");
//         callback();
//     },3000)
// }
// function production(callback){
//     console.log("production started!");
//        setTimeout(() => {
//         takenId(() => {
//             ac(() => {
//                 listItem(() => {
//                     console.log('production work done')
//                     callback();
//                 })
//             })
//         })
//        }, 3000);
        
// }
// function takenId(callback){
//     console.log("take id");
//     setTimeout(() => {
//         console.log("catch id successfully!");
//         callback();
//     }, 4000);
// }
// function ac(callback){
//     console.log("get ac number");
//     setTimeout(() => {
//         console.log("successfully get your account number");
//         callback();
//     }, 3000);
// }
// function listItem(callback){
//     console.log("all list item");
//     setTimeout(() => {
//         console.log("present all list item ");
//         callback();
//     }, 3000);
// }

// function realworld(){
//     entershop(() => {
//         placeorder(() => {
//             production(() => {
//                 console.log("Thank you for shopping with us");
//             })
//         })
//     })  
// }
//  realworld();

//1
// function enterCakeShop(callback){
//     console.log("customer entered shop");
//     setTimeout(() => {
//         console.log("customer inside the cake shop");
//         callback();
//     }, 2000);
// }
// function orderPlace(callback){
//     console.log("place order for cake");
//     setTimeout(() => {
//         console.log("your order get successfully place");
//         callback();
//     }, 2000);
// }
// function bakeTheCake(callback){
//     console.log("start the cake preparetion");
//     setTimeout(() => {
//     iceing(() => {
//         decorate(() => {
//             console.log("cake is ready for given the customer");
//             callback();
//         })
//     })
//     }, 2000);
// }
// function iceing(callback){
//     console.log("store the cake in refregirator ");
//     setTimeout(() => {
//         console.log("ready to decoration");
//         callback();
//     }, 2000);
// }
// function decorate(callback){
//     console.log("decoration starting..");
//     setTimeout(() => {
//         console.log("decoration complete!");
//         callback();
//     }, 2000);
// }

// function Customer(){
//     enterCakeShop(() => {
//         orderPlace(() => {
//             bakeTheCake(() => {
//                 console.log("Thank you for purchasing the cake!");
//             })
//         })
//     })
// }

// Customer();