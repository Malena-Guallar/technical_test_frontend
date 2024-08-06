import { Chip, FormControl, Typography } from "@mui/material";

const CategoryFilter = ({
  categories,
  selectedCategories,
  onChange,
}: {
  categories: string[];
  selectedCategories: string[];
  onChange: (selectedCategories: string[]) => void;
}) => {
  const handleToggle = (category: string) => {
    const newSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    onChange(newSelectedCategories);
  };

  return (
    <FormControl className="my-5 md:my-10 text-black">
      {/* <Typography>browse by categories</Typography> */}
      <div className="">
        {categories.map((category) => (
          <Chip
            key={category}
            label={category}
            clickable
            onClick={() => handleToggle(category)}
            className="my-2 md:my-0 mx-2 md:mx-10 md:w-32 hover:bg-transparent hover:border-2 hover:border-black hover:border-solid hover:font-bold active:bg-black"
          />
        ))}
      </div>
    </FormControl>
  );
};

export default CategoryFilter;
