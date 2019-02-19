let input = ""
let input = prompt (
"Hello, what can I do for you?")
input = input.toLowerCase()
if ( input == "nothing" ){
   input = prompt ("Come on, be more positive! What can I do for you?") 
   input = input.toLowerCase()
}
let input = input.replace("you","I")
let input = input.replace("me", "you")
let input = input.replace("my","your")
let input = prompt ( "Why you think that " + input +"?") 
input = input.toLowerCase()
let insults=["stupid","moron","whore","bitch"]
let insulted = insults .indexOf(input )
if (insulted > -1)
  {
     let input = prompt("You are so angry, can you deal with that?") 
     input = input.toLowerCase()
  }
nice = ["beauty","nice","smart","cleaver","cute","gorgeus"]
let niced = nice.indexOf(input)
if(niced > -1){
   let input = prompt ("You are so nice! I think that you are a nice person. Don't you?") 
   input = input.toLowerCase()
}
if (input =="because you are a chatbot"){
   input = prompt ("You are so smart! You really know me. Do you think the same?")
    input = input.toLowerCase()
}
input = prompt ("What's your favorite programming language?'")
alert("I like "+ input + " too.") 
let string = "javascript"; if(input.indexOf(string ) !== -1){
    alert("I like javascript too.")
}

alert("Pleased to chat with you. Good bye.")