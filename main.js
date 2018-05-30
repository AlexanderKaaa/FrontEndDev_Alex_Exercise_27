/*
    Exercise 27 
*/
$(document).ready(function(){
    /*=======================
        Regular Expressions 
     =======================*/



$('#btnvalidate').click(function(){
    /*=======================
       RegExp functionality 
     =======================*/
	var checkEmailBool=true;
	var checkEmailValue= $("#email").val();
	var pattEmail = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i);
	var checkEmailBool = pattEmail.test(checkEmailValue);   
   
   if(!checkEmailBool){
	   $("#email").addClass( "is-invalid" );
	   
   }
   
   if(checkEmailBool){
	   
	    $("#email").removeClass( "is-invalid" );
   }
   
   var numbersFieldValue=$("#numeric").val();
     var numbersPattern=(/[0-9]/gi);
	  var lettersPattern=(/[a-z]/gi);
	 var numberFieldCleaned=numbersFieldValue.replace(lettersPattern,""); 
	  $("#numeric").val(numberFieldCleaned);
  /*
    var numbersFieldBool=true;
   var numbersFieldValueArray=[];
    var numbersResultArray=[];
   var resultNumbersField="";
  
   var numbersAndLettersPattern=(/^[a-z0-9_-]$/);
    numbersFieldBool=numbersAndLettersPattern.test(numbersFieldValue);
   
   if(!numbersFieldBool){
   numbersFieldValueArray=numbersFieldValue.split("");
   console.log(numbersFieldValueArray);
   
   for(var i=0;i<numbersFieldValueArray.length;i++){
	   var tempTest=numbersPattern.test(numbersFieldValueArray[i]);
	   if(tempTest){
		   numbersResultArray.push(numbersFieldValueArray[i]);
		   console.log(numbersResultArray);
	   }
	   else{
		   continue;
	   }
	   
   }
   
   resultNumbersField=numbersResultArray.join("");
   console.log(resultNumbersField);
   
   }
   
   var numbersFieldValue=$("#numeric").val(resultNumbersField);*/
   
   
   
});



     /*=======================
       Array Methods 
     =======================*/
/*

Make an array of numbers
Use the .map method to create a new array that contains the same numbers, but squared
Original Array: [1,2,3,4]
New Array: [1,4,9,16]

*/

var arrayOfNumbersToUse=[0,1,1,2,3,5,8,13,21,34,55];
var squarredArrayOfNumbers=arrayOfNumbersToUse.map(function(element, index, array){
    var temp=element*element;
	return temp;
});


console.log(squarredArrayOfNumbers);



});