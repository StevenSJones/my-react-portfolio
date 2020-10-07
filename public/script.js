function validateform (){
var name = document.forms["formIdentifier"]["nameInput"].value
if (name == ""){


alert("Name is required field.")
return false;

}
var email = document.forms["formIdentifier"]["emailInput"].value
if (email == ""){

    alert("Email is a required field.")
    return false;
}

var comment = document.forms["formIdentifier"]["commentInput"].value
if (comment == ""){

    alert("Comment is a required field.")
    return false;
}
alert ("Thank you for visiting, please come visit again soon!")
return true;
}


