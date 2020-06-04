import React from 'react';
import axios from 'axios';
import { Layout, Breadcrumb } from 'antd';
import PageGroupTable from '../component/PageGroupTable';
import PageGroupModalForm from '../component/PageGroupModalForm';

axios.defaults.baseURL = 'http://192.168.131.29:3003';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = false;

const { Header, Content, Footer } = Layout;


function demo(){
    console.log('demo');
}
class PageGroup extends React.Component {

    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.timerID = setTimeout(
            () => this.tick(),
            200
        );
    }

    componentWillUnmount() {
    }

    tick() {
        console.log('PageGroup的tick()');
        this.render();
    }
    render() {
        return (
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ paddingLeft: 16 }} >
                    <PageGroupModalForm cb={this.tick.bind(this)}/>
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>节点管理</Breadcrumb.Item>
                        <Breadcrumb.Item>节点组操作</Breadcrumb.Item>
                    </Breadcrumb>
                    <PageGroupTable />
                </Content>
                <Footer style={{ textAlign: 'center' }}>Scout ©2020 Created by Octopusheep</Footer>
            </Layout>

        );
    }


}


export default PageGroup;
