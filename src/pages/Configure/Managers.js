import React, { PureComponent } from 'react';
import { Card, Table } from 'antd';
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
      title: '订单ID',
      dataIndex: 'id',
      render: text => <a href="#">{text}</a>,
    },
    {
      title: '姓名',
      className: 'column-money',
      dataIndex: 'name',
    },
    {
      title: '手机号',
      dataIndex: 'mobile_no',
    },
    {
      title: '手机号',
      dataIndex: 'callNo',
    },
    {
      title: '手机号',
      dataIndex: 'status',
    },
    {
      title: '手机号',
      dataIndex: 'create_at',
    },
    {
      title: '手机号',
      dataIndex: 'order_verify_at',
    },
  ];

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'configure/fetch',
    });
  }

  render() {
    const {
      loading,
      configure: { data },
    } = this.props;
    const { list } = data.data;
    const paginationParams = {
      page: 1,
      pageSize: 10,
    };
    return (
      <PageHeaderWrapper title="管理员列表">
        <Card bordered={false}>
          <Table
            bordered
            dataSource={list}
            columns={this.columns}
            rowKey="id"
            size="small"
            loading={loading}
            pagination={paginationParams}
          />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Managers;
