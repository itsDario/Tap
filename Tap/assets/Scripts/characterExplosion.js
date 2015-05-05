#pragma strict

var expansionSpeed: float;
var explosionLife: float;
var spawnTime: float;

function Start () {
	spawnTime = Time.time;
}

function Update () {
	Growth();
}

function Growth(){
	if(Time.time > spawnTime + explosionLife/2){
		transform.localScale -= Vector3(expansionSpeed*2,expansionSpeed*2,expansionSpeed*2);
	}else{
		transform.localScale += Vector3(expansionSpeed,expansionSpeed,expansionSpeed);
	}
	if(Time.time > spawnTime + explosionLife){
		Destroy(gameObject);
	}
}