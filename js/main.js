
var signName = document.getElementById('sName');
var signEmail = document.getElementById('sEmail');
var signPass = document.getElementById('sPass');
var loginEmail = document.getElementById('lEmail');
var loginPass = document.getElementById('lPass');
var exist=document.getElementById('exist');
var incorrect=document.getElementById('incorrect');
var UsersA=[];//the useres array
var emailExist;
var valid;
var current = localStorage.getItem('username')

if(current)
{
    document.getElementById('welcome').innerHTML="Welcome "+current;
    
}

function emptyS() {

    if (signName.value == "" || signEmail.value == "" || signPass.value == "") {
        return true;
    } else {
        return false;
    }
}

function signup()
{
    UsersA = JSON.parse(localStorage.getItem('users'));   
    if(emptyS()==true)
    {
        exist.innerHTML='<span class="text-danger m-3">All inputs is required</span>';
        return false;
    }

    var userData = {
        name : signName.value,
        email : signEmail.value,
        pass : signPass.value, 
    };

    if(UsersA.length==0)
    {
        UsersA.push(userData);
        localStorage.setItem('users', JSON.stringify(UsersA));
        exist.innerHTML='<span class="text-success m-3">Success</span>';
        return true;
    }
    else
    {
        emailExist=false;
        for (var i = 0; i < UsersA.length; i++) {
            if (UsersA[i].email == signEmail.value) {
                emailExist=true;
            }
        }
        if(emailExist==true)
        {
           exist.innerHTML = '<span class="text-danger m-3">email already exists</span>';
           return false;
        }
        else{
            UsersA.push(userData);
            localStorage.setItem('users', JSON.stringify(UsersA))
            exist.innerHTML = '<span class="text-success m-3">Success</span>';
            return true;
        }
    }
}

function emptyL() {

    if (loginEmail.value == "" || loginPass.value == "") {
        return true;
    } else {
        return false;
    }
}
function login()
{
    UsersA = JSON.parse(localStorage.getItem('users'));   
    if(emptyL()==true)
    {
        incorrect.innerHTML='<span class="text-danger m-3">All inputs is required</span>';
        return false;
    }

    valid=false;
    for (var i = 0; i < UsersA.length; i++) {
        if (UsersA[i].email == loginEmail.value) {
            if(UsersA[i].pass==loginPass.value)
            {
                localStorage.setItem('username', UsersA[i].name);
                valid=true;
            }
        }
    }
    if(valid==true)
    {
        location.replace('home.html');      
    } 
    else
    {
       incorrect.innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>';  
    }  

}