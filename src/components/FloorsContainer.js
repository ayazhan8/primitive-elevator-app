import '../App.css';
import { floors } from '../data/floors';
import { Floor } from './Floor';

export const FloorsContainer = ({ children }) => {
  return (
    <>
      {floors.map((floor, index) => (
        <Floor key={index} floor_number={floor.floorNumber} />
      ))}
    </>
  );
};
