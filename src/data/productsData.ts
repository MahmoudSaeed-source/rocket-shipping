export const productsData = Array.from({ length: 30 }, (_, index) => {
  const suppliers = [
    "sup-1", "sup-2", "sup-3", "sup-4", "sup-5",
    "sup-6", "sup-7", "sup-8", "sup-9", "sup-10",
  ];

  const categories = [
    "Electronics",
    "Home Appliances",
    "Smart Home",
    "Kitchen",
    "Cleaning",
    "Office",
    "Lighting",
  ];

  const productNames = [
    "Electric Spin Scrubber",
    "Smart LED Bulb",
    "Non-stick Frying Pan",
    "Wireless Keyboard",
    "Vacuum Cleaner Pro",
    "Smart Door Lock",
    "Air Fryer XL",
    "Bluetooth Headphones",
    "Coffee Maker Deluxe",
    "Robot Vacuum",
    "Portable Blender",
    "Toaster Pro",
    "Air Purifier",
    "Electric Kettle",
    "Smartwatch X",
    "LED Desk Lamp",
    "HD Monitor 27''",
    "Wireless Mouse",
    "Smart Plug Mini",
    "Cordless Iron",
    "Electric Oven",
    "Juicer Max",
    "Rice Cooker Pro",
    "Sound Bar 2.1",
    "Power Bank 20000mAh",
    "Smart Thermostat",
    "Ceiling Fan",
    "Dehumidifier",
    "Steam Cleaner",
    "Hand Mixer",
  ];

  const randomSupplier =
    suppliers[Math.floor(Math.random() * suppliers.length)];
  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];

  return {
    id: `prod-${index + 1}`,
    name: productNames[index],
    price: +(Math.random() * (150 - 20) + 20).toFixed(2),
    stock: Math.floor(Math.random() * 200) + 20,
    category: randomCategory,
    image: `https://picsum.photos/seed/product${index + 1}/300/200`,
    supplierId: randomSupplier,
  };
});
