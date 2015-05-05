#pragma strict

var scoreText: Text;
var score = 0;

function Start () {

}

function Update () {

}

function scoreUp(){
	score++;
	scoreText.text = "Kills: " + score;
	PlayerPrefs.SetInt("score",score);
}