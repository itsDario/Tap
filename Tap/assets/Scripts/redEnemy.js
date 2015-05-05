#pragma strict

var moveSpeed: float;
private var direction: String;

function Start () {
	randomRotate();
}

function Update () {
	GetComponent.<Rigidbody>().velocity = transform.TransformDirection (Vector3.forward * moveSpeed);
}

function OnCollisionStay(other: Collision){
	if(other.gameObject.tag == "wall"){
		var yRotation = Random.Range(1,4) * 90;
		transform.eulerAngles += Vector3(0, yRotation, 0);
	}
}

function randomRotate(){
	while(true){
		yield WaitForSeconds(3);
		var yRotation = Random.Range(1,4) * 90;
		transform.eulerAngles += Vector3(0, yRotation, 0);
	}
}