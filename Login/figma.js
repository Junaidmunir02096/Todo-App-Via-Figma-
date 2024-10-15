let email = document.getElementById('email');
let pasword = document.getElementById('password');
let btn = document.getElementById('btn');




btn.addEventListener('click',()=>{
 if(email.value == 'junaid123se@gmail.com' && pasword.value == '54321'){
    console.log('success');
    
    window.location.href = '../Task/task.html';
 }else{
    console.log('ihi');
    
    // window.location.href = '../Task/task.html';
//  reload();
 }
})


let showbtn = document.getElementById('shhd')
        let password = document.getElementById('password')
        showbtn.onclick = function(){
            if(password.type == 'password'){
                password.type = 'text'
            }else{
                password.type = 'password'
            }
        }