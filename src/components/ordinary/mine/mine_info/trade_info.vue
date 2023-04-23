<script setup="trade_info">
  import {onMounted, ref, reactive} from 'vue'

  const radio1 = ref('1');
  const value1 = ref('');
  const options = reactive([
    {
      value: 'guide',
      label: 'Guide',
      children: [
        {
          value: 'disciplines',
          label: 'Disciplines',
          children: [
            {
              value: 'consistency',
              label: 'Consistency',
            },
            {
              value: 'feedback',
              label: 'Feedback',
            },
            {
              value: 'efficiency',
              label: 'Efficiency',
            },
            {
              value: 'controllability',
              label: 'Controllability',
            },
          ],
        },
        {
          value: 'navigation',
          label: 'Navigation',
          children: [
            {
              value: 'side nav',
              label: 'Side Navigation',
            },
            {
              value: 'top nav',
              label: 'Top Navigation',
            },
          ],
        },
      ],
    },
    {
      value: 'component',
      label: 'Component',
      children: [
        {
          value: 'basic',
          label: 'Basic',
          children: [
            {
              value: 'layout',
              label: 'Layout',
            },
            {
              value: 'color',
              label: 'Color',
            },
            {
              value: 'typography',
              label: 'Typography',
            },
            {
              value: 'icon',
              label: 'Icon',
            },
            {
              value: 'button',
              label: 'Button',
            },
          ],
        },
        {
          value: 'form',
          label: 'Form',
          children: [
            {
              value: 'radio',
              label: 'Radio',
            },
            {
              value: 'checkbox',
              label: 'Checkbox',
            },
            {
              value: 'input',
              label: 'Input',
            },
            {
              value: 'input-number',
              label: 'InputNumber',
            },
            {
              value: 'select',
              label: 'Select',
            },
            {
              value: 'cascader',
              label: 'Cascader',
            },
            {
              value: 'switch',
              label: 'Switch',
            },
            {
              value: 'slider',
              label: 'Slider',
            },
            {
              value: 'time-picker',
              label: 'TimePicker',
            },
            {
              value: 'date-picker',
              label: 'DatePicker',
            },
            {
              value: 'datetime-picker',
              label: 'DateTimePicker',
            },
            {
              value: 'upload',
              label: 'Upload',
            },
            {
              value: 'rate',
              label: 'Rate',
            },
            {
              value: 'form',
              label: 'Form',
            },
          ],
        },
        {
          value: 'data',
          label: 'Data',
          children: [
            {
              value: 'table',
              label: 'Table',
            },
            {
              value: 'tag',
              label: 'Tag',
            },
            {
              value: 'progress',
              label: 'Progress',
            },
            {
              value: 'tree',
              label: 'Tree',
            },
            {
              value: 'pagination',
              label: 'Pagination',
            },
            {
              value: 'badge',
              label: 'Badge',
            },
          ],
        },
        {
          value: 'notice',
          label: 'Notice',
          children: [
            {
              value: 'alert',
              label: 'Alert',
            },
            {
              value: 'loading',
              label: 'Loading',
            },
            {
              value: 'message',
              label: 'Message',
            },
            {
              value: 'message-box',
              label: 'MessageBox',
            },
            {
              value: 'notification',
              label: 'Notification',
            },
          ],
        },
        {
          value: 'navigation',
          label: 'Navigation',
          children: [
            {
              value: 'menu',
              label: 'Menu',
            },
            {
              value: 'tabs',
              label: 'Tabs',
            },
            {
              value: 'breadcrumb',
              label: 'Breadcrumb',
            },
            {
              value: 'dropdown',
              label: 'Dropdown',
            },
            {
              value: 'steps',
              label: 'Steps',
            },
          ],
        },
        {
          value: 'others',
          label: 'Others',
          children: [
            {
              value: 'dialog',
              label: 'Dialog',
            },
            {
              value: 'tooltip',
              label: 'Tooltip',
            },
            {
              value: 'popover',
              label: 'Popover',
            },
            {
              value: 'card',
              label: 'Card',
            },
            {
              value: 'carousel',
              label: 'Carousel',
            },
            {
              value: 'collapse',
              label: 'Collapse',
            },
          ],
        },
      ],
    },
    {
      value: 'resource',
      label: 'Resource',
      children: [
        {
          value: 'axure',
          label: 'Axure Components',
        },
        {
          value: 'sketch',
          label: 'Sketch Templates',
        },
        {
          value: 'docs',
          label: 'Design Documentation',
        },
      ],
    },
  ]);


  const form = reactive({
    name: '',
    email: '',
    region: '',
    resource: '',
    desc: '',
    options: '',
    postal_code: '',
    phone: '',
    addr: '',
  });

  const onSubmit = () => {
    console.log('submit!')
  }
</script>
<template>

  <div class="addr">
    <div class="addr-info">
      <el-form :model="form" label-width="120px">
        <el-form-item label="真实姓名">
          <el-input v-model="form.name"/>
        </el-form-item>
        <el-form-item label="邮箱地址">
          <el-input v-model="form.email"/>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="form.resource">
            <el-radio label="男"/>
            <el-radio label="女"/>
            <el-radio label="妖"/>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="生日">
          <el-date-picker v-model="form.date" type="date" placeholder="Pick a date" style="width: 100%"/>
        </el-form-item>
        <el-form-item label="个人所在地:">
          <el-cascader :options="form.options" clearable/>
        </el-form-item>
        <el-form-item label="详细地址:">
          <el-input v-model="form.addr"/>
        </el-form-item>
        <el-form-item label="邮政编码:">
          <el-input v-model="form.postal_code"/>
        </el-form-item>
        <el-form-item label="固定电话:">
          <el-input v-model="form.phone"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>

</template>
<style scoped>
  .addr {
    width: 100%;
    /*margin-left: 5%;*/
    margin-top: 10%;
  }

  .addr-info {
    width: 50%;
    margin-left: 10%;
  }
</style>
