function validateForm(){
	var firstName = document.myform.firstname.value;
	var lastName = document.myform.lastname.value;
	var companyName = document.myform.companyname.value;
	var address = document.myform.address.value;
	var job = document.myform.job.value;
	var emails = document.myform.email.value;
	var num = document.myform.phone.value;
	var atposition=emails.indexOf("@");  
	var dotposition=emails.lastIndexOf(".");

	if(firstName == '' || lastName == '' || companyName == '' || address == '' || job == '' || emails == '' || phone == ''){
		alert('Please enter full of infomation');
		return false; 
	}else if(atposition<1 || dotposition<atposition+2 || dotposition+2>=emails.length){
		alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  		return false;  
	}else if(isNaN(num)){  
  		alert('Please enter phone number');
  	return false;  
	}else{
		return true;
	}
	return false;
}

function myFunction() {
	document.getElementById("demo").innerHTML = '<input class="question" value="" type="text" placeholder="Enter answer">';
}