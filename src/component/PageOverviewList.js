import React from 'react';
import { List, Card, Tag, Space } from 'antd';

var data = [
    {
        title: '192.168.130',
        machineList: [
            { ip: '192.168.130.1', enable: false, usage: '部署clever' },
            { ip: '192.168.130.2', enable: false, usage: '部署clever' },
            { ip: '192.168.130.3', enable: false, usage: '部署clever' },
            { ip: '192.168.130.4', enable: false, usage: '部署clever' },
            { ip: '192.168.130.5', enable: false, usage: '部署clever' },
            { ip: '192.168.130.6', enable: false, usage: '部署clever' },
            { ip: '192.168.130.7', enable: false, usage: '部署clever' },
        ]
    },
    {
        title: '192.168.131',
        machineList: [
            { ip: '192.168.131.1', enable: false, usage: '部署Underlay集群' },
            { ip: '192.168.131.8', enable: true, usage: '' },
            { ip: '192.168.131.9', enable: true, usage: '' },
            { ip: '192.168.131.10', enable: true, usage: '' },
            { ip: '192.168.131.11', enable: true, usage: '' },
            { ip: '192.168.131.14', enable: false, usage: '部署ES' },
            { ip: '192.168.131.15', enable: false, usage: '部署ES' },
        ]
    }, {
        title: '192.168.130',
        machineList: [
            { ip: '192.168.130.1', enable: false, usage: '部署clever' },
            { ip: '192.168.130.2', enable: false, usage: '部署clever' },
            { ip: '192.168.130.3', enable: false, usage: '部署clever' },
            { ip: '192.168.130.4', enable: false, usage: '部署clever' },
            { ip: '192.168.130.5', enable: false, usage: '部署clever' },
            { ip: '192.168.130.6', enable: false, usage: '部署clever' },
            { ip: '192.168.130.7', enable: false, usage: '部署clever' },
        ]
    },
    {
        title: '192.168.131',
        machineList: [
            { ip: '192.168.131.1', enable: false, usage: '部署Underlay集群' },
            { ip: '192.168.131.8', enable: true, usage: '' },
            { ip: '192.168.131.9', enable: true, usage: '' },
            { ip: '192.168.131.10', enable: true, usage: '' },
            { ip: '192.168.131.11', enable: true, usage: '' },
            { ip: '192.168.131.14', enable: false, usage: '部署ES' },
            { ip: '192.168.131.15', enable: false, usage: '部署ES' },
        ]
    }, {
        title: '192.168.130',
        machineList: [
            { ip: '192.168.130.1', enable: false, usage: '部署clever' },
            { ip: '192.168.130.2', enable: false, usage: '部署clever' },
            { ip: '192.168.130.3', enable: false, usage: '部署clever' },
            { ip: '192.168.130.4', enable: false, usage: '部署clever' },
            { ip: '192.168.130.5', enable: false, usage: '部署clever' },
            { ip: '192.168.130.6', enable: false, usage: '部署clever' },
            { ip: '192.168.130.7', enable: false, usage: '部署clever' },
        ]
    },
    {
        title: '192.168.131',
        machineList: [
            { ip: '192.168.131.1', enable: false, usage: '部署Underlay集群' },
            { ip: '192.168.131.8', enable: true, usage: '' },
            { ip: '192.168.131.9', enable: true, usage: '' },
            { ip: '192.168.131.10', enable: true, usage: '' },
            { ip: '192.168.131.11', enable: true, usage: '' },
            { ip: '192.168.131.14', enable: false, usage: '部署ES' },
            { ip: '192.168.131.15', enable: false, usage: '部署ES' },
        ]
    },
];
class PageOverviewList extends React.Component {


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