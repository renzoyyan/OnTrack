import React from "react";

const ProductsCard = ({
  name,
  brand,
  category,
  sizes,
  colors,
  price,
  stocks,
}) => {
  console.log(sizes?.map((e, idx) => e).join(","));
  return (
    <tr>
      <td className="px-6 py-4 text-sm whitespace-nowrap">{name}</td>
      <td className="px-6 py-4 text-sm whitespace-nowrap">{brand}</td>
      <td className="px-6 py-4 text-sm whitespace-nowrap">{category}</td>
      <td className="px-6 py-4 text-sm whitespace-nowrap">
        {sizes?.map((size, idx) => size).join(", ")}
      </td>
      <td className="px-6 py-4 text-sm whitespace-nowrap">
        {colors?.map((color, idx) => color).join(", ")}
      </td>
      <td className="px-6 py-4 text-sm whitespace-nowrap">P {price}</td>
      <td className="px-6 py-4 text-sm whitespace-nowrap">{stocks}</td>
      <td className="px-6 py-4 text-sm whitespace-nowrap">
        <div className="space-x-4">
          <span className="cursor-pointer text-sm text-amber-500 hover:underline">
            Edit
          </span>
          <span className="cursor-pointer text-sm text-red-500 hover:underline">
            Delete
          </span>
        </div>
      </td>
    </tr>
  );
};

export default ProductsCard;
