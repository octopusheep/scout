import React from 'react';
import { List, Card, Tag, Space } from 'antd';

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3003';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = false;

var data;
class PageOverviewList extends React.Component {

    constructor(props) {
        super(props);


        axios.get('/overview')
            .then(function (response) {
                data = response.data;
                console.log('data:' + data);
            })
            .catch(function (error) {
                console.log(error);
            });

        this.state = {
            dataSource: data
        }


    }
    componentDidMount() {
        this.timerID = setTimeout(
            () => this.tick(),
            500
        );
    }

    componentWillUnmount() {
    }

    tick() {
        console.log('tick()');
        this.setState({
            dataSource: data
        })
        this.render();
    }

    render() {
        return (
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 5,
                    xxl: 5,
                }}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <Card title={item.title}>

                            <List
                                dataSource={item.machineList}
                                renderItem={item => (
                                    <List.Item>
                                        <div >
                                            <Space direction="vertical">
                                                {item.ip}
                                                <Tag color={item.enable === true ? 'green' : 'red'}>{item.enable === true ? '可用节点' : item.usage}</Tag>
                                            </Space>
                                        </div>
                                    </List.Item>
                                )}
                            />

                        </Card>
                    </List.Item>
                )}
            />
        );
    }
}

export default PageOverviewList;