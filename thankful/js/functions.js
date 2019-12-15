$(document).ready(function(){

    var intervalID;

    var responsePhrases=["Good job!","Nice work!","Keep it up!","That's awesome!","You're the best!","Amazing work!","Yeah!","You're the bomb!","Hot stuff!","Easy!","Too good!","You're good at this!","Nice one!","Cool!","Dang!","Wow!!","Holy moly!","You've got it!","A+!","5 stars!","COOL!","Great attitude!","You win!","Stellar!","Unbelievable!","Great effort!","You're the boss!","Ballin'!","Well done!","Congratulations!","You've got what it takes!","You're a winner!","Oustanding achievement!","Congrats, pal!","Monumental!","How grand!","Superb!","You're a star!","Nice going, champ!","That was a gutsy move!","Keep up the hard work!","Didn't even break a sweat!","Brilliant!","Awesome!","Amazing!","You've got what it takes!","Movin' on up!","What skill!","Total pro!","What a pro!","You should be proud of yourself!","Phenomenal!","Reach for the stars!","Wonderful!","Wonderful work!","A++!","You're the bee's knees!","You're the cat's pajamas!","Victory!","So good!","Dope!","Impressive!","You're shining!","Keep shining!","A triumph!","Stellar job!","Unreal!","You're number one!","You're the best!","A star is born!","Cheers to you!","Grand!","Well-deserved!","You made it!","Hats off to you!","What a big day!","Genius!","OMG!","You're on top!","Admirable!","Incredible job!","Incredible effort!","Incredible!","Magical!","You're a wizard!","You've got the magic touch!","You had it in you!","You're having a field day!","You're doing great!","You're making waves!","Gold star!","You're special!","You're doing amazing!","Your shine is bright!","You are a hero","Your championship is strong!","Unfounded strength!","Healthy friendship!","Unbearable lightness!","Your star is huge!","Animalistic!","Unwavering girth","Nothing can limit your progress!","You are a unique individual!","Specialty lies in your heart!","Work smoothly, lifetime peace!","Conquering the unknown!","You have defeated badness","The goodness is real!","You are unbelievable!","Believe yourself!","Terrifying prowess","Unlimited magic!","You are sorcerous!","Strength beyond measure!","Power is yours!","Mighty strength","Chakra!","Undying faith","Others stand behind your will!","Your fortune grows!","Fortuitous!","How fortune!","How great","Unbelievably, you prosper!","Very elegant!","Mastery!","Bonus!"];

    var phraseLength=responsePhrases.length;

    $('.button').click(function(){
        var ran=Math.floor(Math.random()*phraseLength);
        alert(responsePhrases[ran]);
    })


});
