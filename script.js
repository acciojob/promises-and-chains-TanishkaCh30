let age = document.querySelector("#age");
let name = document.querySelector("#name");
let btn = document.querySelector("#btn");
let form = document.querySelector("#myForm");

btn.addEventListener("click" , () =>{
	if(age.value==="" || name.value===""){
   alert("Please enter valid details");
}

});


form.addEventListener("submit" , (event) =>{
	event.preventDefault(); 
	let myPromise = new Promise((resolve,reject) =>{;
	if(age.value>18){
	  setTimeout(()=>{
		  resolve("Welcome, . You can vote.");
},4000);
	}else {
			reject("Oh sorry . You aren't old enough.");
		}

});

	myPromise.then((result)=>{
		alert(result);
	}).catch((error) => {
		alert(error);
	});
	
});

