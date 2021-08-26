let addbtn = document.getElementById('add')
let inputData = document.getElementById('names')
let result = document.getElementById('result')
let model = document.getElementById('model')
let showbtn = document.getElementById('show')
let closebtn = document.getElementById('close')

closebtn.addEventListener('click', function(){
model.style.display = 'none'
})

showbtn.addEventListener('click', function(){
    model.style.display = 'block'
})

let printDiv = ()=>{
    const newName = inputData.value;
    if(newName.trim()=='')
    {
        alert('No Data Entered!')
    }
    else{
        result.innerHTML += `<tr> <td> ${newName} 
        <button class = "delete btn btn-danger">Delete</button>
        </td>
        </tr>`
        model.style.display = 'none'
        inputData.value = ''
    }
    
    

}
addbtn.addEventListener('click', printDiv)

document.addEventListener('click', function(e){
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }
})