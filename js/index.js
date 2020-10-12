var o = ['+', '-', '*', '/'];
var correct;
var right = 0;
var total_q=0;
var score=0;


function vibration() {
  navigator.vibrate(500);
}

function quit() {
  var x = confirm('Are you sure?');
  if (x == true) {
    score=(right/total_q).toFixed(2);
    document.write('<center><h1 style="margin-top:60%;">Thank you for playing</h1><p style="color:#1975c5fa;font-size:120%;" id="score"></p></center>');
    document.getElementById('score').innerHTML="Your score is "+score;
  } else {
    alert('Keep Plying');
  }
}

function next() {
  //          var max=7;
  //          var min=1;
  //         var  che=Math.floor(Math.random() * (max - min) + min);
  //          alert(che);
  var m = Math.floor(100 * Math.random());
  var n = Math.floor(100 * Math.random());
  var i = Math.floor(4 * Math.random());
  var op = o[i];
  total_q++;
  document.getElementById('ques').innerHTML = "What is " + m + op + n + " ?";
  if (op == '+') {
    correct = m + n;
  } else if (op == '-') {
    correct = m - n;
  } else if (op == '*') {
    correct = m * n;
  } else {
    correct = (m / n).toFixed(2);
  }

}

function check() {
  var a = document.getElementById('ans').value;
  if (Number(a) == correct) {
    document.querySelector('span').innerHTML = "&#128540;";
    document.querySelector('#mark').innerHTML = "Yeah your answer is correct";
    document.querySelector('#mark').style.color = 'blue';
    right++;
  } else {
    document.querySelector('span').innerHTML = "&#128524;";
    document.querySelector('#mark').innerHTML = "Try again,Your answer is incorrect!";
    document.querySelector('#mark').style.color = 'red';
    vibration();

  }

  document.getElementById('para').innerHTML = "Correct answer is " + correct;
  document.getElementById('score').innerHTML = "Score :" + score;

}
