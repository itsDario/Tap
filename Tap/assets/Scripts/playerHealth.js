#pragma strict
import UnityEngine.UI;

var health:int;
var lastHit: float = -2;
var explosion: GameObject;

var healthSlider: Slider;
//var damageImage: Image;

private var playerBody: GameObject;

function Start () {
	playerBody = GameObject.FindWithTag ("playerBody");
	PlayerPrefs.SetInt("score",0);
}

function Update () {

}

function OnTriggerEnter(other: Collider){
	if(other.gameObject.tag == "enemy" || other.gameObject.tag == "bullet"){
		if(lastHit < Time.time - 0.5){
			health--;
//			Debug.Log(health);
			blink();
			lastHit = Time.time;
		}
	}
	if(other.gameObject.tag == "death"){
		health = 0;
		blink();
	}
	if(other.gameObject.tag == "stageEnd"){
		Application.LoadLevel("victory");
	}
}

function blink(){
	healthSlider.value = health;
	playerBody.gameObject.GetComponent.<Renderer>().material.color = Color.red;
	yield WaitForSeconds(0.1);
	playerBody.gameObject.GetComponent.<Renderer>().material.color = Color.white;
	
	if(health <= 0){
		Instantiate(explosion, transform.position, Quaternion.identity);
		Destroy(gameObject);
	}
}