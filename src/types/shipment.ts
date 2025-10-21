export type ShipmentStatus = "Pending" | "In Transit" | "Delivered" | "Canceled";
export interface Shipment {
  id: string;
  customerName: string;
  city: string;
  weight: number; 
  status: ShipmentStatus;
  price: number;
  date: string; 
  image: string; 

}
