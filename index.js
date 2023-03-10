function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}



function sayHiToHeadphonedRoommate(string) {
    let stringLow = string.toLowerCase();
    let stringUp = string.toUpperCase();
    let stringDinner = "Let\'s have dinner together!";

    if (string === stringDinner) {
        return "I would love to!";

    } else if (string === stringLow) {
        return "I can\'t hear you!";
        
    } else if (string === stringUp) {
        return "YES INDEED!";
        
    }
}