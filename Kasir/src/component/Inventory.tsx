import * as React from "react";

interface InventoryProps {}

interface InventoryState {}

class Inventory extends React.Component<InventoryProps, InventoryState> {
  state = {};
  render() {
    return (
      <div className="bg-yellow-100 dark:bg-gray-800 flex flex-col justify-center items-center space-y-4 w-3/4 h-screen absolute top-0 right-0">
        <h1 className="dark:text-white">This Is InventoryPage</h1>
      </div>
    );
  }
}

export default Inventory;
