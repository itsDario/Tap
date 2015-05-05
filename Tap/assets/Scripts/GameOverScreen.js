#pragma strict

var scoreText: Text;

function Start () {
	scoreText.text = "Score = " + PlayerPrefs.GetInt("score");;
	goBackToStart();
}

function Update () {

}

function goBackToStart(){
	yield WaitForSeconds(3);
	Application.LoadLevel(0);
}