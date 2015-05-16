#pragma strict

var ammo: GameObject;
var fireRate: float;
private var moveSpeed: float = 500;
private var lastFire: float;
private var target: Vector3 = new Vector3(0,1,100);
var cameraSpeed: float = 150;

function Start () {

}

function FixedUpdate () {
	move();
	fire();
}

function move(){
	var dir : Vector3 = new Vector3(0,0,0);
	
	dir = new Vector3(0,0,0);
	if(Input.GetKey("w")){
		dir += Camera.main.transform.forward;  // forward
	}
	if(Input.GetKey("s")){
		dir += -Camera.main.transform.forward;  // back
	}
	if(Input.GetKey("a")){
		dir += -Camera.main.transform.right;  // left;
	}
	if(Input.GetKey("d")){
	 	dir += Camera.main.transform.right;  // right;
	}
  	dir.Normalize();
	GetComponent.<Rigidbody>().velocity.x = dir.x * moveSpeed * Time.deltaTime;
	GetComponent.<Rigidbody>().velocity.z = dir.z * moveSpeed * Time.deltaTime;
	
	//camera
	if(Input.GetAxis("Mouse X") < 0)
     transform.Rotate(Vector3.up * -cameraSpeed * Time.deltaTime);
 	if(Input.GetAxis("Mouse X") > 0)
     transform.Rotate(Vector3.up * cameraSpeed * Time.deltaTime);
}

function fire(){
	if(lastFire < Time.time - fireRate && Input.GetMouseButton(0)){
		var lastShot: GameObject;
		lastShot = Instantiate(ammo, transform.position, transform.rotation);
		lastShot.GetComponent.<Rigidbody>().position += transform.TransformDirection (Vector3.forward * 1);
		lastFire = Time.time;
	}
}
function OnCollisionEnter(other: Collision){
	if(other.gameObject.tag == "stageEnd"){
		Application.LoadLevel("victory");
	}
}