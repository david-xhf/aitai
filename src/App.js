import './App.css';
import { products } from './utils/products'
import { regions } from './utils/regions'
import { dataRegion } from './utils/line_data_regions';
import { dataProduct } from './utils/line_data_products';
import { useState } from 'react';
import Table from './components/table';
import AitaiBar from './components/interval';
import AitaiLine from './components/line'
import { Layout, Select, Radio } from 'antd';
const { Header, Sider, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  // height: 64,
  paddingInline: '0px',
  backgroundColor: '#fff',
  display: 'flex'
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  margin: '0px 16px',
  display: 'flex',
  flexDirection: 'column'
};
const siderStyle = {
  textAlign: 'center',
  borderRadius: '0px 5px 0px 0px',
  backgroundColor: '#fff',
};
function App() {
  const [data, setData] = useState(products)
  const [value, setValue] = useState('quarterly');
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  }
  return (
    <div className="App">
      <Layout style={{ height: '100vh' }}>
        <Header style={headerStyle}>
          <div style={{ backgroundColor: '#4C7EE3', width: 184, height: 64 }}></div>
          <div style={{ backgroundColor: '#4C7EE3', width: 31, height: 31, borderRadius: '50%', margin: '10px 17px 23px auto' }}></div>
        </Header>
        <Layout hasSider style={{ padding: '16px 0 0 0' }}>
          <Sider style={siderStyle} width={184}></Sider>
          <Content style={contentStyle}>
            <div style={{ backgroundColor: '#fff', width: "100%", minHeight: 50, borderRadius: 5 }}></div>
            <div style={{ backgroundColor: '#fff', width: "100%", height: 647, borderRadius: 5, margin: '21px 0px 2px 0px', padding: '15px' }}>
              <div style={{ height: '180px', width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
                <div style={{ height: '100%', width: '50%', marginRight: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '29px' }}>构成
                    <Select
                      className='rounded'
                      defaultValue="2020年Q1"
                      style={{
                        width: 100,
                        fontSize: '12px',
                        marginLeft: '13px',
                      }}
                      options={[
                        {
                          value: '2020年Q1',
                          label: '2020年Q1',
                        },
                        {
                          value: '2020年Q2',
                          label: '2020年Q2',
                        }
                      ]}
                    /></div>
                  <div style={{ height: '160px', width: '100%' }}><AitaiBar /></div>
                </div>
                <div style={{ height: '100%', width: '50%', marginLeft: '8px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '29px' }}>趋势</div>
                  <div style={{ height: '160px', width: '100%' }}><AitaiLine dataSource={data === products ? dataProduct : dataRegion} /></div>
                </div>
              </div>
              <div style={{ width: '100%', textAlign: 'left', marginBottom: '20px' }}>
                <Radio.Group onChange={onChange} value={value} defaultValue='quarterly'>
                  <Radio value='quarterly'>季报</Radio>
                  <Radio value='yearly'>年报</Radio>
                </Radio.Group>
              </div>
              <div style={{
                backgroundColor: '#F9F9F9',
                width: '100%',
                display: 'flex',
                padding: '0px 10px',
                justifyContent: 'center',
                borderRadius: '3px',
                marginBottom: '10px'
              }}>
                <table style={{ textAlign: "left", lineHeight: '30px' }}>
                  <tbody>
                    <tr style={{ fontSize: '12px', fontWeight: 'bold', color: '#4D4D4D', borderBottom: 'none' }}>
                      <td style={{ width: '210px' }}>投资主体</td>
                      <td style={{ width: '100px' }}>2019Q2</td>
                      <td style={{ width: '100px' }}>2019Q3</td>
                      <td style={{ width: '100px' }}>2019Q4</td>
                      <td style={{ width: '100px' }}>2020Q1E</td>
                      <td style={{ width: '100px' }}>2020Q2E</td>
                      <td style={{ width: '100px' }}>2020Q3E</td>
                      <td style={{ width: '100px' }}>2020Q4E</td>
                      <td style={{ width: '100px' }}>2021Q1E</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Table style={{ marginBottom: '20px' }} datasource={products} currentData={data} setData={setData}></Table>
              <Table datasource={regions} currentData={data} setData={setData}></Table>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
