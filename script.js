//	variable to check for the username field
	var nameFlag = false;
//	variable to check for the password field
	var passFlag = false;

document.addEventListener('DOMContentLoaded', function(){
	var name = document.getElementById("fullname");
	var pass = document.getElementById("pwd");
	var error1 = document.getElementById("err1");
	var error2 = document.getElementById("err2");
	var error3 = document.getElementById("err3");

	name.addEventListener('focus', function(){
		error1.innerHTML="This field can not be null"
		error2.innerHTML="Length should be greater than 5 chars";
		error3.innerHTML="A space is required between first and the last name";
	});

	// variables for the seperate name validations
	var validationFlag1 = false;
	var validationFlag2 = false;
	var validationFlag3 = false;

/************************ Validate the username field ******************************/
	name.addEventListener('keyup', function(){
		changeColor();
		if(name.value.length>0){
			error1.innerHTML="";
			validationFlag1 = true;
		}
		else{
			error1.innerHTML="This field can not be null";
		}

		if(name.value.length>5){
			error2.innerHTML="";
			validationFlag2 = true;
		}
		else{
			error2.innerHTML="Length should be greater than 5 chars";
		}
		var flag=false;
		for(var i=0; i<name.value.length; i++){
			if(name.value.charAt(i)==' '){
				flag=true;
				break;
			}
		}
		if(flag==true){
			error3.innerHTML="";
			validationFlag3 = true;
		}
		else{
			error3.innerHTML="A space is required between first and the last name";
		}

		if(validationFlag1 && validationFlag2 && validationFlag3){
			nameFlag = true;
		}
	});

	//variables for the seperate password validations
	var passFlagVal1 = false;
	var passFlagVal2 = false;
	var passFlagVal3 = false;

/******************* Validate the password field **************************/
	pass.addEventListener('focus', function(){
		error1.innerHTML="This field can not be null";
		error2.innerHTML="A digit is mandatory in the field";
		error3.innerHTML="An uppercase alphabet should be there";
	});
	pass.addEventListener('keyup', function(){
		changeColor();
		if(pass.value.length>0){
			error1.innerHTML="";
			passFlagVal1 = true;
		}
		else{
			error1.innerHTML="This field can not be null";
		}
		var flagForDigit = false;
		for(var i =0; i<pass.value.length; i++){
			if(isNaN(pass.value.charAt(i))){
				flagForDigit= false;
			}
			else{
				flagForDigit = true;
				break;
			}
		}
		if(flagForDigit==true){
			error2.innerHTML="";
			passFlagVal2 = true;
		}
		else{
			error2.innerHTML="A digit is mandatory in the field";
		}

		var flagOfCap = false;
		for(var j=0; j<pass.value.length; j++){
			if(pass.value.charCodeAt(j)>65 && pass.value.charCodeAt(j)<90){
				//alert(pass.value.charCodeAt(i));
				flagOfCap = true;
				break;
			}
		}

		if(flagOfCap==true){
			error3.innerHTML="";
			passFlagVal3 = true;
		}
		else{
			error3.innerHTML="An uppercase alphabet should be there";
		}

		if(passFlagVal1 && passFlagVal2 && passFlagVal3){
			passFlag = true;
		}
	});

	//changing background color back to light green
	var bodyEle = document.getElementById("body");
	bodyEle.addEventListener('keyup', function (){
		if(nameFlag==true && passFlag ==true){
			changeColorToPre();
		}
	});



	/******** checking the trim ********
	var ele1 = document.getElementById("fullname");
	ele1.addEventListener('blur', function(){
		alert("\""+ele1.value.trim()+"\"");
	});
	****************/

});

function changeColor(){
	var ele = document.getElementById("formDiv");
	ele.style.backgroundColor="white";
}

function changeColorToPre(){
	var ele = document.getElementById("formDiv");
	ele.style.backgroundColor="rgba(139, 195, 74, 0.48)";
}

function validateLoginForm(){
	if(nameFlag==true && passFlag ==true){
		return true;
	}
	else{
		return false;
	}
}

/****   Validation part is done over here *********/
