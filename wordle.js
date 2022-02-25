const prompt = require('prompt-sync')();

const dict = ["which", 
				"there",
				"their",
				"about",
				"would",
				"these",
				"other",
				"words",
				"could",
				"write",
				"first",
				"those",
				"never"]

var required = dict[Math.floor(Math.random() * (dict.length-1))];

// console.log(required);


var attempts = 5;
while(match != 5 && attempts >=0){
	var match = 0;
	attempts--;

	var input = prompt("Enter 5 letter word: ");
	if(input.length!= 5){
		console.log("Not a 5 letter word");
		return;
	} 
	for(var	 i = 0 ; i < 5; i++){
		if(required[i] == input[i]){
			console.log(required[i] + " is at the right position " + (i+1) );
			match++;
		}
		else if(required.includes(input[i])){
			console.log(input[i]+ " is in the string but not at " + (i+1));
		}
		
	}
	if(match == 5){
		console.log(input +" Is the correct word ");
		return;
	}
	else console.log("No match pls try again");
	if(attempts == 0){
		console.log(input +" Is the wrong word and you are out of attempts " );
		return;	
	}
}

