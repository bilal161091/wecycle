 var j = document.forms["submit"] ["email"].value;
        var atpostion = j.indexOf("@");
        var dotpostion = j.lastIndexOf(".");
        if(atpostion < 1 || dotpostion< atpostion+2 || dotpostion+2>= j.length) {
            alert("Please enter email address correctly");
        }
else{
       location.href = "/additems.html";
}
