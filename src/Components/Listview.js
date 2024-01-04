import React from "react";
 

const Listview = ({ item, index, remove, handleedit }) => {
    
  return (
    <tr key={index}>
      <td className="border border-green-600 p-2">{item}</td>

      <td className="border border-green-600 p-2  ">
        <input type="checkbox" className="mr-2" />
      </td>

      <td className="border border-green-600 p-2  ">
        <button
          className="flex-no-shrink p-2 ml-2 border-2 bg-red-700 rounded text-white border-red"
          onClick={() => remove(index)}
        >
          Remove
        </button>
        <button
          className="flex-no-shrink p-2 ml-2 bg-green-700 border-2 rounded text-white border-red"
          onClick={() => handleedit(index)}
        >
          Edit
        </button>
      </td>
    </tr>
  );
};

export default Listview;
