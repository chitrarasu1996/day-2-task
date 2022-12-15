// let a=10;
// let  b=10;
// let c=eval("10+20");
// console.log(c);

// document.getElementById("result").innerHTML=myfun();

// const btn=document.getElementById("btn")
// btn.addEventListener("click",()=>{
// let email=document.getElementById("email").value;
//     let pass=document.getElementById("pass").value;
  
//   let cpass=document.getElementById("cpass").value
// if(!email.split("").includes("@")){
//     console.error("not  a valid email ")
//     return;
// }

//   if(pass.length<8 || cpass.length<8){
//     console.error("not required")
//   return;
// }
// if(pass!==cpass){
//     console.error("password not matched")
// return;
// }
// console.log("register");

// }) 

// const btn=document.querySelectorAll("button")
// btn.onclick=()=>{
//     alert("hello")
// }


const div=document.createElement("div");

div.innerHTML=`<table id="center"   >
<tr>
   <td   colspan="3"><input value="0" id="input" type="text"></td> 
<td><button onclick="clear()">C</button></td>
</tr>
<tr> 
    
    <td><button onclick="disc('1')">1</button></td>
   <td><button onclick="disc('2')">2</button></td>
   <td><button onclick="disc('3')">3</button></td>
   <td><button onclick="disc('+')">+</button></td> </tr>
   <tr>
       <td><button onclick="disc('4')">4</button></td>
       <td><button onclick="disc('5')">5</button></td>
       <td><button onclick="disc('6')" >6</button></td>
       <td><button onclick="disc('-')">-</button></td> </tr>
       <tr>
           <td><button onclick="disc('7')">7</button></td>
           <td><button onclick="disc('8')">8</button></td>
           <td><button onclick="disc('9')">9</button></td>
           <td><button onclick="disc('*')">*</button></td> </tr>
           <tr>
               <td><button onclick="disc('0')">0</button></td>
               <td><button onclick="disc('.')">.</button></td>
               <td><button onclick="disc('/')">/</button></td>
               <td><button onclick="solve()" >=</button></td> </tr>
                
           </table>`

document.body.appendChild(div)


function disc(x){
if(document.getElementById("input").value==0){
    document.getElementById("input").value="";
    document.getElementById("input").value=x;
}else{
    document.getElementById("input").value+=x;
}
}

function solve(){
 let x=document.getElementById("input").value;
 let y=eval(x);
 document.getElementById("input").value=y
    
}

function clear(){

    document.getElementById("input").value=0;
}





