#pragma strict
private var target: GameObject;
private var lastFire: float;
var ammo: GameObject;
var fireRate: float;

function Start () {
	target =  GameObject.FindGameObjectWithTag("Player");
}

function Update () {
	fire();
}

function fire(){
	if(target != null){
		var distance = Vector3.Distance(transform.position, target.transform.position);
		if(distance < 15){
			transform.LookAt(target.transform);
			if(lastFire < Time.time - fireRate){
				var lastShot: GameObject;
				lastShot = Instantiate(ammo, transform.position, transform.rotation);
				lastShot.GetComponent.<Rigidbody>().position += transform.TransformDirection (Vector3.forward * 1);
				lastFire = Time.time;
			}
		}
	}
}