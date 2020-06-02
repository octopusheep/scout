import React from 'react';
import PageOverview from './PageOverview';
import PageGroup from './PageGroup';
import PageNode from './PageNode';
import PageRent from './PageRent';
import '../css/pagehome.css';

import { Layout, Menu, Space } from 'antd';

import {
    DatabaseOutlined,
    AlertFilled,
} from '@ant-design/icons';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;

class PageHome extends React.Component {

    state = {
        collapsed: false,
    };
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <Router>
                <Layout style={{ minHeight: '100vh' }}>

                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <div className="logo"><Space><AlertFilled />Scout</Space></div>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <SubMenu key="sub1" icon={<DatabaseOutlined />} title="节点管理">
                                <Menu.Item key="1"><Link to="/overview">资源总览</Link></Menu.Item>
                                <Menu.Item key="2"><Link to="/rent">借出登记</Link></Menu.Item>
                                <Menu.Item key="3"><Link to="/group">节点组操作</Link></Menu.Item>
                                <Menu.Item key="4"><Link to="/node">节点操作</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>

                    <Switch>
                        <Route exact path="/" component={PageOverview} />
                        <Route path="/overview" component={PageOverview} />
                        <Route path="/rent" component={PageRent} />
                        <Route path="/group" component={PageGroup} />
                        <Route path="/node" component={PageNode} />
                    </Switch>


                </Layout>

            </Router>
        );
    }
}


export default PageHome;

