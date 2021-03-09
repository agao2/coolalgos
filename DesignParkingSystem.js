/*
Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.

Implement the ParkingSystem class:

ParkingSystem(int big, int medium, int small) Initializes object of the ParkingSystem class. The number of slots for each parking space are given as part of the constructor.
bool addCar(int carType) Checks whether there is a parking space of carType for the car that wants to get into the parking lot. 
carType can be of three kinds: big, medium, or small, which are represented by 1, 2, and 3 respectively. 
A car can only park in a parking space of its carType. If there is no space available, return false, else park the car in that size space and return true.

*/

class ParkingSystem {

	constructor(big, medium, small) {
		this.big = big;
		this.medium = medium;
		this.small = small;
	}

	addCar(carType) {
		let spaces = this.getSpaces(carType);
		console.log(carType, spaces);
		if (spaces == 0) {
			return false;
		} else {
			this.setSpaces(carType, --spaces);
			return true;
		}
	}

	getSpaces(carType) {
		switch (carType) {
			case 1:
				return this.big;
			case 2:
				return this.medium;
			case 3:
				return this.small;
		}
	}

	setSpaces(carType, spaces) {
		switch (carType) {
			case 1:
				this.big = spaces;
				break;
			case 2:
				this.medium = spaces;
				break;
			case 3:
				this.small = spaces;
				break;
		}
	}
}

// const parkingSystem = new ParkingSystem(1, 1, 0);
// console.log(parkingSystem.addCar(1))
// console.log(parkingSystem.addCar(2))
// console.log(parkingSystem.addCar(3))
// console.log(parkingSystem.addCar(1))