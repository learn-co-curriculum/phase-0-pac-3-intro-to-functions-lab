
function shout(str){
    return typeof str === "string"
    ? str.toUpperCase()
    : "Please enter a string";
  }
  
  function whisper(str){
    return typeof str === "string"
    ? str.toLowerCase()
    : "Please enter a string";
  }
  
  function logShout(str){
    const upper = str.toUpperCase()
    console.log(upper);
  }
  
  function logWhisper(str){
    const upper = str.toLowerCase()
    console.log(upper);
  }
  
  function sayHiToHeadphonedRoommate(str){
    if (typeof str === 'string') {
        
        if(str === str.toLowerCase()){
            return "I can't hear you!";
        }
  
        if(str === str.toUpperCase()){
            return "YES INDEED!";
        }
  
        if(str == "Let's have dinner together!"){
            return "I would love to!";
        }
    }
  }