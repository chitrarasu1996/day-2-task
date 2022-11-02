// // // // // // 1.
// // // // // //  a. print  oddnumbers in array

 (function (array){
 for(let i=0;i<array.length;i++){
 if(array[i]%2!=0){
    console.log(array[i])
}

 }
 })([1,2,3,4,])

// // // // // // b.Convert all the strings to title caps in a string array


 let a=(function (str) {
    str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
     } 
     return str.join(' ');
   })("Arasu IS MY NAME");
   console.log(a);


//  c.sum of all numbers in an array
 (function(array){
     var sum=0;
     for(i=0;i<array.length;i++){
 sum=sum+array[i];

     }
     console.log(sum)
 })([1,2,3,4,5])

// // // // // // d.return all the prime  numbers in an array
  
     (function(numArray){
       numArray = numArray.filter((number) => {
         for (var i = 2; i <= Math.sqrt(number); i++) {
           if (number % i === 0) return false;
          }
         return true;
        });
       console.log(numArray);
    })([1,2,3,4,5,6,7,8,9])


// // // // // // e.Return all the palindromes in an array



 let a=(  function (arr, n)
 {
     for (let i = 0; i < n; i++)
    {
         let ans = (arr[i]);
      if (ans == false)
             return false;
    }
    return true;
 })([1,2,3] , 3)
 console.log(a)




// // // // // f.Return median of two sorted arrays of the same size

let a=(function (a1, a2)  {
    let x = a1.concat(a2);
    x.sort(function (a,b) {
      return a - b;
    });
    let len = x.length;
    
    return len%2 === 0 ? (x[Math.floor(len/2)-1] + x[Math.ceil(len/2)])/2 : x[Math.floor(len/2)];
  
  })
  
 
  ([0,2,3,5,9],[1,4]);
console.log(a)
 



 
// // // // g.Remove duplicates from an array
   
 (function(array){
    let a=[...new Set(array)];
    console.log(a)
})([1,2,3,4,1,2])


//h.Rotate an array by k times

let a=(function (arrRotate, step){

    
    for (var i=0; i<step ; i++)
    {
            arrRotate.push(arrRotate[i]);
    }
    
    
    for (var i=0; i<step; i++)
    {
            arrRotate.shift(i);
    }
      return arrRotate;
    })([1,2,3,4,5,6,7,8,9],  3);
    console.log(a)

// 3.arrow funnction
// a.Print odd numbers in an array
oddNumbers = (array) => {
    for(var i = 0 ; i< array.length ; i++){
         if(array[i]%2!=0){
            console.log(array[i])
         } 
    }
         }
         oddNumbers([1,2,3,4,5]);

        //  b.Convert all the strings to title caps in a string array
         let  a=titleCase = (str) => {
            str = str.toLowerCase().split(' ');
            for (var i = 0; i < str.length; i++) {
              str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
            } 
            return str.join(' ');
            
          }  
          console.log(a("Chitrarasu is my name"))
          
    //    c. Sum of all numbers in an array
    total=(Array)=>{
        var sum=0;
        for(let i =0;i<Array.length;i++){
            sum=sum+Array[i];
            
        }
        console.log(sum) 

    }
    total([1,2,3,4,5])
          
    // d.Return all the prime numbers in an array

primenumber= (numArray) => {numArray = numArray.filter((number) => {
         for (var i = 2; i <= Math.sqrt(number); i++) {
         if (number % i === 0) return false;
          }
        return true;
              });
          console.log(numArray);
    }
    primenumber([1,2,3,4,5])
          
// e.Return all the palindromes in an array
let a=Palindrome = (arr, n) =>
    {
        
        for (let i = 0; i < n; i++)
        {
            let ans = (arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
 console.log(a([1,2,3,4,5,6],3))

          