let admin = prompt("admin");
if(admin == "Admin"){
    let password = prompt("password");
    if(password == "TheMaster"){
        alert("Welcome");
    }else if(passwordv == "null"){
        alert("Canceld");
    }else {
        alert("Wrong password");
    }
}else if(admin=="null"){
    alert("canceld");
}else {
    alert("I do not you");
}