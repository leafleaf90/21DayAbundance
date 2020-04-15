let message='';
let meditation;
let day;
let leaderName='';
let days=``;
let btnCopy = document.getElementById('btnCopy');

function print(message,outputid) {
  let outputDiv = document.getElementById(outputid);
  outputDiv.innerHTML = message;
}

function listDays(){
for(let j=0;j<meditations.length;j++){
  meditation=meditations[j];
  days+=`<a class="button primary daybutton" id="${meditation.day}" href="#">Day ${meditation.day}</a>`;
}
print(days,'days');
}

listDays();

function CopyToClipboard(outputid) {
  console.log('test');
  if (window.getSelection) {
      if (window.getSelection().empty) { // Chrome
          window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges) { // Firefox
          window.getSelection().removeAllRanges();
      }
  } else if (document.selection) { // IE?
      document.selection.empty();
  }

  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(outputid));
    range.select().createTextRange();
    document.execCommand("copy");
} else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(outputid));
    window.getSelection().addRange(range);
    document.execCommand("copy");
}
}

btnCopy.addEventListener('click',()=>{
  CopyToClipboard('output')
});





let dayButtons=document.querySelectorAll('.daybutton');

dayButtons.forEach((btn) => {
  let selectedDay = btn.id;
  console.log(selectedDay);
  btn.addEventListener('click',() => {
    printDay(selectedDay);
  }
  );
});

function printDay(selectedDay){
  meditation=meditations[selectedDay];
  message=`<h2>Day ${meditation.day}</h2>`
  if( meditation.introduction != ''){
  message+=`<h3>Introduction</h3>${meditation.introduction}`;
  }
  if( meditation.task != ''){
  message+=`<h3>Task</h3>${meditation.task}`;
  }
  if( meditation.phrase != ''){
  message+=`<h3>Phrase</h3>${meditation.phrase}`;
  }
  if( meditation.meditation != ''){
  message+=`<h3>Meditation</h3>${meditation.meditation}`;
  }
  if( meditation.meditationURL != ''){
  message+=`<h3>Link to  meditation</h3>${meditation.meditationURL}`;
  }
  if( meditation.recap != ''){
  message+=`<h3>Recap for day ${meditation.day}</h3>${meditation.recap}`;
  }
  message+=`<p>Have a great day!</p>`
  if(leaderName!=''){
    message+=`${leaderName}`;
  }

  print(message,'output');
}

function buildAllDays(){
for(let i=0;i<meditations.length;i++){
    meditation=meditations[i];
    message+=`<h2>Day ${meditation.day}</h2>`
    if( meditation.introduction != ''){
    message+=`<h3>Introduction</h3>${meditation.introduction}`;
    }
    if( meditation.task != ''){
    message+=`<h3>Task</h3>${meditation.task}`;
    }
    if( meditation.phrase != ''){
    message+=`<h3>Phrase</h3>${meditation.phrase}`;
    }
    if( meditation.meditation != ''){
    message+=`<h3>Meditation</h3>${meditation.meditation}`;
    }
    if( meditation.meditationURL != ''){
    message+=`<h3>Link to  meditation</h3>${meditation.meditationURL}`;
    }
    if( meditation.recap != ''){
    message+=`<h3>Recap for day ${meditation.day}</h3>${meditation.recap}`;
    }
    message+=`<p>Have a great day!</p>`
    if(leaderName!=''){
      message+=`${leaderName}`;
    }
}
}
