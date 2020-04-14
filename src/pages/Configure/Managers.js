import React, { PureComponent } from 'react';
import { Card, Icon, Tabs } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import CreateUser from './CreateUser'
import UserList from './UserList';

const TabPane = Tabs.TabPane;

class Managers extends PureComponent {
  render() {
    return (
      <PageHeaderWrapper title="管理员列表">
        <Card bordered={false}>
          <Tabs defaultActiveKey="1">
            <TabPane tab={<span><Icon type="smile-o" />用户列表</span>} key="1">
              <UserList />
            </TabPane>
            <TabPane tab={<span><Icon type="user-add" />新建用户</span>} key="2">
              <CreateUser />
            </TabPane>
          </Tabs>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Managers;
