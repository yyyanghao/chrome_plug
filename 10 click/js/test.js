var test = document.getElementsByClassName('clearfix');
// var test = document.getElementsByClassName("ul")

var btn = test[0].children[0].children[0];
var count =0;
console.log(btn)
var int = setInterval(function(){
	btn.click();
	count++;
	console.log(count);
if(count ==10){
	clearInterval(int);
}
},100)