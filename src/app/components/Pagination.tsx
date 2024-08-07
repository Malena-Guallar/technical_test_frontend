import { Button, Chip, Typography } from "@mui/material";

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

  const handleToggle = (value: number) => {
    onItemsPerPageChange(value);
  };

  const itemsPerPageValues: number[] = [4, 8, 12];

  return (
    <section className="flex flex-col justify-center items-center my-5 md:my-6 text-black">
      <div>
        <Button
          onClick={() => handlePageChange("prev")}
          disabled={currentPage === 1}
          className="text-black font-semibold"
        >
          Previous
        </Button>
        <Button
          onClick={() => handlePageChange("next")}
          disabled={currentPage === totalPages}
          className="text-black font-semibold"
        >
          Next
        </Button>
      </div>
      <Typography className="text-xs italic my-2">items per page :</Typography>
      <div className="flex justify-center">
        {itemsPerPageValues.map((value) => (
          <Chip
            key={value}
            label={value}
            clickable
            onClick={() => handleToggle(value)}
            style={{ margin: 12 }}
          />
        ))}
      </div>
    </section>
  );
};

export default Pagination;
