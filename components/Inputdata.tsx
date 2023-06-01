import React from 'react';
import { useEffect,useState } from 'react';
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import TextField from '@mui/material/TextField';
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { RowData } from '@tanstack/table-core';


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


declare module '@tanstack/table-core' {
    // TableMeta インターフェースに新たなメソッドを追加
    interface TableMeta<TData extends RowData> {
        updateData: (rowIndex: number, columnId: string, value: unknown) => void;
    }
}

// defaultColumn 定数の定義
const defaultColumn: Partial<ColumnDef<Book>> = {
    // cell プロパティの定義
    cell: ({ getValue, row: { index }, column: { id }, table }) => {
        // 初期値を取得
        const initialValue = getValue();

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [value, setValue] = useState(initialValue);

        // フォーカスが外れた時の処理
        const onBlur = () => {
            // テーブルのオプションによってデータを更新
            table.options.meta?.updateData(index, id, value);
        };

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            // 初期値を設定
            setValue(initialValue);
        }, [initialValue]);

        // 編集可能なテキストフィールドを返す
        return <TextField
            value={value as string}
            onChange={(e) => setValue(e.target.value)}
            onBlur={onBlur} />;
    },
};



const Inputdata = () => {
    

    const table = useReactTable<Book>({
        data: books,
        columns,
        defaultColumn,
        getCoreRowModel: getCoreRowModel(),
        meta: {
            updateData: (index: number, columnId: string, value: any) => {
                console.log(`table update data index:`, index, 'columnId:', columnId, 'value:', value);
            },
        },
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