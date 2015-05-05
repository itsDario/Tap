#pragma strict
var moveSpeed: float;
var ammoLife: float;
var explosion: GameObject;

function Start () {
	GetComponent.<Rigidbody>().velocity = transform.TransformDirection (Vector3.forward * moveSpeed);
	selfDistruct();
}

function Update () {
	
}

function OnCollisionEnter(other: Collision){
	if(other.gameObject.tag != "bullet"){
	Instantiate(explosion, transform.position, Quaternion.identity);
	Destroy(gameObject);
	}
}

function OnTriggerEnter(other: Collider){
	if(other.gameObject.tag != "bullet"){
	Instantiate(explosion, transform.position, Quaternion.identity);
	Destroy(gameObject);
	}
}

function selfDistruct(){
	yield WaitForSeconds(ammoLife);
	Instantiate(explosion, transform.position, Quaternion.identity);
	Destroy(gameObject);
}