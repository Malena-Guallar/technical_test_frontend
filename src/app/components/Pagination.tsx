import { Button, MenuItem, Select, SelectChangeEvent } from "@mui/material";

const Pagination = ({
  onPageChange,
  currentPage,
  onItemsPerPageChange,
  itemsPerPage,
  totalItems,
}: {
  onPageChange: (page: number) => void;
  currentPage: number;
  onItemsPerPageChange: (number: number) => void;
  itemsPerPage: number;
  totalItems: number;
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (direction: "next" | "prev") => {
    const newPage = direction === "next" ? currentPage + 1 : currentPage - 1;
    if (newPage > 0 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  const handleItemsPerPageChange = (event: SelectChangeEvent<number>) => {
    onItemsPerPageChange(Number(event.target.value));
  };

  return (
    <>
      <div>
        <Button
          onClick={() => handlePageChange("prev")}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button
          onClick={() => handlePageChange("next")}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
      <div>
        <Select value={itemsPerPage} onChange={handleItemsPerPageChange}>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={12}>12</MenuItem>
        </Select>
      </div>
    </>
  );
};

export default Pagination;
