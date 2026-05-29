enum VehicleType { MOTORBIKE, CAR, TRUCK }
enum SpotType { MINI, COMPACT, LARGE }

abstract class Vehicle {
  constructor(public licensePlate: string, public type: VehicleType) {}
}
class Car extends Vehicle { constructor(lp: string) { super(lp, VehicleType.CAR); } }

abstract class ParkingSpot {
  constructor(public id: string, public type: SpotType, public isFree: boolean = true) {}
}
class CompactSpot extends ParkingSpot { constructor(id: string) { super(id, SpotType.COMPACT); } }

interface ISpotAssignmentStrategy {
  findSpot(floors: ParkingFloor[], vehicleType: VehicleType): ParkingSpot | null;
}

class NearestSpotStrategy implements ISpotAssignmentStrategy {
  public findSpot(floors: ParkingFloor[], vehicleType: VehicleType): ParkingSpot | null {
    const requiredType = this.getRequiredSpotType(vehicleType);
    for (const floor of floors) {
      const spot = floor.spots.get(requiredType)?.find(s => s.isFree);
      if (spot) return spot;
    }
    return null;
  }
  private getRequiredSpotType(vt: VehicleType): SpotType {
    if (vt === VehicleType.MOTORBIKE) return SpotType.MINI;
    if (vt === VehicleType.CAR) return SpotType.COMPACT;
    return SpotType.LARGE;
  }
}

class ParkingFloor {
  constructor(public floorNum: number, public spots: Map<SpotType, ParkingSpot[]>) {}
}

class ParkingLot {
  constructor(private floors: ParkingFloor[], private strategy: ISpotAssignmentStrategy) {}

  public parkVehicle(vehicle: Vehicle): string {
    const spot = this.strategy.findSpot(this.floors, vehicle.type);
    if (!spot) throw new Error("Parking Lot Full!");
    
    spot.isFree = false;
    return `TICKET_${spot.id}_${Date.now()}`;
  }

  public unparkVehicle(spot: ParkingSpot): number {
    spot.isFree = true;
    return spot.type === SpotType.COMPACT ? 20 : 40; 
  }
}