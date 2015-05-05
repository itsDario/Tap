#pragma strict

var player: GameObject;
var offset: Vector3;

function Start () {
	offset = transform.position - player.gameObject.GetComponent.<Rigidbody>().position;
}

function Update () {
	if(player != null){
		transform.position = player.gameObject.GetComponent.<Rigidbody>().position + offset;
		transform.rotation = player.gameObject.GetComponent.<Rigidbody>().rotation;
	}
}

