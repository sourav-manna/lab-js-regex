/* Fill your code*/
let p1 = /^[a-zA-Z ]{8,15}$/;
let p2 =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let p31 = /[A-Z]+/;
let p32 = /[a-z]+/;
let p33 = /[0-9]+/;
let p4 =  /^[6-9]{1}[0-9]{9}$/;
let pass = ""

let valid1 = false
let valid2 = false
let valid3 = false
let valid4 = false
let valid5 = false
let valid6 = true

function ckName(){
    if(!p1.test(document.getElementById("Name").value)){
        document.getElementById("name").innerText = "Atleast 8 to 15 characters required"
        valid1 = false
    }else{
        document.getElementById("name").innerText = ""
        valid1 = true
    }

}


function ckEmail(){
    if(!p2.test(document.getElementById("Email").value)){
        document.getElementById("email").innerText = "Enter a valid Email"
        valid2 = false
    }else{
        document.getElementById("email").innerText = ""
        valid2 = true
    }

}

function ckPassword(){
    pass = document.getElementById("Password").value
    if(!p31.test(pass) || !p32.test(pass) || !p33.test(pass)){
        document.getElementById("pwd").innerText = "Password must contain 1 uppercase letter, 1 lowercase letter, atleast 1 number."
        valid3 = false
    }else{
        document.getElementById("pwd").innerText = ""
        valid3 = true
    }

}

function ckCPassword(){
    if(pass != document.getElementById("CPassword").value){
        document.getElementById("cpwd").innerText = "Not matching with Password"
        valid4 = false
    }else{
        document.getElementById("cpwd").innerText = ""
        valid4 = true
    }

}

function ckPhone(){
    if(!p4.test(document.getElementById("Phone").value)){
        document.getElementById("phone").innerText = "Enter a valid Phone number"
        valid5 = false
    }else{
        document.getElementById("phone").innerText = ""
        valid5 = true
    }

}

function ckAddress(){
    if(document.getElementById("Address").value != ""){
        document.getElementById("address").innerText = ""
    }
}

function Check(){
    console.log("fff")
    if(document.getElementById("Name").value == ""){
        document.getElementById("name").innerText = "Kindly fill this field"
    }
    if(document.getElementById("Address").value == ""){
        document.getElementById("address").innerText = "Kindly fill this field"
        valid6 = false
    }else{
        valid6 = true
    }
    if(document.getElementById("Email").value == ""){
        document.getElementById("email").innerText = "Kindly fill this field"
    }
    if(document.getElementById("Password").value == ""){
        document.getElementById("pwd").innerText = "Kindly fill this field"
    }
    if(document.getElementById("CPassword").value == ""){
        document.getElementById("cpwd").innerText = "Kindly fill this field"
    }else if(document.getElementById("CPassword").value != pass){
        document.getElementById("cpwd").innerText = "Not matching with Password"
    }
    if(document.getElementById("Phone").value == ""){
        document.getElementById("phone").innerText = "Kindly fill this field"
    }

    if(valid1 && valid2 && valid3 && valid4 && valid5 && valid6){
        document.getElementById("sub").innerText = "Form Validation Success"
    }
}



