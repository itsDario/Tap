#pragma strict

var player: GameObject;
private var myHealth: float;
private var playerHealth: float;
private var agent: NavMeshAgent;


function Start () {
	agent = GetComponent(NavMeshAgent);
}

function FixedUpdate () {
	if(myHealth > 0 && playerHealth > 0){
		moveToPlayer();
	}
	
	agent.SetDestination(player.transform.position);
}

function moveToPlayer(){
	agent.SetDestination(player.transform.position);
}
/*
public class EnemyMovement : MonoBehaviour
    {
        Transform player;               // Reference to the player's position.
        PlayerHealth playerHealth;      // Reference to the player's health.
        EnemyHealth enemyHealth;        // Reference to this enemy's health.
        NavMeshAgent nav;               // Reference to the nav mesh agent.


        void Awake ()
        {
            // Set up the references.
            player = GameObject.FindGameObjectWithTag ("Player").transform;
            playerHealth = player.GetComponent <PlayerHealth> ();
            enemyHealth = GetComponent <EnemyHealth> ();
            nav = GetComponent <NavMeshAgent> ();
        }


        void Update ()
        {
            // If the enemy and the player have health left...
            if(enemyHealth.currentHealth > 0 && playerHealth.currentHealth > 0)
            {
                // ... set the destination of the nav mesh agent to the player.
                nav.SetDestination (player.position);
            }
            // Otherwise...
            else
            {
                // ... disable the nav mesh agent.
                nav.enabled = false;
            }
        }
    }
*/