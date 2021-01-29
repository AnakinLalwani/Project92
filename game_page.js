player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");

number1;
number2;

get_answer = 0;
sign = "";

questionturn = "player1";
answerturn = "player2";

var player1_score = 0;
var player2_score = 0;

document.getElementById("player1display").innerHTML = player1_name + ": ";
document.getElementById("player2display").innerHTML = player2_name + ": ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("playerquestion").innerHTML = "Question Turn : "+ player1_name;
document.getElementById("playeranswer").innerHTML = "Answer Turn : "+ player2_name;
function send() {
    sign = document.getElementById("sign").value;
    number1= document.getElementById("number1").value;
    number2= document.getElementById("number2").value;
    question= number1 + sign + number2
    if (sign == "+") {
        get_answer = Number(number1)+Number(number2);
    }
    if (sign == "-") {
        get_answer = Number(number1)-Number(number2);
    }
    if (sign == "*") {
        get_answer = Number(number1)*Number(number2);
    }
    if (sign == "/") {
        get_answer = Number(number1)/Number(number2);
    }
    console.log(get_answer)
    console.log("question = " + question);

    question = "<h4 id= 'question'> Q. "+ question + "</h4>";
    answerinput = "<br>Answer: <input type='text' id='answerinput' placeholder='Your Answer'></input>"
    checkbutton = "<br><br><button id='checkbutton' onclick = 'check(get_answer, player1_score, player2_score)' class='btn btn-info'>Check</button>"
    row = question+ answerinput+ checkbutton;
    document.getElementById("output").innerHTML= row;
    document.getElementById("number1").value= "";
    document.getElementById("number2").value= "";
    document.getElementById("sign").value= "";
} 
    player1_score = 0;
    player2_score = 0;
function check(get_answer, player1_score, player2_score) {
    console.log(player1_score);
    console.log(player2_score);
    document.getElementById("get_answer").innerHTML = get_answer;
    user_answer = document.getElementById("answerinput").value;
    console.log("answer given by user = " + user_answer);
    if (user_answer == get_answer) {
        if (answerturn == "player1") {
            player1_score++
            console.log(player1_score);
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            player2_score++;
            console.log(player2_score);
            document.getElementById("player2_score").innerHTML = player2_score;  
        }
    }
    if (questionturn == "player1") {
        questionturn = "player2";
        document.getElementById("playerquestion").innerHTML = "Question turn = " + player2_name;
    } else {
        questionturn = "player1";
        document.getElementById("playerquestion").innerHTML = "Question turn = " + player1_name;
    }
    if (answerturn == "player1") {
        answerturn = "player2";
        document.getElementById("playeranswer").innerHTML = "Answer turn = " + player2_name;
    } else {
        answerturn = "player1";
        document.getElementById("playeranswer").innerHTML = "Answer turn = " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}