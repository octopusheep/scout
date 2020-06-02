import React from 'react';
import { TreeSelect } from 'antd';

const { SHOW_PARENT } = TreeSelect;

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
      {
        title: 'Child Node6',
        value: '0-1-3',
        key: '0-1-3',
      },
      {
        title: 'Child Node7',
        value: '0-1-4',
        key: '0-1-4',
      },
      {
        title: 'Child Node8',
        value: '0-1-5',
        key: '0-1-5',
      },
      {
        title: 'Child Node9',
        value: '0-1-6',
        key: '0-1-6',
      },
    ],
  },
];

class PageRentTreeSelect extends React.Component {
  state = {
    value: ['0-0-0'],
  };

  onChange = value => {
    console.log('onChange ', value);
    this.setState({ value });
  };

  render() {
    const tProps = {
      treeData,
      value: this.state.value,
      onChange: this.onChange,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      placeholder: 'Please select',
      style: {
        width: '100%',
      },
    };
    return <TreeSelect {...tProps} />;
  }
}

export default PageRentTreeSelect;