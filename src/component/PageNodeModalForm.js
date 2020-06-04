import React, { useState } from 'react';
import { Button, Modal, Form, Input, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.131.29:3003';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = false;

const { Option } = Select;



const CollectionCreateForm = ({ visible, onCreate, onCancel, grouplist }) => {
  const [form] = Form.useForm();

  console.log('grouplist:' + grouplist);
  const children = [];
  for (let i = 0; i < grouplist.length; i++) {
    children.push(<Option key={grouplist[i]}>{grouplist[i]}</Option>);
  }
  console.log('children:' + children)

  return (
    <Modal
      visible={visible}
      title="新增节点"
      okText="创建"
      cancelText="取消"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="nodeip"
          label="节点IP"
          rules={[
            {
              required: true,
              message: '请输入节点IP',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="nodegroup"
          label="节点组"
          rules={[{ required: true, message: '请选择节点组' }]}
        >
          <Select placeholder="请选择节点组">
            {children}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const PageNodeModalForm = ({raw}) => {
  const [visible, setVisible] = useState(false);
  console.log('raw: ', raw);

  const onCreateNode = values => {
    console.log('创建节点信息: ', values);

    axios.post('/add_node', {
      nodeip: values.nodeip,
      nodegroup: values.nodegroup
    })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    setVisible(false);

    this.setState({
      visible: false,

    });

    // cb && cb();

  };



  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        <PlusOutlined /> 新增节点
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreateNode}
        onCancel={() => {
          setVisible(false);
        }}
        grouplist={raw}
      />
    </div>
  );
};


export default PageNodeModalForm;