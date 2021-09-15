const deleteBtn = document.querySelectorAll(".del")

for(let button of deleteBtn){
    button.onclick = async()=>{
        let confirmation = confirm('Are you sure?')
        let groupId = button.dataset.id
        if(confirmation){
            let response = await fetch('/admin/groups',{
                method:'DELETE',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({groupId})
            })
            if(response.status ==204){
                button.parentNode.parentNode.remove()
            }else{
                alert( (await response.json()).message)
            }
        }

    }
}