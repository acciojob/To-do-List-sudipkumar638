var textbox=document.getElementById("newTodoInput");

var but=document.getElementById("addTodoBtn");
var list=document.getElementById("todoList");
but.addEventListener("click",()=>{
	if(document.getElementById("newTodoInput").value.trim()!="")
	{
		list.innerHTML=`${list.innerHTML}<li>${document.getElementById("newTodoInput").value}</li>`
	document.getElementById("newTodoInput").value=""
	}
   
	
})
