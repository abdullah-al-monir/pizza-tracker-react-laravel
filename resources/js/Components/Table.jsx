// Table.jsx
import React from "react";

const Table = ({ items, columns, primary, action }) => {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                           Item Id
                        </th>
                        {columns.map((column, index) => (
                            <th key={index} scope="col" className="px-6 py-3">
                                {column}
                            </th>
                        ))}

                        {action && (
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={
                                rowIndex % 2 === 0
                                    ? "bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                    : "bg-white dark:bg-gray-800"
                            }
                        >
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.id}
                            </td>

                            {columns.map((col, colIndex) => (
                                <td
                                    key={colIndex}
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {item[col]}
                                </td>
                            ))}

                            {action && (
                                <td className="px-6 py-4">
                                    <a href={route(action, item.id)}>
                                        View details
                                    </a>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
