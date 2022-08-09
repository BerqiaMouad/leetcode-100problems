// https://leetcode.com/problems/design-parking-system/

class ParkingSystem {
    my_types: number[] = [0, 0, 0];

    constructor(big: number, medium: number, small: number) {
        this.my_types[0] = big;
        this.my_types[1] = medium;
        this.my_types[2] = small;
    }

    addCar(carType: number): boolean {
        if (this.my_types[carType - 1] === 0)
            return false;
        else this.my_types[carType - 1]--;
        return true;
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */