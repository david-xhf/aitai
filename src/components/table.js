import { useState } from "react";
import './table.css'
function Table({ datasource, setData, currentData }) {
    const data = datasource;
    const [selected, setSelected] = useState(data === currentData);
    const handleClick = () => {
        setSelected(true);
        setData(datasource)
    }
    return (
        <>
            {selected && data === currentData && <div style={{ position: 'absolute' }}><div style={{ borderRadius: '2px', backgroundColor: '#4C7EE3', width: '4px', height: '30px' }}></div><div></div></div>}
            <div
                onMouseDown={handleClick}
                style={{
                    backgroundColor: (selected && data === currentData) ? '#F5F7FD' : 'transparent',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '5px 10px',
                    borderRadius: '3px',
                    marginBottom: '20px'
                }}>
                <table style={{
                    textAlign: "left",
                    lineHeight: '30px',
                    borderCollapse: 'collapse',
                    borderSpacing: 0,
                }}>
                    <thead>
                        <tr style={{ font: '14px bold', color: '#4D4D4D' }}>
                            <th colSpan={Object.keys(data[0].comp).length + 1}>
                                <span style={{ marginRight: '15px' }}>{data[0].table}</span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="solar:chart-bold">
                                        <path id="Vector" d="M10 6.875C10 6.77554 9.96049 6.68016 9.89017 6.60984C9.81984 6.53951 9.72446 6.5 9.625 6.5H8.125C8.02554 6.5 7.93016 6.53951 7.85984 6.60984C7.78951 6.68016 7.75 6.77554 7.75 6.875V10.25H7V2.125C7 1.761 6.999 1.525 6.976 1.352C6.954 1.1895 6.9185 1.1385 6.89 1.11C6.8615 1.0815 6.8105 1.046 6.648 1.024C6.4745 1.001 6.239 1 5.875 1C5.511 1 5.275 1.001 5.102 1.024C4.9395 1.046 4.8885 1.0815 4.86 1.11C4.8315 1.1385 4.796 1.1895 4.774 1.352C4.751 1.5255 4.75 1.761 4.75 2.125V10.25H4V4.375C4 4.27554 3.96049 4.18016 3.89017 4.10984C3.81984 4.03951 3.72446 4 3.625 4H2.125C2.02554 4 1.93016 4.03951 1.85983 4.10984C1.78951 4.18016 1.75 4.27554 1.75 4.375V10.25H0.875C0.775544 10.25 0.680161 10.2895 0.609835 10.3598C0.539509 10.4302 0.5 10.5255 0.5 10.625C0.5 10.7245 0.539509 10.8198 0.609835 10.8902C0.680161 10.9605 0.775544 11 0.875 11H10.875C10.9745 11 11.0698 10.9605 11.1402 10.8902C11.2105 10.8198 11.25 10.7245 11.25 10.625C11.25 10.5255 11.2105 10.4302 11.1402 10.3598C11.0698 10.2895 10.9745 10.25 10.875 10.25H10V6.875Z" fill={(selected && data === currentData) ? '#4C7EE3' : "#999999"} />
                                    </g>
                                </svg>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => {
                            return (
                                <tr style={{ fontSize: '12px', color: '#4D4D4D', borderBottom: rowIndex !== data.length - 1 ? '1px solid #E5E5E5' : 'none' }} key={row.key}>
                                    <td style={{ width: '210px' }}>{row.product}</td>
                                    {Object.entries(row.comp).map(([key, value], index) => {
                                        return <td style={{ width: '100px' }} key={index}>{(value * 100).toFixed(1)}%</td>;
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div >
        </>
    );
};
export default Table;