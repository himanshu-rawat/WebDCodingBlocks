//Remove all the task by clicking on the button "Clear All"
$("#clear").on("click",function(){
	$("#container li").remove();
});

//Implementing Edit Button (Not Completed Yet)
$("#container ul").on("click","#edit",function(event){
	var mytext = ( $(this).parent().children().innerText);
	console.log(mytext);
});
//Click on Delete Buttton to delete Todo
$("#container ul").on("click", "#delete", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// Adding Task On clicking the Buttton "Add Task"
$(" #addTask").on("click", function(){
   var task = $("#kaam").val();
   var date=  $("#tariq").val();

   if(task=="" && date == ""){
   	 alert("Task Cannot Empty !");
   }
   else if(task!="" && date==""){
   	$("#container ul").append("<li> "+task+" <button id='delete'>Delete</button><button id='edit'>Edit</button> </li>")
   	var task = $("#kaam").val("");
   	var date=  $("#tariq").val("");
   }
   	else{
   		$("#container ul").append("<li> "+task+ "On: "+date+ " <button id='delete'>Delete</button><button id='edit'>Edit</button> </li>")
		var task = $("#kaam").val("");
   		var date=  $("#tariq").val("");
   	}
  }); 

//Click on "+" To Toggle The Text and Date Input
$("#toggle-form").click(function(){

	$("input[type=text]").fadeToggle();
	$("#tariq").fadeToggle();
});
