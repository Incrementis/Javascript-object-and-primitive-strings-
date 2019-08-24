/*
	NOTE: 	
	The code could be realized in different(better) ways, 
	but due to focus on simplicity it is as it is.
*/

function concatenate()
{
	
	//Getting input values 
	var obj_input 		= document.getElementById('str_obj').value;
	var prim_string 	= document.getElementById('str_prm').value;
	
	//Giving a string to a String object
	var string_object 	= new String(obj_input);
	
	var result 		= document.getElementById('con');
	
	//Getting concatenated result on browser
	result.innerHTML 	= string_object + prim_string;	
}



function extract()
{
	//Getting input values
	var obj_input 		= document.getElementById('str_obj').value;
	var prim_string 	= document.getElementById('str_prm').value;
	//Giving a string to a String object
	var string_object 	= new String(obj_input);
	
	//Converting to number with plus operator
	var position 		= +document.getElementById('pos').value;
	
	var result 		= document.getElementById('extr');

	result.innerHTML 	= string_object[position-1];
}



function upperC()
{
	//Getting input value
	var prim_string 	= document.getElementById('str_prm').value;
	
	var result 		= document.getElementById('upc_prm');
	
	result.innerHTML 	= prim_string.toUpperCase();
}


function typof()
{
	//Getting input value
	var obj_input 		= document.getElementById('str_obj').value;
	var prim_string 	= document.getElementById('str_prm').value;
	//Giving a string to a String object
	var string_object 	= new String(obj_input);
	
	var res_obj 		= document.getElementById('tpo_obj');
	var res_prim 		= document.getElementById('tpo_prm');
	
	res_obj.innerHTML 	= typeof string_object;
	res_prim.innerHTML	= typeof prim_string;
}



/*	NOTE: 
	There are different ways to realize and optimize the following examples in js.
	To split it in two seperate functions should simplify code readability. 
*/		

function example1()
{
	//Getting input value
	var obj_input 	= document.getElementById('str_obj').value;
	
	//Giving strings to String objects
	var a 		= new String(obj_input);
	var b 		= new String(obj_input);
	
	var result	= document.getElementById('result_one');
	
	result.innerHTML = (a === b);
}



function example2()
{

	//Getting input value
	var obj_input 	= document.getElementById('str_obj').value;
	
	//Giving strings to String objects
	var a 		= new String(obj_input);
	var b 		= new String(obj_input);
	
	var result	= document.getElementById('result_two');
	
	result.innerHTML = (a == b);
}
