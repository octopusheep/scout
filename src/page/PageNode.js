import React from 'react';
import axios from 'axios';
import { Layout, Breadcrumb } from 'antd';
import PageNodeTable from '../component/PageNodeTable';
import PageNodeModalForm from '../component/PageNodeModalForm';
const { Header, Content, Footer } = Layout;

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = false;

var children = [];

function request() {

    axios.get('/group')
        .then(function (response) {
            var rawdata = response.data;
            for (let i = 0; i < rawdata.length; i++) {
                children.push(rawdata[i].groupname)
            }

            console.log('getGroup():' + children);
        })
        .catch(function (error) {
            console.log(error);
        });
}

class PageNode extends React.Component {

    constructor(props) {
        super(props);

        request();

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
        console.log('tick()');
        this.render();
    }
    render() {
        return (
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ paddingLeft: 16 }} >
                    <PageNodeModalForm raw={children}  />
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>节点管理</Breadcrumb.Item>
                        <Breadcrumb.Item>节点操作</Breadcrumb.Item>
                    </Breadcrumb>
                    <PageNodeTable />
                </Content>
                <Footer style={{ textAlign: 'center' }}>Scout ©2020 Created by Octopusheep</Footer>
            </Layout>

        );
    }


}


export default PageNode;
