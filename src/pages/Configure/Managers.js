import React, { PureComponent } from 'react';
import { Card, Table, Alert, Divider, Menu, Dropdown, Icon, Button } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { connect } from 'dva';

/* eslint react/no-multi-comp:0 */
@connect(({ configure, loading }) => ({
  configure,
  loading: loading.models.configure,
}))
class Managers extends PureComponent {
  columns = [
    {
      title: '用户ID',
      dataIndex: 'id',
      render: text => <a href="#">{text}</a>,
    },
    {
      title: '姓名',
      className: 'column-money',
      dataIndex: 'name',
    },
    {
      title: '性别',
      dataIndex: 'mobile_no',
    },
    {
      title: '手机号',
      dataIndex: 'callNo',
    },
    {
      title: '邮箱',
      dataIndex: 'status',
    },
    {
      title: '注册时间',
      dataIndex: 'create_at',
    },
    {
      title: '操作',
      render: (e, record) => (
        <div>
          <Button type="primary" size="small">
            编辑
          </Button>
          <Divider type="vertical" />
          <Dropdown overlay={() => this.menu(record)}>
            <Button type="primary" ghost size="small">
              更多
              <Icon type="down" />
            </Button>
          </Dropdown>
        </div>
      ),
    },
  ];

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'configure/fetch',
    });
  }

  menu = record => (
    <Menu
      onClick={key => {
        console.log(key, record);
      }}
    >
      <Menu.Item key="1">
        <a href="#">删 除</a>
      </Menu.Item>

      <Menu.Item key="2">
        <a href="#">分配角色</a>
      </Menu.Item>

      <Menu.Item key="3">
        <a href="#">分配权限</a>
      </Menu.Item>
    </Menu>
  );

  render() {
    const {
      loading,
      configure: {
        data: { data },
      },
    } = this.props;
    const { list = [], pagination } = data;

    return (
      <PageHeaderWrapper title="管理员列表">
        <Card bordered={false}>
          <Alert
            message={
              <span>
                系统检索出总数据 <a href="#">{pagination.pageSize}</a> 条
              </span>
            }
            type="info"
            showIcon
            closeText="X"
            style={{ marginBottom: '1%' }}
          />
          <Table
            dataSource={list}
            columns={this.columns}
            rowKey="id"
            loading={loading}
            pagination={pagination}
          />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Managers;
