#pragma strict
import UnityEngine.UI;

var prizeText: Text;
var playerScore : int;
var winScreen: GameObject;

function Update(){
prizeText.text = playerScore.ToString("0");
}

function OnTriggerEnter(other : Collider){

			
			
	if(other.tag == "prize"){
	
	
//		print('Hey you hit me!");
//	playerScore + player score +1
	playerScore++;
	Destroy(other.gameObject);
	print(playerScore);
	}
}

function OnCollisionEnter(theCollison : Collision){
	if(theCollison.transform.tag == "win")
	{
	print("WINNER"); 
	winScreen.SetActive(true);
	}			
}