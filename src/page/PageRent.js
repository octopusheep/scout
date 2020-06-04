import React from 'react';
import axios from 'axios';
import { Layout, Breadcrumb} from 'antd';
import PageRentTable from '../component/PageRentTable';
import PageRentModalForm from '../component/PageRentModalForm';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = false;

const { Header, Content, Footer } = Layout;

var children = [];

class PageRent extends React.Component {
    constructor(props) {
        super(props);

        axios.get('/freenode')
            .then(function (response) {
                var rawdata = response.data;
                for (let i = 0; i < rawdata.length; i++) {
                    children.push(rawdata[i])
                }
                console.log('getfreelist():' + children);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ paddingLeft: 16 }} >
                    <PageRentModalForm raw={children}/>
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>节点管理</Breadcrumb.Item>
                        <Breadcrumb.Item>借出登记</Breadcrumb.Item>
                    </Breadcrumb>
                    <PageRentTable />
                </Content>
                <Footer style={{ textAlign: 'center' }}>Scout ©2020 Created by Octopusheep</Footer>
            </Layout>

        );
    }


}


export default PageRent;
