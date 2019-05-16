// JavaScript Document

function Kiemtrathongtin()
{
	var Hoten= document.getElementById("text");
	var email = document.getElementById("text1");
	var sdt = document.getElementById("text2");
	if(Hoten.value=="")
	{
		alert("Vui lòng nhập họ tên");
		Hoten.style.border= " 2px solid red";
		Hoten.focus();
		return false;
	}
	else
	{
		Hoten.style.border = "none";
	}
	re=/\w+@\w+\.\w+/;
	if(email.value=="")
		{
			email.style.border= " 2px solid red";
			alert("Vui lòng nhập email");
			email.focus();
			return false;
		}
	else
	if(re.test(email.value)==false)
	{
			alert("Email không hợp lệ");
			email.style.border= " 2px solid red";
			email.focus();
			return false;
	}
	else{
		email.style.border = "none";
	}
	if(sdt.value=="")
		{
			sdt.style.border= " 2px solid red";
			alert("Vui lòng nhập số điện thoại");
			sdt.focus();
			return false;
		}
	if(isNaN(sdt.value)==true)
		{
			sdt.style.border= " 2px solid red";
			alert("Nhập sai cú pháp ! VD: 0383197989");
			sdt.focus();
			return false;
		}
	else{
		sdt.style.border= "none";
	}
	setTimeout(function(){
	var a =document.getElementById("dktc");
	a.style.display = "block";
	
	
	},100)
	setTimeout(function(){
	location.replace("http://ffq.000webhostapp.com/Dangkitc.html");
	
	},1200)
	return true;
}

setInterval(function(){
	var a =document.getElementById("Slickout");
	a.style.display = "none";
	
	
},10000)
setInterval(function(){
	var a =document.getElementById("Slickout");
	a.style.display = "block";
	
	
},6000)
setInterval(function(){
	var a =document.getElementById("submit");
	a.style.backgroundColor = "blue";
	
	
},3000)
setInterval(function(){
	var a =document.getElementById("submit");
	a.style.backgroundColor = "red";
	
	
},5000)
var swap = 1;
setInterval(function(){
	swap = swap + 1;
	var a = document.getElementById("popup-CokhachNotification-avatar")
	a.src= "https://w.cokhach.com/assets/images/avatar/4/"+swap.toString()+".gif";
	if(swap==13)
	{
		swap= 1;
	}
},6000)
var swapName=0;
setInterval(function(){

	var b = document.getElementById("cokhach_fakeEmail");
	var c = document.getElementById("cokhach_fakeName");
	swapName = swapName +1;
	if(swapName==9)
	{
		swapName=1;
	}
	if(swapName==1)
	{
	b.innerHTML= "phuccog@gmail.com";
	c.innerHTML="Công Phúc";}
	if(swapName==2)
	{
		b.innerHTML="PhiOchoa@gmail.com";
		c.innerHTML="Đạt Phi";
	}
	if(swapName==3)
	{
		b.innerHTML="HuongHeo@gmail.com";
		c.innerHTML="Heo Hưởng";
	}
	if(swapName==4)
	{
		b.innerHTML="Xuanhoag@gmail.com";
		c.innerHTML="Xuân Hoàng";
	}
	if(swap==5)
	{
		b.innerHTML="Quocanh@gmail.com";
		c.innerHTML="Quốc anh";
	}
	if(swap==6)
	{
		b.innerHTML="KimNgan@gmail.com";
		c.innerHTML="Kim Ngân";
	}
	if(swap==7)
	{
		b.innerHTML="ChuLuot@gmail.com";
		c.innerHTML="Chu Chỉ Nhược";
	}
	if(swap==8)
	{
		b.innerHTML="Khakho@gmail.com";
		c.innerHTML="Kha ngố";
	}
	
},6000)

var count=0;
function Moboxchat()
{
	var tele = document.getElementById("telephone");
	count=count+1;
	var boxchat = document.getElementById("mess-box-chat");
	boxchat.style.display = "block";
	tele.style.display="none";
	if(count%2==0){
		boxchat.style.display = "none";
		tele.style.display="block";
	}
	
}
function CClose(){
	var tele = document.getElementById("telephone");
	var boxchat = document.getElementById("mess-box-chat");
	boxchat.style.display = "none";
	tele.style.display="block";
}
