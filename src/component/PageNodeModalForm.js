import React, { useState } from 'react';
import { Button, Modal, Form, Input, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = false;

const { Option } = Select;

const children=[];

function getGroup(){

  axios.get('/group')
            .then(function (response) {
                children = response.data;
                console.log('getGroup():' + children);
            })
            .catch(function (error) {
                console.log(error);
            });

}


const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
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
          name="groupname"
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
          name="type"
          label="节点组"
          rules={[{ required: true, message: 'Please choose the type' }]}
        >
          <Select placeholder="请选择节点组">
            {children}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const PageNodeModalForm = () => {
  const [visible, setVisible] = useState(false);

  const onCreateGroup = values => {
    console.log('创建节点信息: ', values);
    setVisible(false);

    axios.post('/add_group', {
      groupname: values.groupname,
      groupnote: values.description
    })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    this.setState({
      visible: false,
    });

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
        onCreate={onCreateGroup}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};


export default PageNodeModalForm;