var ToDo = (function () {
	
	var addATask = document.getElementById("new-task");
	
	var taskButton = document.getElementsByClassName("add")[0];
	
	var incompleteTasks = document.getElementById("incomplete-tasks");
	
	var completedTasks = document.getElementById("completed-tasks");
	
	var editButtons = document.getElementsByClassName("edit");
	
	var deleteButtons = document.getElementsByClassName("delete");
	
	var checkBoxes = document.getElementsByTagName("input");
	
	var app = {};
	
	
	app.addEditListeners = function() {
		
		for (var i = 0; i < editButtons.length; i++) {
			
			editButtons[i].addEventListener("click", app.editTask, false);
			
		}
		
	}
	
	app.addDeleteListeners = function() {
		
		for (var i = 0; i < deleteButtons.length; i++) {
			
			deleteButtons[i].addEventListener("click", app.deleteTask, false);
		}
		
	}
	
	app.addCheckListeners = function() {
		
		for (var i = 0; i < checkBoxes.length; i++) {
			
			if (checkBoxes[i].type == 'checkbox') {
				
				checkBoxes[i].addEventListener('click', app.completeTask, false);
				
			}
			
		}
		
	}
	
	app.addTask = function() {
		
		var htmlString = '<li><input type="checkbox"><label>' + addATask.value 
					   + '</label><input type="text"><button class="edit">Edit</button>'
					   + '<button class="delete">Delete</button></li>'
		
		if (addATask.value === "") {
			
			alert("You must enter a task");
			
			return 0;
			
		}

		incompleteTasks.innerHTML += htmlString;
		
		app.addEvents();
		
		addATask.value = "";
		
	};
	
	app.editTask = function() {
		
		var par = this.parentElement;
		
		if (par.className !== 'editMode') {
			
			par.className = "editMode";
			
		} else {
			
			var target = par.querySelector("input[type='text']").value;
			
			var label = par.querySelector("label");
			
			label.innerHTML = target;
			
			par.className = "";
			
		}
		
	}
	
	app.deleteTask = function() {
		
		var par = this.parentElement;
		
		par.id = "delete";
		
		par.parentElement.removeChild(document.getElementById("delete"));
		
		
	}
	
	app.completeTask = function () {
		
		if (this.parentElement.parentElement.id === "completed-tasks") {
			
			return 0;
			
		} else {
			
			console.log("hi");
			
			var htmlString = '<li><input type="checkbox"><label>' + this.parentElement.querySelector("label").innerHTML 
						   + '</label><input type="text"><button class="edit">Edit</button>'
					       + '<button class="delete">Delete</button></li>';
			
			completedTasks.innerHTML += htmlString;
			
			this.parentElement.id = "delete";
			
			this.parentElement.parentElement.removeChild(document.getElementById("delete"));
			
			app.addEvents();
			
		}
		
	}
		
	app.addEvents = function() {
		
		taskButton.addEventListener('click', app.addTask, false);
		
		app.addEditListeners();
		
		app.addDeleteListeners();
		
		app.addCheckListeners();
		
	};
	
	
	return app;
		
	
}());

ToDo.addEvents();

