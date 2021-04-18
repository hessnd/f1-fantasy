import React from 'react';
import { Driver } from '../customTypings/dbTypes';

type Props = {
  driver: Driver;
};

const DriverButton: React.FC<Props> = ({
  driver: { familyName, givenName, permanentNumber },
}) => {
  return (
    <button className="driverButton">
      <p>{permanentNumber}</p>
      <h3>
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
          max-width: 400px;
        }
      `}</style>
    </button>
  );
};

export default DriverButton;
