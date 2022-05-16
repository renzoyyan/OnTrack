import React from "react";
import AskModal from "../ui/Modal";

const ProductsCard = ({
  id,
  name,
  brand,
  category,
  sizes,
  colors,
  price,
  stocks,
  release_date,
  editProduct,
}) => {
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
      <td className="px-6 py-4 text-sm whitespace-nowrap">{release_date}</td>
      <td className="px-6 py-4 text-sm whitespace-nowrap">
        <div className="space-x-4">
          <span
            className="text-sm cursor-pointer text-amber-500 hover:underline"
            onClick={() => editProduct(id)}
          >
            Edit
          </span>

          <AskModal id={id} />
        </div>
      </td>
    </tr>
  );
};

export default ProductsCard;
