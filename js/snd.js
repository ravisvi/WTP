function select_word(dictionary_of_words){
	/*
		Selects a word from the dictionary which is not being used to print on the screen.
		The printing/ display is done by the function display_word()
	*/
	var r = Math.random()
	var word_index = r*(dictionary_of_words.length-1);
	if(dictionary_of_words[word_index][0] == 'NU'){
		dictionary_of_words[word_index][0] = 'CFD';		//Set as CFD here. The display function will
														//Take care when to set it to ST. Or reset to 
														//Not Used. 
		return dictionary_of_words[word_index];
	}
	else{
		select_word(dictionary_of_words);
	}
}

function display_word(word){
	/*
	**	Displays the word on canvas
		May use only canvas. So in that case, this function will just take care when 
		to update the values of keys in the dictionary_of_words.
	*/

}

//For testing only. TODO: Remove this code block.{
var not_used = []
var a = [{key:'ToBe', value: 'NU'},{ key: 'Current', value :'CFD'}, {key:'Used', value:'ST'} ];
a.push({key:'test', value:'NU'});
//	}
console.log(a);
console.log(a[0].value);
console.log(a[0].key);
console.log(a.keys);
if('ToBe' in a){
	console.log("success");
}
else console.log("fail");

//console.log(select_word(a));