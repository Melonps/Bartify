import React from 'react';
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import TextField from '@mui/material/TextField';
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";


type Book = {
    title: string;
    author: string;
};

const books: Book[] = [
    {
        title: 'ハリー・ポッターと賢者の石',
        author: 'J.K.ローリング',
    },
    {
        title: 'こころ',
        author: '夏目漱石',
    },
];

const columns: ColumnDef<Book, any>[] = [
    {
        accessorKey: 'title',
        header: 'タイトル',
    },
    {
        accessorKey: 'author',
        header: '著者',
    },
];


const Inputdata = () => {

    const table = useReactTable<Book>({
        data: books,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
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

            <TableContainer>
                <Table>
                    <Thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <Tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <Th key={header.id}>
                            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                            </Th>
                        ))}
                        </Tr>
                    ))}
                    </Thead>
                    <Tbody>
                    {table.getRowModel().rows.map((row) => (
                        <Tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <Td key={cell.id} borderX="1px solid #e2e8f0">
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </Td>
                        ))}
                        </Tr>
                    ))}
                    </Tbody>
                </Table>
        </TableContainer>
        </div>
    );
}

export default Inputdata