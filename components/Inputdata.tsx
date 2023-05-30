import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useTable } from "react-table";

const columns = [
  { Header: "商品", accessor: "product" },
  { Header: "値段", accessor: "price" },
  { Header: "在庫", accessor: "stock" }
];

const data = [
  { product: "りんご", price: "120円", stock: "130" },
  { product: "バナナ", price: "100円", stock: "200" },
  { product: "メロン", price: "3400円", stock: "2" },
  { product: "ぶどう", price: "1200円", stock: "6" }
];

const Inputdata = () => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    });

    return (
        <Box>
            <div>
                <TextField
                id="filled-read-only-input"
                label="Read Only"
                defaultValue="Hello World"
                InputProps={{
                    readOnly: true,
                }}
                variant="filled"
                />
            </div>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>
                                {   column.render("Header")}
                            </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                            return (
                                <td {...cell.getCellProps()}>
                                    {cell.render("Cell")}
                                </td>
                            )
                            })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Box>
        
    );
}

export default Inputdata