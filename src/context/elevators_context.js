import React, { useContext, useEffect, useReducer } from 'react';
import { MOVE_ELEVATOR, REQUEST_ELEVATOR } from '../actions';
import { elevators } from '../data/elevators';
import elevators_reducer from '../reducers/elevators_reducer';

const initialState = {
  elevators: elevators,
};

export const ElevatorContext = React.createContext();

export const ElevatorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(elevators_reducer, initialState);

  const moveElevator = (elevatorId, targetFloor) => {
    dispatch({ type: MOVE_ELEVATOR, payload: { elevatorId, targetFloor } });
  };

  const requestAvailableElevator = (targetFloor) => {
    dispatch({ type: REQUEST_ELEVATOR, payload: { targetFloor } });
  };

  useEffect(() => {
    elevators.forEach((elevator, _) => {
      moveElevator(elevator.id, 1);
    });
  }, []);

  return (
    <ElevatorContext.Provider
      value={{ ...state, moveElevator, requestAvailableElevator }}
    >
      {children}
    </ElevatorContext.Provider>
  );
};

export const useElevatorContext = () => {
  return useContext(ElevatorContext);
};
