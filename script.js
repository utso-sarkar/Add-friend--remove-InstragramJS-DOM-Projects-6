var  isAdd=document.querySelector("h5")
var addFriend =document.querySelector("#add")
var RemoveFriend =document.querySelector("#remove")




addFriend.addEventListener("click",function(){
    isAdd.innerHTML="Friends"
    isAdd.style.color="green"
   
})
// remove part 
RemoveFriend.addEventListener("click",function(){
    isAdd.innerHTML="Stranger"
    isAdd.style.color=red;
})

