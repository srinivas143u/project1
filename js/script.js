const form = document.getElementById("form");
var usname = document.getElementById("name");
var nameerror = document.getElementById("n-error");
var email = document.getElementById("email");
var emailerror = document.getElementById("e-error");
var subject = document.getElementById("subject");
var subjecterror = document.getElementById("sub-error");
var message = document.getElementById("message");
var messageerror = document.getElementById("mes-error");

function validatename(){
    if (usname.value == ""){
        nameerror.innerHTML ="Name is required";
        usname.style.border="2px solid red";
        return false;
    }
    else if(usname.value.length<4){
        nameerror.innerHTML ="Character length min-4";
        usname.style.border="2px solid red";
    }
    else {
        nameerror.innerHTML ="";
        usname.style.border="2px solid green";
        return true;
    }
    }
    function validateemail(){
        if (email.value == ""){
            emailerror.innerHTML ="Email is required";
            email.style.border="2px solid red";
            return false;
        }
        else if(!email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
            emailerror.innerHTML ="Enter the Valid Email";
            email.style.border="2px solid red";
            return false;
        }
        else {
            emailerror.innerHTML ="";
            email.style.border="2px solid green";
            return true;
        }
        }
    function validatesubject() {
        if (subject.value ==""){
        subjecterror.innerHTML ="Select the Subject";
        subject.style.border ="2px solid red";
        return false;
        }
        else if (subject.value =="-1"){
            subjecterror.innerHTML ="Select the Subject";
            subject.style.border ="2px solid red";
            return false;
            }
        else {
            subjecterror.innerHTML ="";
            subject.style.border ="2px solid green";
            return true;
        }
    }
    function validatemessage(){
        if (message.value ==""){
            messageerror.innerHTML ="Enter the Message";
            message.style.border ="2px solid red";
            return false;
        }
        else if(message.value.length < 10 ){
            messageerror.innerHTML ="Enter the Message max 10";
            message.style.border ="2px solid red";
            return false;
        }
      
        else{
            messageerror.innerHTML="";
            message.style.border ="2px solid green";
            return true;
        }
    }


form.addEventListener('submit',(e)=> {
    e.preventDefault();
    inputCheck();

})

function inputCheck(){
    const nameVal = usname.value.trim();
    const emailVal = email.value.trim();
    const subjectVal = subject.value.trim();
    const messageVal = message.value.trim();
    
   
    var double = (usname.value != "" && email.value != ""   && email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) && subject.value !="" && subject.value !="-1" && message.value !="" );
    if(!double){
     if (usname.value == ""){
       
        nameerror.innerHTML ="Name is required";
        usname.style.border="2px solid red";
     }
     
     if (email.value == ""){
        
        emailerror.innerHTML ="Email is required";
        email.style.border="2px solid red";
        
    }
    else if(!email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
            emailerror.innerHTML ="Enter the Valid Email";
            email.style.border="2px solid red";
            
        }
        if (subject.value ==""){
            subjecterror.innerHTML ="Select the Subject";
            subject.style.border ="2px solid red";
          
            }
            else if (subject.value =="-1"){
                subjecterror.innerHTML ="Select the Subject";
                subject.style.border ="2px solid red";
                
                }

                if (message.value ==""){
                    messageerror.innerHTML ="Enter the Message";
                    message.style.border ="2px solid red";
                   
                }
              
                return false;
    } 
    else if(message.value.length < 10 ){
        messageerror.innerHTML ="Enter the Message max 10";
        message.style.border ="2px solid red";
        return false;
    }
    else if(usname.value.length<4){
        nameerror.innerHTML ="Character length min-4";
        usname.style.border="2px solid red";
        return false;
    }
    
    
   

    
  
               
    
  
  
 
    
    
   
    

    
            
    
  
    
   
    
    
        
    




    document.write("Name:" +" "+nameVal +"<br>");
    document.write("Email:" +" "+emailVal +"<br>");
    document.write("Subject:" +" "+subjectVal +"<br>");
    document.write("Message:" +" "+messageVal +"<br>");
   

    
}









