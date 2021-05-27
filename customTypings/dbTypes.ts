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

export interface Race {
  Circuit: {
    Location: {
      country: string;
      lat: string;
      long: string;
      locality: string;
    };
    cirduitId: string;
    circuitName: string;
    url: string;
  };
  date: string;
  raceName: string;
  round: string;
  season: string;
  time: string;
  url: string;
}
