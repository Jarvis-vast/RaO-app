// IMapsService.ts
export interface IMapsService {
  geocode(address: string): Promise<{ lat: number; lng: number }>;
  getDistance(origin: string, destination: string): Promise<{ distanceMeters: number; timeSeconds: number }>;
  getRouteEstimation(waypoints: string[]): Promise<any>;
}
