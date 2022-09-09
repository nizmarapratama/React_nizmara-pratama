class vehicle {
    constructor() {
        this.wheel = 0;
        this.speed = 0;
    }
}

class car extends vehicle {
    move(distance) {
        for(let step = 0; step < distance; step++) {
            this.increaseSpeed(10);
        }
    }

    increaseSpeed(newSpeed) {
        this.speed += newSpeed;
    }

    dispaly(speedLevel) {
        console.log("mobil" + speedLevel + " : " + this.speed + "km/jam");
    }
}

function main() { 
    let fastCar = new car();
    fastCar.move(3);
    fastCar.dispaly("cepat");

    let slowCar = new car();
    slowCar.move(1);
    slowCar.dispaly("lamban");
}

main();