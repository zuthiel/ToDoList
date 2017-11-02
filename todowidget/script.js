

	function createCB() {
		var frag = document.createDocumentFragment(),
  	  		iCheckBox = document.createElement("input"),
  	  		tLabel = document.createElement("label"),
  	  		wElem = document.getElementById('todo'),
  	  		tName = document.getElementById("tbox").value;

  	  	iCheckBox.type = 'checkbox';
  	  	iCheckBox.id = tName;
  	  	iCheckBox.name = tName;
  	  	iCheckBox.value = tName;

  	  	iCheckBox.class = "checkbox";

  	  
  	  	frag.appendChild(iCheckBox);
  	  	tLabel.appendChild(document.createTextNode(tName));
  	  	frag.appendChild(tLabel);
  	  	
  	  	/*iCheckBox.onclick = function (){	
  	  		style.text-decoration = 'line-through';
  	  	}*/
  	  	frag.appendChild(document.createElement("br"));
  	  	wElem.appendChild(frag);
  }

  //createCB("print");
