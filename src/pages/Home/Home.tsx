import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { StoreNames } from 'stores/Store';
import Table, { Column } from 'sharedComponents/table/Table';

const users = require('./sampleData.json');
const columns: Column[] = [
  {
    dataKey: 'id',
    label: 'ID',
  },
  {
    dataKey: 'firstName',
    label: 'First name',
  },
  {
    dataKey: 'lastName',
    label: 'Last name',
  },
  {
    dataKey: 'department',
    label: 'Department',
  },
];

interface Props {}

@inject(StoreNames.UserStore)
@observer
class HomePage extends Component<Props> {
  public render() {
    return (
      <div style={{ padding: 20 }}>
        <p>
          Welcome to Elko, {this.props[StoreNames.UserStore].user?.firstName}!
        </p>

        <div style={{ marginTop: 50, width: 700 }}>
          <h3>Users</h3>
          <Table columns={columns} rows={users} uniqueRowIdentifier="id" />
        </div>
      </div>
    );
  }
}

export default HomePage;
