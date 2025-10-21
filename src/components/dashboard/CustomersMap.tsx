"use client";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  { name: "USA", coordinates: [-99, 38] },
  { name: "France", coordinates: [2, 46] },
  { name: "Germany", coordinates: [10, 51] },
  { name: "Egypt", coordinates: [30, 26] },
  { name: "UAE", coordinates: [54, 24] },
];

export default function CustomersMap() {
  return (
    <div className="bg-light-background  rounded-2xl p-4 w-full h-[400px]">
      <h3 className="text-sm text-light-text dark:text-dark-text">
        Customers Demographic
      </h3>
      <h4 className="text-[12px] dark:text-gray-400 text-light-text">
        Number of customer based on country
      </h4>

      <ComposableMap
        projectionConfig={{
          scale: 120,
        }}
        width={500}
        height={400}
        className="shadow-md p-2"
      >
        {/* رسم الدول */}
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#c4d0e5", // <-- لون الدول (رمادي داكن يناسب الوضع الليلي)
                    stroke: "#334155", // حدود أفتح شوية
                    strokeWidth: 0.5,
                    outline: "none",
                  },
                  hover: {
                    fill: "#3b82f6", // أزرق عند المرور
                    stroke: "#1d4ed8",
                    strokeWidth: 1,
                    outline: "none",
                  },
                  pressed: {
                    fill: "#2563eb",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>

        {/* النقاط (Markers) */}
        {markers.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={4} fill="#ef4444" stroke="#fff" strokeWidth={1} />
            <text
              textAnchor="middle"
              y={-10}
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: 10,
                fill: "#f1f5f9",
              }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>

    </div>
  );
}
