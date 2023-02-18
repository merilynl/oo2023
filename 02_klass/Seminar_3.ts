class Player{
	constructor(private x:number, private y:number, public health:number, public attackPower:number, private direction:string){
		
	}
	getLocation():string{
	return this.x + ", " + this.y + ", " + this.direction;
	}
	
	forward():void{
		if(this.direction=="east"){this.x++;}
        else if(this.direction=="southeast"){this.x++, this.y--;}
		else if(this.direction=="south"){this.y--;}
        else if(this.direction=="southwest"){this.x--, this.y--;}
		else if(this.direction=="west"){this.x--;}
        else if(this.direction=="northwest"){this.x--, this.y++;}
		else if(this.direction=="north"){this.y++;}
        else if(this.direction=="northeast"){this.x++, this.y++;}
	}
	turnRight():void{
		if(this.direction=="east"){this.direction="southeast";}
        else if(this.direction=="southeast"){this.direction="south";}
		else if(this.direction=="south"){this.direction="southwest";} 
        else if(this.direction=="southwest"){this.direction="west";} 
		else if(this.direction=="west"){this.direction="northwest";}
        else if(this.direction=="northwest"){this.direction="north";}
		else if(this.direction=="north"){this.direction="northeast";}
        else if(this.direction=="northeast"){this.direction="east";}
	}
    turnLeft():void{
		if(this.direction=="east"){this.direction="northeast";}
        else if(this.direction=="northeast"){this.direction="north";}
		else if(this.direction=="north"){this.direction="northwest";} 
        else if(this.direction=="northwest"){this.direction="west";} 
		else if(this.direction=="west"){this.direction="southwest";}
        else if(this.direction=="southwest"){this.direction="south";}
		else if(this.direction=="south"){this.direction="southeast";}
        else if(this.direction=="southeast"){this.direction="east";}
	}
}

class Enemy{
    enemyHealth = 40;
    enemyAttackPower = 30;
    enemyAttack(playerName:string):void{
        if(playerName == "player1"){
            console.log("The enemy has damaged Player 1 for " + this.enemyAttackPower + " damage!")
            player1.health = player1.health - this.enemyAttackPower;
            console.log("Player 1 has " + player1.health + " Hit Points left!")
        }
        else if(playerName == "player2"){
            console.log("The enemy has damaged Player 2 for " + this.enemyAttackPower + " damage!")
            player2.health = player2.health - this.enemyAttackPower;
            console.log("Player 2 has " + player2.health + " Hit Points left!")
        }
    }
}

function player1Attack():void{
    console.log("You attack the enemy for " + player1.attackPower + " points!")
    enemy1.enemyHealth = enemy1.enemyHealth - player1.attackPower;
    console.log("The enemy has " + enemy1.enemyHealth + " points left!")
}

function player2Attack():void{
    console.log("You attack the enemy for " + player2.attackPower + " points!")
    enemy1.enemyHealth = enemy1.enemyHealth - player2.attackPower;
    console.log("The enemy has " + enemy1.enemyHealth + " points left!")
}

function randomInt(min:number, max:number):number{
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }


function Game(){
    /* if(player1.health <= 0 || player2.health <= 0 || enemy1.enemyHealth <= 0){
        return;
    } */
    let klav = require("readline-sync")
    if(player1.health > 0 && player2.health > 0 && enemy1.enemyHealth > 0){
    
    let GameInput1:string = klav.question("What will player 1 do? attack(A), turn right(R), turn left(L) or move forward(F)?");
    if (GameInput1 == "A"){
        player1Attack()
    }
    else if (GameInput1 == "R"){
        player1.turnRight()
    }
    else if (GameInput1 == "L"){
        player1.turnLeft()
    }
    else if (GameInput1 == "F"){
        player1.forward()
    }
    console.log(player1.getLocation());
    }
    if(player1.health > 0 && player2.health > 0 && enemy1.enemyHealth > 0){

    let GameInput2:string = klav.question("What will player 2 do? attack(A), turn right(R), turn left(L) or move forward(F)?");
    if (GameInput2 == "A"){
        player2Attack()
    }
    else if (GameInput2 == "R"){
        player2.turnRight()
    }
    else if (GameInput2 == "L"){
        player2.turnLeft()
    }
    else if (GameInput2 == "F"){
        player2.forward()
    }
    console.log(player2.getLocation());

    if(player1.health > 0 && player2.health > 0){
    let playerNumber = randomInt(1, 2);
    enemy1.enemyAttack("player" + playerNumber);
    }
    }
}

let player1:Player = new Player(2, 0, 100, 20, "east");
let player2:Player = new Player(-2, 0, 150, 15, "east");
let enemy1 = new Enemy
while(player1.health > 0 && player2.health > 0 && enemy1.enemyHealth > 0){
    /* if(enemy1.enemyHealth <= 0 || player1.health <= 0 || player2.health <= 0){
        break;
    } */
    Game();
}
if(player1.health<=0 || player2.health<=0){
    console.log("Game Over!")
}
else if(enemy1.enemyHealth<=0){
    console.log("You win!")
}
