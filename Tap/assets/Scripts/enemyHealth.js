#pragma strict

var health:int;
var door: GameObject;

private var score : Score;

private var enemyBody: Component[];

function Start () {
	enemyBody = GetComponentsInChildren (Renderer);
	
	var gm : GameObject = GameObject.FindWithTag("GM");
	score = gm.GetComponent("Score");
}

function Update () {

}

function OnTriggerEnter(other: Collider){
	if(other.gameObject.tag == "bullet"){
		health--;
		blink();
		if(health <= 0){
			score.scoreUp();
			Instantiate(door, transform.position, Quaternion.identity);
			Destroy(gameObject);
		}
	}
}

function blink(){
	enemyBody[0].GetComponent.<Renderer>().material.color = Color.red;
	yield WaitForSeconds(0.1);
	enemyBody[0].GetComponent.<Renderer>().material.color = Color.gray;
}