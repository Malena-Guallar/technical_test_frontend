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
    <FormControl className="my-5 md:my-5 text-black flex items-center">
      <Typography className="text-sm italic mb-3 md:mb-6">browse by categories :</Typography>
      <div className="flex items-center">
        {categories.map((category) => (
          <Chip
            key={category}
            label={category}
            clickable
            onClick={() => handleToggle(category)}
            className="mx-2 md:mx-10 md:w-32"
          />
        ))}
      </div>
    </FormControl>
  );
};

export default CategoryFilter;
