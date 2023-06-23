import { Bar } from '@ant-design/plots';

const AitaiBar = () => {
    const data = [
        {
            year: '实际',
            value: 30.6,
            product: '产品线A',
        },
        {
            year: '实际',
            value: 20.4,
            product: '产品线B',
        },
        {
            year: '预测',
            value: 18.5,
            product: '产品线A',
        },
        {
            year: '预测',
            value: 25,
            product: '产品线B',
        },
    ];
    const config = {
        data,
        isStack: true,
        xField: 'value',
        yField: 'year',
        color: ['#4C7EE3', '#FE6273'],
        seriesField: 'product',
        legend: {
            layout: 'horizontal',
            position: 'bottom-right'
        },
        label: {
            position: 'middle',
            layout: [
                {
                    type: 'interval-adjust-position',
                },
                {
                    type: 'interval-hide-overlap',
                },
                {
                    type: 'adjust-color',
                },
            ],
        },
    };
    return <Bar {...config} />;
};

export default AitaiBar;
