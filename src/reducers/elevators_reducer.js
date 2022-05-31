import { MOVE_ELEVATOR, REQUEST_ELEVATOR } from '../actions';

const elevators_reducer = (state, action) => {
  const { elevators } = state;
  const { targetFloor } = action.payload;

  if (action.type === MOVE_ELEVATOR) {
    const { elevatorId, targetFloor } = action.payload;

    // Update only the currentFloor of the chosen elevator
    const updatedElevators = elevators.map((elevator) => {
      if (elevator.id === elevatorId) {
        return { ...elevator, currentFloor: targetFloor };
      }
      return elevator;
    });
    return { ...state, elevators: updatedElevators };
  }

  if (action.type === REQUEST_ELEVATOR) {
    // Find the nearest elevator and send it to target floor
    const elevatorsToCompare = [];

    elevators.forEach((elevator) => {
      let distanceToTargetFloor = Math.abs(targetFloor - elevator.currentFloor);
      let id = elevator.id;
      elevatorsToCompare.push({ id, distanceToTargetFloor });
    });

    elevatorsToCompare.sort(
      (a, b) => a.distanceToTargetFloor - b.distanceToTargetFloor
    );
    const nearestElevator = elevatorsToCompare[0];

    const updatedElevators = elevators.map((elevator) => {
      if (elevator.id === nearestElevator.id) {
        return { ...elevator, currentFloor: targetFloor };
      }
      return elevator;
    });

    return { ...state, elevators: updatedElevators };
  }

  return state;
  //   throw new Error(`"${action.type}" - No such action type`);
};

export default elevators_reducer;
