export interface Ride {
  id: number;
  origin_station_code: number;
  station_path: number[];
  destination_station_code: number;
  date: string;
  map_url: string;
  state: string;
  city: string;
  closest_station: number;
  distance: number;
  past: boolean;
}

export interface User {
  station_code: number;
  name: string;
  url: string;
}
