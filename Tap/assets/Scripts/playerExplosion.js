#pragma strict

function Start () {
	death();
}

function Update () {

}

function death(){
	yield WaitForSeconds(2);
	Application.LoadLevel("GameOver");
}