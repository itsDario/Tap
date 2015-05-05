#pragma strict

function Start () {
	var target: Vector3 = new Vector3(0,transform.position.y, 0);
	transform.LookAt(target);
}

function Update () {

}

function OnTriggerEnter(other: Collider){
	if(other.gameObject.tag == "Player"){
		Application.LoadLevel("Stage02");
	}
}