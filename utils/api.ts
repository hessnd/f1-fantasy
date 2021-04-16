export const fetchCurrentSeason = async (): Promise<any> => {
  const res = await fetch('https://ergast.com/api/f1/current.json');
  const json = await res.json();
  return json;
};

export const fetchDrivers = async (): Promise<any> => {
  const res = await fetch(`https://ergast.com/api/f1/current/drivers.json`);
  const json = await res.json();
  return json;
};
