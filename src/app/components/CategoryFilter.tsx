import { Chip, FormControl } from "@mui/material";

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
    <FormControl className="w-1/2 my-5 md:my-10 text-black">
      <div>
        {categories.map((category) => (
          <Chip
            key={category}
            label={category}
            clickable
            onClick={() => handleToggle(category)}
            style={{ margin: 4 }}
          />
        ))}
      </div>
    </FormControl>
  );
};

export default CategoryFilter;
