import React from "react";
import { useNavigate } from "react-router-dom";

const OrderRow = ({ order, index, setOrderDelete, setIsOpen }) => {
  const navigate = useNavigate();
  const { _id, img, product, orderQuantity, cost, paid, transactionId } = order;
  function openModal(order) {
    setIsOpen(true);
    setOrderDelete(order);
  }
  return (
    <>
      <tr data-aos="zoom-out-right" className="bg-gray-100 border-b text-left">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {index + 1}
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          <div className="avatar">
            <div className="w-16 rounded">
              <img src={img} alt="Tailwind-CSS-Avatar-component" />
            </div>
          </div>
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {product}
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {orderQuantity}/p
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          ${cost}
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          <div>
            {cost && !paid && (
              <div>
                <button
                  onClick={() => navigate(`/dashboard/payment/${_id}`)}
                  className="btn btn-sm mr-2 border-0 bg-green-700"
                >
                  Pay
                </button>
                <button
                  className="btn btn-sm border-0 bg-red-500"
                  onClick={() => openModal(order)}
                >
                  cancel order
                </button>
              </div>
            )}
            {cost && paid && (
              <>
                <span className="text-lg text-green-600 mr-3">Paid</span>
                <p>transactionId: <span className="font-extrabold">{transactionId}</span></p>
              </>
            )}
          </div>
        </td>
      </tr>
    </>
  );
};

export default OrderRow;
