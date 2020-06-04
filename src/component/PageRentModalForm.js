import React, { useState } from 'react';
import { Button, Modal, Form, Input, Select, Col, Row, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = false;

const { Option } = Select;



const CollectionCreateForm = ({ visible, onCreate, onCancel,freenodelist}) => {
  const [form] = Form.useForm();

  console.log('freenodelist:' + freenodelist);
  const children = [];
  for (let i = 0; i < freenodelist.length; i++) {
    children.push(<Option key={freenodelist[i]}>{freenodelist[i]}</Option>);
  }
  console.log('freenodechildren:' + children)

  return (
    <Modal
      visible={visible}
      title="借出登记"
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
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="rentpurpose"
              label="使用目的"
              rules={[{ required: true, message: '请输入使用目的' }]}
            >
              <Input placeholder="请输入使用目的" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="renter"
              label="借出人"
              rules={[{ required: true, message: '请输入借出人' }]}
            >
              <Input placeholder="请输入借出人" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="rentlist"
              label="借出节点"
              rules={[{ required: true, message: '请选择借出节点' }]}
            >
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Please select"
              >
                {children}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="renttime"
              label="借出时间"
              rules={[{ required: true, message: '请选择借出时间范围' }]}
            >
              <DatePicker.RangePicker
                style={{ width: '100%' }}
                getPopupContainer={trigger => trigger.parentNode}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

const PageRentModalForm = (raw) => {
  const [visible, setVisible] = useState(false);
  console.log('raw: ', raw.raw);

  const onCreateRent = values => {
    console.log('创建租借信息: ', values);

    axios.post('/add_rent', {
      renter: values.renter,
      rentpurpose: values.rentpurpose,
      renttime: values.renttime,
      rentlist: values.rentlist,

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

  };



  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        <PlusOutlined /> 借出登记
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreateRent}
        onCancel={() => {
          setVisible(false);
        }}
        freenodelist={raw.raw}
      />
    </div>
  );
};


export default PageRentModalForm;