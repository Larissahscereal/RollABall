#pragma strict

var OnGround: boolean;
var playerJump: float;

function Update () 
{
	if(Input.GetKey(KeyCode.Space) && OnGround == true)
	{
		print("jump pressed");
		gameObject.GetComponent(Rigidbody).AddForce(Vector3(0,1,0) * playerJump);
	}
}

function OnCollisionEnter (theCollision: Collision)
{
	if(theCollision.transform.tag == "floor")
	{
		OnGround = true;
	}
	if(theCollision.transform.tag == "bounce")
	{
		gameObject.GetComponent(Rigidbody).AddForce(Vector3(0,1,0) * playerJump * 2);
	}
}

function OnCollisionExit (theCollision: Collision)
{
	OnGround = false;
}