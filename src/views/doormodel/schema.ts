export const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street'
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street'
  }
];

export const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation'
  }
];

export const formSchema = [
  {
    title: '活动名称',
    key: 'act_name',
    type: 'a-input',
    span: '8',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '请输入'
        }
      ]
    },
    fieldProps: {
      placeholder: '请输入'
    }
  },
  {
    title: '活动类型',
    key: 'act_type',
    type: 'a-select',
    span: '8',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '请选择'
        }
      ]
    },
    fieldProps: {
      options: [
        {
          label: '拉新',
          value: 1
        },
        {
          label: '冲单',
          value: 2
        },
        {
          label: '回馈',
          value: 3
        }
      ]
    }
  }
];
