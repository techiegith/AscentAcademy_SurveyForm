function validation(){
    var user = document.getElementById('username').value;
    var email = document.getElementById('emailids').value;
    console.log(email);
    var Phonenum = document.getElementById('numbermobile').value;

    if( user == ""){
        document.getElementById('usernameid').innerHTML = " *PLEASE FILL THE USERNAME";
        return false;
    }
    if(( user.length <3) ||(user.length > 20)){
        document.getElementById('usernameid').innerHTML = " *PLEASE FILL THE USERNAME BETWEEN 3 & 20";
        return false;
    }
    if(!isNaN(user)){
        document.getElementById('usernameid').innerHTML = " * PLEASE ENTER CHARACTER";
        return false;
    }
    if( email == "" ){
        document.getElementById('imp').innerHTML = " * PLEASE FILL THE EMAIL";
        return false;
    }
    if(email.indexOf('@') <= 0){
        document.getElementById('imp').innerHTML = " ** Please Fill The Email in Proper manner @";
    }
    if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
        document.getElementById('imp').innerHTML = " ** PLEASE FILL THE Email in Proper format .";
        return false;
    }
    if( Phonenum == ""){
        document.getElementById('mobilenumber').innerHTML = " ** PLEASE FILL THE Mobile Number";
        return false;
    }
    if(Phonenum.length!=10){
        document.getElementById('mobilenumber').innerHTML = " ** Mobile Number should be 10 digit";
        return false;
    }
    if(isNaN(Phonenum)){
        document.getElementById('mobilenumber').innerHTML = " ** Mobile Number Should contain only digits";
        return false;
    }         
}