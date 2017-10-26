/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Table, Input, Button, Icon } from 'antd';

import { Tree } from 'antd';
const TreeNode = Tree.TreeNode;


class SearchTable extends React.Component {
    onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  }
    state = {
        check: ['5','4']
    };
  onCheck = (checkedKeys, info) => {
    console.log(checkedKeys)
    this.setState({ check: checkedKeys });
  }
  render() {
    return (
      <Tree
        checkable
        defaultExpandAll
//      defaultExpandedKeys={['0-0-0', '0-0-1']}
//      defaultSelectedKeys={['0-0-0', '0-0-1']}
        checkedKeys={this.state.check}
        onSelect={this.onSelect}
        onCheck={this.onCheck}
      >
        <TreeNode title="parent 1" key="1">
          <TreeNode title="parent 1-0" key="2" >
            <TreeNode title="leaf" key="3"  />
            <TreeNode title="leaf" key="4" />
          </TreeNode>
          <TreeNode title="parent 1-1" key="5">
            <TreeNode title={<span style={{ color: '#08c' }}>sss</span>} key="6" />
          </TreeNode>
        </TreeNode>
      </Tree>
    );
  }
}

export default SearchTable;