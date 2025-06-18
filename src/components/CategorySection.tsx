import React from 'react';
interface Category {
  name: string;
  image: string;
}
interface Props {
  categories: Category[];
}
const CategorySection: React.FC<Props> = ({ categories }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {categories.map((cat) => (
      <div key={cat.name} className="text-center">
        <img
          src={cat.image}
          alt={cat.name}
          className="w-full h-32 object-cover rounded"
        />
        <p className="mt-2 font-medium">{cat.name}</p>
      </div>
    ))}
  </div>
);
export default CategorySection;
