import { Line } from '@ant-design/plots';

const AitaiLine = (dataSource) => {
    const config = {
        data: dataSource.dataSource,
        xField: 'quarter',
        yField: 'value',
        seriesField: 'product',
        slider: {
            start: 0.01,
            end: 0.99,
        },
        legend: false,
        color: ['#4C7EE3', '#FE6273', '#2AC769'],
        point: {
            size: 3,
            shape: 'circle',
            style: {
                fill: 'white',
                stroke: '#5B8FF9',
                lineWidth: 2,
            },
        },
    };
    return <Line {...config} />;
};

export default AitaiLine;
