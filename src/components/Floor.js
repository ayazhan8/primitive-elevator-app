import { useElevatorContext } from '../context/elevators_context';
import HorizontalLine from './HorizontalLine';

export const Floor = ({ floor_number }) => {
  const { requestAvailableElevator } = useElevatorContext();

  const requestElevator = () => {
    requestAvailableElevator(floor_number);
  };

  return (
    <div className="floor">
      <div className="btn-and-elevator">
        <button className="elevator-btn" onClick={requestElevator}></button>
      </div>
      <HorizontalLine />
    </div>
  );
};
