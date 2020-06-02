import React from 'react';
import { Layout, Breadcrumb} from 'antd';
import PageRentTable from '../component/PageRentTable';
import PageRentForm from '../component/PageRentForm';
const { Header, Content, Footer } = Layout;

class PageRent extends React.Component {

    render() {
        return (
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ paddingLeft: 16 }} >
                    <PageRentForm/>
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
