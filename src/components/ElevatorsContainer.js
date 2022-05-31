import '../App.css';
import { useElevatorContext } from '../context/elevators_context';
import { Elevator } from './Elevator';

export const ElevatorsContainer = ({ children }) => {
  const { elevators } = useElevatorContext();
  return (
    <div className="elevators-container">
      {elevators.map((elevator, index) => (
        <Elevator
          key={index}
          id={elevator.id}
          currentFloor={elevator.currentFloor}
        />
      ))}
    </div>
  );
};
