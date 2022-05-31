import { useEffect, useState } from 'react';
import '../App.css';

export const Elevator = ({ id, currentFloor }) => {
  const [isDoorOpen, setIsDoorOpen] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsDoorOpen(true);
    }, 500);

    const timer2 = setTimeout(() => {
      const elevator = document.getElementById(id);

      const floorHeight = parseInt(
        getComputedStyle(document.querySelector('.floor')).height,
        10
      );

      elevator.style.top = (currentFloor - 1) * floorHeight + 'px';
    }, 1500);

    const timer3 = setTimeout(() => {
      setIsDoorOpen(false);
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [currentFloor, id]);

  return (
    <div className={`elevator`} id={id}>
      <div
        className={`door ${isDoorOpen ? '' : 'moving-left'}`}
        id="leftDoor"
      ></div>
      <div
        className={`door ${isDoorOpen ? '' : 'moving-right'}`}
        id="rightDoor"
      ></div>
    </div>
  );
};
