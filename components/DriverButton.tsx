import React from 'react';
import { Driver } from '../customTypings/dbTypes';

type Props = {
  driver: Driver;
};

const DriverButton: React.FC<Props> = ({
  driver: { familyName, givenName, permanentNumber },
}) => {
  const onDriverClick = () => {
    // eslint-disable-next-line no-console
    console.log('driver click');
  };
  return (
    <button className="driverButton" onClick={onDriverClick}>
      <h3>
        <span className="number">{permanentNumber}</span>
        {givenName} {familyName}
      </h3>
      <style jsx>{`
        .driverButton {
          cursor: pointer;
          display: flex;
          justify-content: center;
          width: 100%;
          height: 50px;
          border: 1px solid black;
          align-items: center;
          margin: 15px auto;
          max-width: 300px;
        }

        .number {
          margin-right: 10px;
        }
      `}</style>
    </button>
  );
};

export default DriverButton;
