import React from 'react';
import { Table, Popconfirm } from 'antd';
import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.131.29:3003';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = false;

var data;

function deleteRent(param) {
    console.log('deleteRent().param:' + param);

    axios.post('/delete_rent', {
        rentpurpose: param
    })
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });

}
function transform(rawdata) {
    var final = [];
    for (let i = 0; i < rawdata.length; i++) {
        final[i] = {};
        final[i].rentpurpose = rawdata[i].rentpurpose;
        final[i].renter = rawdata[i].renter;
        final[i].renttime = rawdata[i].renttime;
        final[i].rentlist = rawdata[i].rentlist;
        final[i].rentcount = rawdata[i].rentlist.length;
    }
    console.log('transform():' + final);
    return final;
}

class PageRentTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: '使用目的',
                dataIndex: 'rentpurpose',
                key: 'rentpurpose',
                render: text => <a>{text}</a>,
            },
            {
                title: '借出人',
                dataIndex: 'renter',
                key: 'renter',
            },
            {
                title: '借出时间',
                dataIndex: 'renttime',
                key: 'renttime',
            },
            {
                title: '出借节点个数',
                dataIndex: 'rentcount',
                key: 'rentcount',
            },
            {
                title: '操作',
                dataIndex: 'action',
                render: (text, record) =>
                    this.state.dataSource.length >= 1 ? (
                        <Popconfirm title="确认删除"
                        onConfirm={() => this.handleDelete(record.rentpurpose)} >
                            <a>Delete</a>
                        </Popconfirm>
                    ) : null,
            },
        ];

        this.rawData = [];

        axios.get('/rent')
            .then(function (response) {
                data = transform(response.data);
                console.log('rentdata:' + data);
            })
            .catch(function (error) {
                console.log(error);
            });

        this.state = {
            dataSource: data
        }


    }

    handleDelete = rentpurpose => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.rentpurpose !== rentpurpose) });
        deleteRent(rentpurpose);
    };

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            2000
        );
    }

    componentWillUnmount() {
    }



    tick() {
        console.log('tick()');
        this.setState({
            dataSource: data
        })

        axios.get('/rent')
            .then(function (response) {
                data = transform(response.data);
                console.log('rentdata:' + data);
            })
            .catch(function (error) {
                console.log(error);
            });
        this.render();
    }
    render() {
        return (
            <Table columns={this.columns} dataSource={this.state.dataSource} />
        );
    }
}


export default PageRentTable;