import React from 'react';
import Plot from 'react-plotly.js';
import { Layout, PlotData } from "plotly.js";

type Props = {}

const Graph: React.FC<Props> = () => {
    var xValue = ['Product A', 'Product B', 'Product C'];
    var yValue = [20, 14, 23];

    const data1:Partial<PlotData> = {
        type: 'bar',
        x: xValue,
        y: yValue,
        name: 'SF Zoo',
        text: yValue.map(String),
        textposition: 'auto',
        marker: {
            color: 'rgb(158,202,225)',
            opacity: 0.6,
            line: {
            color: 'rgb(8,48,107)',
            width: 1.5
            }
        }
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