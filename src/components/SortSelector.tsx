import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface ISortSelector {
  onSelectedSortOrder: (sortOrder: string) => void;
  selectedSortOrder: string;
}

const SortSelector = ({
  onSelectedSortOrder,
  selectedSortOrder,
}: ISortSelector) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-name", label: "Name" },
    { value: "-added", label: "Date added" },
    { value: "-released", label: "Release added" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const selectedSortOrderName = sortOrders.find(
    (order) => order.value === selectedSortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} mb={2}>
        Order by: {selectedSortOrderName?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            onClick={() => onSelectedSortOrder(order.value)}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
