import React,{ PureComponent } from 'react'
import {Input, Item,Option,Form, Row, Col, Select, Button, Spin} from 'antd'
class CreateUser extends PureComponent{
    render() {
      return(
        <Form labelAlign='left'>
          <Spin>
            <Row gutter={24}>
              <Col xs={24} sm={8}>
                <Item label='性 别'>
                  <Select placeholder='请选择'>
                    <Option value='male'>男</Option>
                    <Option value='female'>女</Option>
                  </Select>
                </Item>
              </Col>

              <Col xs={24} sm={8}>
                <Item label='性 别'>
                    <Select placeholder='请选择'>
                      <Option value='male'>男</Option>
                      <Option value='female'>女</Option>
                    </Select>
                </Item>
              </Col>

            </Row>

            <Row type='flex' justify='center'>
              <Col xs={{span: 6}} sm={{span: 3}}><Button type='danger'>重 置</Button></Col>

              <Col xs={{span: 6}} sm={{span: 3}}><Button type='primary'>立即提交</Button></Col>

            </Row>
          </Spin>
        </Form>
      )
    }
}
export default CreateUser;
