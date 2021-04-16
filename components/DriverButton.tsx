import React from 'react';
import { Driver } from '../customTypings/dbTypes';

type Props = {
  driver: Driver;
};

const DriverButton: React.FC<Props> = ({
  driver: { familyName, givenName, permanentNumber },
}) => {
  return (
    <div>
      <p>{permanentNumber}</p>
      <h3>
        {givenName} {familyName}
      </h3>
    </div>
  );
};

export default DriverButton;
