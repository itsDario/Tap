#pragma strict

function Start () {

}

function Update () {
	if(Input.GetKey("p")){
		Application.LoadLevel("Stage01");
	}
}