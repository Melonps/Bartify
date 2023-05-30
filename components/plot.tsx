import React from 'react';
import Plot from 'react-plotly.js';

const Graph2 = () => {
    return (
        <Plot
        data={[
            {
                x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                y: [1, 2, 3, 6, 5, 7, 12, 15, 17, 25, 50],
                type: 'scatter',
                mode: 'lines',
                marker: {color: 'red'},
            },
            {
                x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                y: [1, 1, 1.5, 2, 3, 2.5, 4, 4, 5, 3],
                type: 'scatter',
                mode: 'lines',
                marker: {color: 'blue'},
            },
        ]}
        layout={ {width: 520, height: 440, title: `My Cool Graph` } }
        />
    );
}

Graph2.displayName = 'MyComponent';

export default Graph2;