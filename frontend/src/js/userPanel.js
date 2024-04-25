const userList=document.querySelector(".user-panel__user-list")


async function getAllUser(){
   const {data}=await axios.get("http://localhost:3000/api/users") 
  await  console.log(data)
 await data.forEach(user=>{
    userList.insertAdjacentHTML("beforeend",`   
<li class="user-panel__user-information">
    <img
      class="user-panel__user-image"
      src=${user.profile}
      alt=""
    />
    <div class="user-panel__username">
      <span class="user-panel__first-name">${user.firstName}</span>
      <span class="user-panel__last-name">${user.lastName}</span>
    </div>
    <div class="user-panel__btns">
      <button class="user-panel__edit-btn btn--primary">
        Edit
      </button>
      <button onclick="showRemoveModal('${user._id}')" class="user-panel__remove-btn btn--secondary">
        Remove
      </button>
    </div>
  </li>`)
  })
}
function showRemoveModal(id){
    
    console.log(id)
}

document.addEventListener("DOMContentLoaded",getAllUser)

