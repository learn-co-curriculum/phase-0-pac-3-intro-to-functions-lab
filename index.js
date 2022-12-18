function shout(string) {
    return string.toUpperCase();
  }

  function whisper(string) {
    return string.toLowerCase();
  }

  function logShout(string) {
    console.log(shout(string));
  }

  function logWhisper(string) {
    console.log(whisper(string));
  }

  function sayHiToHeadphonedRoommate(string) {
    const thirdresponse = "Let's have dinner together!"
    // returns I can't hear you if string is lower case
    if (string === whisper(string)){
        return "I can't hear you!";
    }

    // return yes indeed if string is uppercase]
    if (string === shout(string)) {
        return "YES INDEED!";
    }
    
    // returns I would love to if string is let's have dinner together
    if (string === thirdresponse) {
        return "I would love to!";
    }
  }

  // Creating function calls
  console.log(shout("hey"));
  console.log(whisper("HEY"));
  logShout("log shout hey");
  logWhisper("LOG WHISPER HEY");
  console.log(sayHiToHeadphonedRoommate("want dinner"));
  console.log(sayHiToHeadphonedRoommate("WANT DINNER"));
  console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));