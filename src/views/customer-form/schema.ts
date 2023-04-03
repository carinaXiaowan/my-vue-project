export const schema = {
  type: 'object',
  properties: {
    layout: {
      type: 'void',
      'x-component': 'FormLayout',
      'x-component-props': {
        labelCol: 6,
        wrapperCol: 10
      },
      properties: {
        input: {
          type: 'string',
          title: '输入框',
          required: true,
          'x-decorator': 'FormItem',
          'x-decorator-props': {
            tooltip: '123'
          },
          'x-component': 'Input'
        },
        select: {
          type: 'string',
          title: '选择框',
          required: true,
          'x-decorator': 'FormItem',
          'x-component': 'Select',
          'x-component-props': {
            options: [
              {
                label: 'cairna',
                value: 1
              }
            ]
          }
        }
      }
    }
  }
};
