import React from 'react';
import { Table, Popconfirm } from 'antd';

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3003';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = false;

var data;

function deleteGroup(param) {
    console.log('deleteGroup().param:'+param);

    axios.post('/delete_group', {
        groupname: param
    })
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });

}


class PageGroupTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: '节点组名称',
                dataIndex: 'groupname',
                key: 'groupname',
                render: text => <a>{text}</a>,
            },
            {
                title: '备注信息',
                dataIndex: 'note',
                key: 'note',
            },
            {
                title: '操作',
                dataIndex: 'action',
                render: (text, record) =>
                    this.state.dataSource.length >= 1 ? (
                        <Popconfirm
                            title="确认删除"
                            onConfirm={() => this.handleDelete(record.groupname)}
                        >
                            <a>删除</a>
                        </Popconfirm>
                    ) : null,
            },
        ];

        this.rawData = [];

        axios.get('/group')
            .then(function (response) {
                data = response.data;
            })
            .catch(function (error) {
                console.log(error);
            });

        this.state = {
            dataSource: data
        }


    }

    handleDelete = groupname => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.groupname !== groupname) });
        deleteGroup(groupname);
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
        console.log('PageGroupTable的tick()');
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


export default PageGroupTable;