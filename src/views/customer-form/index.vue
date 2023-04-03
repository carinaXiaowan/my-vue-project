<template>
  <Form :form="form">
    <SchemaField :schema="schema" />
    <Submit @submit="onSubmit">提交</Submit>
  </Form>
</template>

<script lang="ts">
import { createForm } from '@formily/core';
import { createSchemaField } from '@formily/vue';
import { Form, FormItem, FormLayout, Input, Select, Submit } from '@formily/antdv-x3';
import { schema } from './schema';

const form = createForm();
const { SchemaField } = createSchemaField({
  components: {
    FormItem,
    FormLayout,
    Input,
    Select,
    Submit
  }
});

export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Form, SchemaField, Submit },
  data() {
    return {
      form,
      schema
    };
  },
  methods: {
    onSubmit(value: string) {
      console.log(value);
    }
  }
};
</script>
