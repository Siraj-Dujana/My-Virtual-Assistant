
//variable declaration

let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

//Create webkitSpeechRecognition() object for voice recognizing.
recognition.lang = "en-GB";
//voice recognition language is being set.


function speak(text) {
  let speech = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(speech);
}

//This function is for output
recognition.onresult = function (event) {
  let currentindex = event.resultIndex;
  let transcript = event.results[currentindex][0].transcript;
  console.log(transcript); // Log the recognized text
  takecommand(transcript.toLowerCase());
};

let loader = document.getElementById('ldr');
// I have declared load for animation

//This function will start recognition

let cir1=document.getElementById('redcir1');//red circle
let cir2=document.getElementById('redcir2');//red circle
let cir3=document.getElementById('redcir3');//red circle
let left_e=document.getElementById('eye_left');//white left eye
let right_e=document.getElementById('eye_right');//white right eye
let count=0;
let audio=document.getElementById('myaudio');
loader.addEventListener("click", function () {
  {
    count++;
    loader.classList.add('animate');//animate class will be add to loader
    if(count==1){
      audio.play();
      setTimeout(() => {
        greet();
      speak("I’m all set and fully operational!");
      cir1.classList.add('glooming');
      cir2.classList.add('glooming1');
      cir3.classList.add('glooming2');
      left_e.classList.add('eye_l');
      right_e.classList.add('eye_r');
    }, 500);
    setTimeout(() => {
      recognition.start();
      
    }, 5000);
  }
  else{
    recognition.start();
    
  }
}
});



//pass message here
function takecommand(message) {
  if(message.includes("who am i")){
    speak("you are my boss");
  }
  else if(message.includes("how are you")){
    speak("I am fit and fine, sir.");
  }
  else if(message.includes("who are you")){
    speak("I am your virtual assistant,sir");
  }
  else if(message.includes("what are you doing")){
    speak("nothing special, just waiting for your command,sir");
  }
  else if (message.includes("open youtube")) {
    speak("Opening Youtube for you, sir");
    window.open("https://www.youtube.com/", "_blank");
  }
  else if (message.includes("open facebook")) {
    speak("opening faceboo for you, sirk");
    window.open("https://www.facebook.com/", "_blank");
  }
  else if (message.includes("open instagram")) {
    speak("opening intagram for you, sir");
    window.open("https://www.instagram.com/", "_blank");
  }
  else if (message.includes("open whatsapp")) {
    speak("opening whatsapp for you, sir");
    window.open("https://web.whatsapp.com/", "_blank");
  }
  else if (message.includes("what is time right now")) {
    updateTime();
  }
  else if (message.includes("open calculator")) {
    speak("Opening Calculator");
    window.open("calculator://", "_blank");
  }
  else if (message.includes("what is date today.")) {
    updateDate();
  }
  else {
    speak(`I found this on internet${message}`)
    window.open(`https://www.bing.com/search?q=${message}`);
  }


  setTimeout(() => {
    console.log('animation');
    loader.classList.remove('animate');
  }, 5000);

}


let date = new Date();//Date object
let greet=() => {
  let hours = date.getHours();
  let text;
  if (hours >= 4 && hours <= 12) {
    text = 'good morning Sir'
  }
  else if (hours > 12 && hours <= 15) {
    text = 'good Afternoon sir'
  }
  else if (hours > 15 && hours <= 17) {
    text = 'good Evening Sir'
  }
  else {
    text = 'good night Sir'
  }
  speak(text);
}



function updateTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes().toString().padStart(2, '0') ;
  let seconds = date.getSeconds().toString().padStart(2, '0');  
  let ampm = hours >= 12 ? 'PM' : 'AM';
  // Convert hours from 24-hour to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  let formattedTime = `It's ${hours}:${minutes}:${seconds} ${ampm}`;
  
  // Log the time or display it somewhere in the DOM
  console.log(formattedTime);
  // You can use text-to-speech here if required
  speak(formattedTime);
}

function updateDate(){
  const options = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  speak(("today is"+formattedDate));
}




