import React from 'react';
import { Table, Popconfirm } from 'antd';

class PageNodeTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: '节点',
                dataIndex: 'node',
                key: 'node',
                render: text => <a>{text}</a>,
            },
            {
                title: '节点组',
                dataIndex: 'group',
                key: 'group',
            },
            {
                title: '操作',
                dataIndex: 'action',
                render: (text, record) =>
                    this.state.dataSource.length >= 1 ? (
                        <Popconfirm title="确认删除" >
                            <a>Delete</a>
                        </Popconfirm>
                    ) : null,
            },
        ];

        this.state = {
            dataSource: [{
                node: '192.168.130.1',
                group: '192.168.130网段',
            }, {
                node: '192.168.130.2',
                group: '192.168.130网段',
            },{
                node: '192.168.131.1',
                group: '192.168.131网段',
            },]
        }


    }

    render() {
        return (
            <Table columns={this.columns} dataSource={this.state.dataSource} />
        );
    }
}


export default PageNodeTable;