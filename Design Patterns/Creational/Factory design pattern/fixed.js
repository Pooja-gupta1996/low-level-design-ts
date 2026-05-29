"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["MOTORBIKE"] = 0] = "MOTORBIKE";
    VehicleType[VehicleType["CAR"] = 1] = "CAR";
    VehicleType[VehicleType["TRUCK"] = 2] = "TRUCK";
})(VehicleType || (VehicleType = {}));
var SpotType;
(function (SpotType) {
    SpotType[SpotType["MINI"] = 0] = "MINI";
    SpotType[SpotType["COMPACT"] = 1] = "COMPACT";
    SpotType[SpotType["LARGE"] = 2] = "LARGE";
})(SpotType || (SpotType = {}));
class Vehicle {
    licensePlate;
    type;
    constructor(licensePlate, type) {
        this.licensePlate = licensePlate;
        this.type = type;
    }
}
class Car extends Vehicle {
    constructor(lp) { super(lp, VehicleType.CAR); }
}
class ParkingSpot {
    id;
    type;
    isFree;
    constructor(id, type, isFree = true) {
        this.id = id;
        this.type = type;
        this.isFree = isFree;
    }
}
class CompactSpot extends ParkingSpot {
    constructor(id) { super(id, SpotType.COMPACT); }
}
class NearestSpotStrategy {
    findSpot(floors, vehicleType) {
        const requiredType = this.getRequiredSpotType(vehicleType);
        for (const floor of floors) {
            const spot = floor.spots.get(requiredType)?.find(s => s.isFree);
            if (spot)
                return spot;
        }
        return null;
    }
    getRequiredSpotType(vt) {
        if (vt === VehicleType.MOTORBIKE)
            return SpotType.MINI;
        if (vt === VehicleType.CAR)
            return SpotType.COMPACT;
        return SpotType.LARGE;
    }
}
class ParkingFloor {
    floorNum;
    spots;
    constructor(floorNum, spots) {
        this.floorNum = floorNum;
        this.spots = spots;
    }
}
class ParkingLot {
    floors;
    strategy;
    constructor(floors, strategy) {
        this.floors = floors;
        this.strategy = strategy;
    }
    parkVehicle(vehicle) {
        const spot = this.strategy.findSpot(this.floors, vehicle.type);
        if (!spot)
            throw new Error("Parking Lot Full!");
        spot.isFree = false;
        return `TICKET_${spot.id}_${Date.now()}`;
    }
    unparkVehicle(spot) {
        spot.isFree = true;
        return spot.type === SpotType.COMPACT ? 20 : 40;
    }
}
