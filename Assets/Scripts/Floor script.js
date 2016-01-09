﻿#pragma strict

var onGround:	boolean;
var playerJump	: int;

function Update()
{
	if(Input.GetKey(KeyCode.Space) && onGround == true)
	{
	    print("jump pressed");
	    gameObject.GetComponent(Rigidbody).AddForce(Vector3(0,1,0) * playerJump);
	}	
}

function OnCollisionEnter (theCollision: Collision)
{
	if(theCollision.transform.tag == "floor")
	{
		onGround = true;
	}
	if(theCollision.transform.tag == "bounce")
	{
		gameObject.GetComponent(Rigidbody).AddForce(Vector3(0,1,0) * playerJump * 2);
	}
}
function OnCollisionExit (theCollision: Collision)
{
	onGround = false;
}