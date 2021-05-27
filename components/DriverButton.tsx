import React from 'react';
import { Button } from 'react-bootstrap';
import { Driver } from '../customTypings/dbTypes';

type Props = {
  driver: Driver;
  isAvailable?: boolean;
};

const DriverButton: React.FC<Props> = ({
  driver: { familyName, givenName, permanentNumber },
  isAvailable = true,
}) => {
  const onDriverClick = () => {
    // eslint-disable-next-line no-console
    console.log('driver click ', familyName);
  };
  return (
    <Button
      className="m-2 w-75"
      variant="outline-dark"
      size="lg"
      onClick={onDriverClick}
      disabled={!isAvailable}
    >
      <span className="number">{permanentNumber}</span>
      {givenName} {familyName}
      <style jsx>{`
        .number {
          margin-right: 10px;
        }
      `}</style>
    </Button>
  );
};

export default DriverButton;
