let posts=[{titel:'post one',body:"this is post one",createdAt:new Date().getTime()},
{titel:'post two',body:"this is post two",createdAt:new Date().getTime()}
];
let intervalId=0;
function getPost(){
    clearInterval(intervalId)
   intervalId= setInterval(()=>{
        let output='';
        posts.forEach((post) => {
        output+=`<li>${post.titel} and Created ${Math.floor((new Date().getTime()-post.createdAt)/1000)} second ago</li>`
        })
        document.body.innerHTML=output;
        
    },1000)
}
function createPost(post){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
     posts.push({...post ,createdAt:new Date().getTime()})
     let err = false;
     if(!err){
        resolve()
      }else{
        reject("Error:Somthing went wrong");
     }

     },2000);

    });
}
function deletePost(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        if(posts.length>0){
            let lastelement=posts.pop();
            resolve(lastelement)
        }else{
            reject('Array is empty now')
        }
       },1000)
    })
}
createPost({titel:'post three',body:"this is post three"});
let userLastActivity=new Promise((resolve,reject)=>{
   let newupdatetime= new Date().getTime();
   resolve(newupdatetime)
})

Promise.all([userLastActivity]).then((vlaues)=>{
    console.log(vlaues)
    deletePost();
    
})
createPost({titel:'post four',body:"this is post four"});
createPost({titel:'post five',body:"this is post five"});

console.log(posts)






// .then(()=>{
// getPost();
// deletePost().then(()=>{
//     getPost();
//     deletePost().then(()=>{
//      getPost();
//      deletePost().then(()=>{
//         getPost();
//         deletePost().then(()=>{
            
//         }).catch((err)=>{
//                console.log('inside catch block',err)
//         })
//      })
//     })
// })
// })