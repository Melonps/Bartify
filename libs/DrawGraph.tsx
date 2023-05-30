import React from 'react';
import Plot from 'react-plotly.js';
import { Layout, PlotData } from "plotly.js";

type Props = {}

const Graph: React.FC<Props> = () => {

    const data1:Partial<PlotData> = {
        type: 'bar',
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [20, 14, 23],
        name: 'SF Zoo',
    }
    const layout1:Partial<Layout> = { title: '３次元グラフ'};
    // 下にある<Plot data = {}> のdataの型は Partial<PlotData>[]
    // サンプルとしてわかりやすいように型を書いています
    const allData:Partial<PlotData>[] = [data1]
    
    return (
        <Plot data={allData} layout={layout1} />
    );

}

export default Graph;