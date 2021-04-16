export interface Driver {
  code: string;
  dateOfBirth: string;
  driverId: string;
  familyName: string;
  givenName: string;
  nationality: string;
  permanentNumber: string;
  url: string;
}

export interface Player {
  userId: string;
  points: {
    raceTotals: [
      {
        points: number;
        round: number;
      }
    ];
    seasonTotal: number;
  };
}
