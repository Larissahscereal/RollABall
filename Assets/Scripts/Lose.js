#pragma strict
import UnityEngine.UI;

var timer: float;
var timerText: Text;
var loseScreen: GameObject;

function Update () {
	if(timer  >= 0)  { //IF THIS GREATER THAN OR EQUAL TO 0 --- DO THE FOLLOWING
	  timer -= Time.deltaTime;
	  }
	
	 if(timer <= 0)//IF THIS LESS THAN OR EQUAL TO 0
	 {
	 		loseScreen.SetActive(true);
	 		}
	 timerText.text = timer.ToString("0");
}