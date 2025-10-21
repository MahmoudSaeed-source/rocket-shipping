import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const shipments = [
  {
    trackingId: "RS001",
    customer: "John Smith",
    destination: "New York, USA",
    status: "Delivered",
    price: "$45.00",
  },
  {
    trackingId: "RS002",
    customer: "Emily Johnson",
    destination: "Paris, France",
    status: "In Transit",
    price: "$62.00",
  },
  {
    trackingId: "RS003",
    customer: "Michael Brown",
    destination: "Berlin, Germany",
    status: "Pending",
    price: "$38.00",
  },
  {
    trackingId: "RS004",
    customer: "Sarah Davis",
    destination: "Cairo, Egypt",
    status: "Canceled",
    price: "$40.00",
  },
  {
    trackingId: "RS005",
    customer: "David Wilson",
    destination: "Dubai, UAE",
    status: "Delivered",
    price: "$55.00",
  },
];

export default function RecentShipments() {
  return (
    <div className="p-6 bg-light-background text-light-text dark:text-dark-text dark:bg-dark-background rounded-2xl shadow-xl border-1 border-gray-500">
      <h2 className="text-lg font-semibold bg-light-background text-light-text dark:text-dark-text dark:bg-dark-background mb-4">
        📦 Recent Shipments
      </h2>
      <Table>
        <TableCaption className="bg-light-background text-light-text dark:text-dark-text dark:bg-dark-background">
          List of your most recent deliveries.
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-light-background text-light-text dark:text-dark-text dark:bg-dark-background">
            <TableHead className="bg-light-background text-light-text dark:text-dark-text dark:bg-dark-background font-semibold w-[120px]">
              Tracking ID
            </TableHead>
            <TableHead className="bg-light-background text-light-text dark:text-dark-text dark:bg-dark-background font-semibold">
              Customer
            </TableHead>
            <TableHead className="bg-light-background text-light-text dark:text-dark-text dark:bg-dark-background font-semibold">
              Destination
            </TableHead>
            <TableHead className="bg-light-background text-light-text dark:text-dark-text dark:bg-dark-background font-semibold">
              Status
            </TableHead>
            <TableHead className="text-right bg-light-background text-light-text dark:text-dark-text dark:bg-dark-background font-semibold">
              Price
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {shipments.map((shipment) => (
            <TableRow
              key={shipment.trackingId}
              className="hover:bg-blue-500 transition-colors"
            >
              <TableCell className="font-medium bg-light-background text-light-text dark:text-dark-text dark:bg-dark-background">
                {shipment.trackingId}
              </TableCell>
              <TableCell>{shipment.customer}</TableCell>
              <TableCell>{shipment.destination}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded-full
                    ${
                      shipment.status === "Delivered"
                        ? "text-green-600 bg-green-50"
                        : shipment.status === "In Transit"
                        ? "text-blue-600 bg-blue-50"
                        : shipment.status === "Pending"
                        ? "text-yellow-600 bg-yellow-50"
                        : "text-red-600 bg-red-50"
                    }`}
                >
                  {shipment.status}
                </span>
              </TableCell>
              <TableCell className="text-right font-medium">
                {shipment.price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="bg-light-background text-light-text dark:text-dark-text dark:bg-dark-background hover:bg-blue-500 transition-colors">
          <TableRow>
            <TableCell
              className="bg-light-background text-light-text dark:text-dark-text dark:bg-dark-background"
              colSpan={4}
            >
              Total
            </TableCell>
            <TableCell className="bg-light-background text-light-text dark:text-dark-text dark:bg-dark-background text-right font-semibold">
              $240.00
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
