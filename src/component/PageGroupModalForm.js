import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = false;

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="添加节点组"
      okText="添加"
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
          label="节点组名称"
          rules={[
            {
              required: true,
              message: '请输入节点组名称',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="描述">
          <Input type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const PageGroupModalForm = () => {
  const [visible, setVisible] = useState(false);

  const onCreateGroup = values => {
    console.log('创建节点组信息: ', values);
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

    window.location.reload()
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        <PlusOutlined /> 添加节点组
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


export default PageGroupModalForm;