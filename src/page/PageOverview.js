import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import PageOverviewList from '../component/PageOverviewList';

const { Header, Content, Footer } = Layout;

class PageOverview extends React.Component {

    render() {
        return (
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ paddingLeft: 16 }} >资源总览</Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>节点管理</Breadcrumb.Item>
                        <Breadcrumb.Item>资源总览</Breadcrumb.Item>
                    </Breadcrumb>
                    <PageOverviewList/>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Scout ©2020 Created by Octopusheep</Footer>
            </Layout>

        );
    }
}


export default PageOverview;
