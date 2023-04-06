
  function checkregister(){
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;
   var confirm_password = document.getElementById("confirm_password").value;

   if(!username){
    alert('khong bo trong username');
    return false;
  }
   if(username<8){
    alert('username lon hon >= 8 ky tu');
    return false;
  }

  if(!password){
    alert('nhap mat khau');
  }
   if(password<8){
    alert('password lon hon >= 8 ky tu');
    return false;
  }
  if(username==password){
    alert('username va password khong duoc trung nhau');
    return false;
  }
    if(!confirm_password){
    alert('xac nhan mat khau');
  }
   if(password<8){
    alert('confirm_password lon hon >= 8 ky tu');
    return false;
  }
    if(confirm_password!=password){
    alert('confirm_password va password khong dung');
    return false;
  }
   alert('Đăng ký thành công');
  window.location='login.html'
}

 
 console.log(u);
 // console.log("u");
  function checklogin(){
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;

   if(!username){
    alert('khong bo trong username');
    return false;
  }
   if(username<8){
    alert('username lon hon >= 8 ky tu');
    return false;
  }
  if(!password){
    alert('nhap mat khau');
  }
 if(password<8){
    alert('password lon hon >= 8 ky tu');
    return false;
  }
  if(username==password){
    alert('username va password khong duoc trung nhau');
    return false;
  }
 
  window.location='index_dai.html';
}