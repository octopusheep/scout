
import React from 'react';
import { Drawer, Form, Button, Col, Row, Input, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import PageRentTreeSelect from './PageRentTreeSelect';


class PageRentForm extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showDrawer}>
          <PlusOutlined /> 借出登记
        </Button>
        <Drawer
          title="借出登记"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button onClick={this.onClose} type="primary">
                Submit
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="使用目的"
                  rules={[{ required: true, message: '请输入使用目的' }]}
                >
                  <Input placeholder="请输入使用目的" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="name"
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
                  name="approver"
                  label="借出节点"
                  rules={[{ required: true, message: 'Please choose the approver' }]}
                >
                  <PageRentTreeSelect/>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="dateTime"
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
        </Drawer>
      </>
    );
  }
}

export default PageRentForm;