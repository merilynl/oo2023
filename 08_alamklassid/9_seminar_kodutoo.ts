class Player{
    name: string;
    speed: number = 10;
    health: number = 100;
    coins: number = 0;

    constructor(n: string) { 
        this.name = n;
    }

    calculateHealth(damage: number):number {
        this.health -= damage;
        console.log("Player took " + damage + " damage");
        console.log("Current health: " + this.health);
        return this.health;
    }

    speedUp():number {
        this.speed += 1;
        console.log("Current speed: " + this.speed);
        return this.speed;
    }

    collectCoin(coins: number):number {
        this.coins += coins;
        console.log("Current coins: " + this.coins);
        return this.coins;
    }
}

class Tank extends Player {
    speed:number = 8;
    health:number = 200;
}

class Hunter extends Player {
    speed:number = 12;
    health:number = 80;
    petHealth:number = 140;
    petSpeed:number = 10;

    calculatePetHealth(damage: number):number {
        this.petHealth -= damage;
        console.log("Pet took " + damage + " damage");
        console.log("Current health: " + this.petHealth);
        return this.petHealth;
    }
}

let defPlayer = new Player("Player1");

defPlayer.speedUp();
defPlayer.speedUp();
defPlayer.calculateHealth(10);
defPlayer.collectCoin(40);

let hunterPlayer = new Hunter("Player2");

hunterPlayer.speedUp();
hunterPlayer.calculateHealth(10);
hunterPlayer.calculatePetHealth(40);
hunterPlayer.collectCoin(10);



