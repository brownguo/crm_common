import React,{ PureComponent } from 'react';
import { Form, Row, Col, Select,Input } from 'antd';


@Form.create()
class CreateUser extends PureComponent{
    render() {
      return(
        <Form className="ant-advanced-search-form" labelAlign='left'>
          <Row gutter={24}>
            <Col xs={24} sm={8}>
              <Form.Item label='姓 名'>
                <Input placeholder='请输入用户姓名' />
              </Form.Item>
            </Col>
            <Col xs={24} sm={8}>
              <Form.Item label='姓 名'>
                <Input placeholder='请输入用户姓名' />
              </Form.Item>
            </Col>
            <Col xs={24} sm={8}>
              <Form.Item label='姓 名'>
                <Input placeholder='请输入用户姓名' />
              </Form.Item>
            </Col>
            <Col xs={24} sm={8}>
              <Form.Item label='姓 名'>
                <Input placeholder='请输入用户姓名' />
              </Form.Item>
            </Col>
            <Col xs={24} sm={8}>
              <Form.Item label='姓 名'>
                <Input placeholder='请输入用户姓名' />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      )
    }
}
export default CreateUser;
