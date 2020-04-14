import React, { PureComponent } from 'react';
import { Button, Col, Form, Input, Row } from 'antd';
import styles from '../Orders/OrderList.less';

const FormItem = Form.Item;

@Form.create()
class UserSearch extends PureComponent {
  state = {
    search_loading: false,
  };

  enterLoading = e => {
    console.log(e);
    this.setState({ search_loading: true });
    setTimeout(() => {
      this.setState({ search_loading: false });
    }, 2000);
  };

  renderSimpleForm() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Form layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={6} sm={24}>
            <FormItem label="用户ID">
              {getFieldDecorator('user_id')(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col md={6} sm={24}>
            <FormItem label="姓名">
              {getFieldDecorator('nickname')(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col md={6} sm={24}>
            <FormItem label="手机号">
              {getFieldDecorator('mobile_no')(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col md={6} sm={24}>
            <span className={styles.submitButtons}>
              <Button
                type="primary"
                loading={this.state.search_loading}
                onClick={this.enterLoading}
              >
                查询
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
                重置
              </Button>
            </span>
          </Col>
        </Row>
      </Form>
    );
  }

  render() {
    return <div className={styles.tableListForm}>{this.renderSimpleForm()}</div>;
  }
}
export default UserSearch;
