const doc = window.document;

var wTodo = function () {};

wTodo.prototype.version = function () {
	return "To-Do List #1 ";
};

//Create the task element
wTodo.prototype.createCheckBox = function() {

	var frag = doc.createDocumentFragment(),
		container = doc.createElement("li"),
  		iCheckBox = doc.createElement("input"),
  		tLabel = doc.createElement("label"),
  		wElem = doc.getElementById('todo'),
  		tName = doc.getElementById("tbox"),
  		iDelete = doc.createElement("div");

  	//Checkbox
  	iCheckBox.type = 'checkbox';
  	iCheckBox.id = tName.value;
  	iCheckBox.name = tName.value;
  	iCheckBox.value = tName.value;
  	//iCheckBox.className = "checkbox";

  	container.appendChild(iCheckBox);
  	container.className = "list-group-item list-group-item-inf";
  	
  	//Label Checkbox
  	tLabel.appendChild(doc.createTextNode("  "+tName.value+"  "));
  	tLabel.id = "label"+tName.value;
  	tLabel.style.paddingLeft = "5px";
  	tLabel.style.fontFamily = "Georgia";
  	container.appendChild(tLabel);
  	//Delete icon
  	iDelete.className="glyphicon glyphicon-remove";
  	iDelete.style.color = "red";
  	iDelete.style.marginLeft = "5px";
	container.appendChild(iDelete);
  	// class="list-group-item active"

  	//Functionality when the elements are clicked.
  	iDelete.onclick = function(){
  		this.parentNode.parentNode.removeChild(this.parentNode);
  	}
  	iCheckBox.onclick = function (){
  		var lbl = document.getElementById("label"+this.id)
  	 	if(this.checked){	
	  		lbl.style.textDecoration = 'line-through';
	  		lbl.style.fontStyle = 'italic';
	  		lbl.parentNode.className = "list-group-item list-group-item-danger";

	  	}else {
	  		lbl.style.textDecoration = 'none';
	  		lbl.style.fontStyle = 'normal';
	  		lbl.style.color = 'black';
	  		lbl.parentNode.className = "list-group-item list-group-item-inf";
	  	}
  	}

  	//Add elements to the UI
  	frag.appendChild(container);
  	wElem.appendChild(frag);
  	//Clear text box values every time Add button its pressed.
  	wTodo.prototype.clearText(tName);
  };

  //Clear the text in the task box.
  wTodo.prototype.clearText = function(elem) {
  	elem.value = "";
  }

  //SAve all the to do list tasks
  wTodo.prototype.saveList = function() {
  	//Clear LocalStorage
  	localStorage.clear();
	//Store list data
	var list = document.getElementById("todo").getElementsByTagName("li");
	//Loop over the to do list to save the tasks
	for (var i = 0; i < list.length; i++) {    	
    	var task = [list[i].getElementsByTagName("label")[0].innerText, list[i].getElementsByTagName("input")[0].checked];

		//Store locally the tasks of the list
    	localStorage.setItem("itemList"+i, JSON.stringify(task));
	}
	//Print the saved list.
	wTodo.prototype.printList();	
  }

  //Get the list that was saved.
  wTodo.prototype.printList = function(){

  	var list = [];
  	for(var i=0, len=localStorage.length; i<len; i++) {
    	//Get the elements
    	var retrievedObject = localStorage.getItem('itemList'+i);
		
		list.push(JSON.parse(retrievedObject));
    	//console.log(key + " => " + value);
	}
  	//Display
	wTodo.prototype.displayList(list);
  }

  //Print the list in the UI
  wTodo.prototype.displayList = function(list) {

  	//Erase the list, if ti was already displayed.
	 var wElem = doc.getElementById("savelist");
	 while (wElem.firstChild) {
    	wElem.removeChild(wElem.firstChild);
	}

	wElem.appendChild(doc.createTextNode("Saved Tasks: "));
  	for(var i = 0; i<list.length; i++){
  		
  		var frag = doc.createDocumentFragment(),
	  		container = doc.createElement("li"),
	  		tLabel = doc.createElement("p"),
	  		value = list[i][0],
	  		status = list[i][1];
	  		
	  		container.className = "list-group-item list-group-item-inf";
  	
	  		tLabel.appendChild(doc.createTextNode(value));
	  		container.appendChild(tLabel);
	  		if(status == true){
	  			tLabel.style.textDecoration = 'line-through';
		  		tLabel.style.fontStyle = 'italic';
		  		tLabel.className = 'bg-danger';
	  		} else {
	  			tLabel.className = 'text-primary';
	  		}
	  		frag.appendChild(container);
	  		wElem.appendChild(frag);
  	}
  }