// src/data/customersByCountry.ts
export interface CountryData {
  id: string
  name: string
  customers: number
}

export const customersByCountry: CountryData[] = [
  { id: "USA", name: "United States", customers: 2379 },
  { id: "FRA", name: "France", customers: 589 },
  { id: "EGY", name: "Egypt", customers: 412 },
  { id: "DEU", name: "Germany", customers: 720 },
  { id: "UAE", name: "United Arab Emirates", customers: 330 },
]
