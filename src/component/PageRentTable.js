import React from 'react';
import { Table, Popconfirm } from 'antd';

class PageNodeTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: '使用目的',
                dataIndex: 'status',
                key: 'status',
                render: text => <a>{text}</a>,
            },
            {
                title: '借出人',
                dataIndex: 'renter',
                key: 'renter',
            },
            {
                title: '借出时间',
                dataIndex: 'time',
                key: 'time',
            },
            {
                title: '出借节点个数',
                dataIndex: 'count',
                key: 'count',
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
                status: '部署CPS 2.8.5环境',
                renter: '许照康',
                time: '2020年6月6日',
                count: '13'

            },{
                status: '部署CPS 2.8.6环境',
                renter: '许照康',
                time: '2020年6月6日',
                count: '13'

            }, {
                status: '部署CPS 2.8.7环境',
                renter: '许照康',
                time: '2020年6月6日',
                count: '13'

            }, ]
        }


    }

    render() {
        return (
            <Table columns={this.columns} dataSource={this.state.dataSource} />
        );
    }
}


export default PageNodeTable;