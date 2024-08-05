import { Chip, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

const CategoryFilter = ({
  categories,
  selectedCategories,
  onChange,
}: {
  categories: string[];
  selectedCategories: string[];
  onChange: (selectedCategories: string[]) => void;
}) => {
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const { value } = event.target
    onChange(Array.isArray(value) ? value : []);
  };


  return (
    <FormControl className="w-3/4 border-2 border-solid border-blue-300 flex flex-col justify-center content-center">
      <InputLabel id="category-filter-label">Categories</InputLabel>
      <Select
        labelId="category-filter-label"
        value={selectedCategories}
        multiple
        onChange={handleChange}
        renderValue={(selectedCategories) => (
          <div>
            {selectedCategories.map((category) => (
              <Chip key={category} label={category} />
            ))}
          </div>
        )}
      >
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategoryFilter;
