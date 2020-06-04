import React from 'react';
import { Table, Popconfirm } from 'antd';

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3003';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = false;

var data;

function deleteGroup(param) {
    console.log('deleteGroup().param:' + param);

    axios.post('/delete_node', {
        nodeip: param
    })
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });

}

class PageNodeTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: '节点IP',
                dataIndex: 'nodeip',
                key: 'nodeip',
                render: text => <a>{text}</a>,
            },
            {
                title: '节点组',
                dataIndex: 'nodegroup',
                key: 'nodegroup',
            },
            {
                title: '操作',
                dataIndex: 'action',
                render: (text, record) =>
                    this.state.dataSource.length >= 1 ? (
                        <Popconfirm title="确认删除"
                            onConfirm={() => this.handleDelete(record.nodeip)}>
                            <a>删除</a>
                        </Popconfirm>
                    ) : null,
            },
        ];

        this.rawData = [];

        axios.get('/node')
            .then(function (response) {
                data = response.data;
                console.log('nodedata:' + data);
            })
            .catch(function (error) {
                console.log(error);
            });

        this.state = {
            dataSource: data
        }


    }

    handleDelete = nodeip => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.nodeip !== nodeip) });
        deleteGroup(nodeip);
    };

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
            <Table columns={this.columns} dataSource={this.state.dataSource} />
        );
    }
}


export default PageNodeTable;