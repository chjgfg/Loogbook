<script setup="adder_info">
  import {onMounted, reactive, ref} from 'vue'

  const options = [
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
  ]

  let alertDialog = ref(false);
  const form = reactive({
    name: '',
    addrinfo: '',
    postal_code: '',
    phone: '',
    addr: '',
  });
  const one = reactive({
    name: '',
    addrinfo: '',
    postal_code: '',
    phone: '',
    addr: '',
  });
  const onSubmit = () => {
    console.log('submit!')
  };

  const handleClick = (item) => {
    console.log(item);
    alertDialog.value = true;
    one.name = item.user;
    one.addrinfo = item.addrinfo;
    one.postal_code = item.zip;
    one.phone = item.phone;
    one.addr = item.address;
  };

  const tableData = ([
    {
      user: '吕贻峰',
      address: '浙江省 杭州市 上城区 四季青街道',
      addrinfo: '水湘路水湘人家东苑5单元3栋402室',
      zip: '000000',
      phone: '86-15993596769',
    },
    {
      user: '吕贻峰',
      address: '浙江省 杭州市 上城区 四季青街道',
      addrinfo: '水湘路水湘人家东苑5单元3栋402室',
      zip: '000000',
      phone: '86-15993596769',
    },
    {
      user: '吕贻峰',
      address: '浙江省 杭州市 上城区 四季青街道',
      addrinfo: '水湘路水湘人家东苑5单元3栋402室',
      zip: '000000',
      phone: '86-15993596769',
    },
    {
      user: '吕贻峰',
      address: '浙江省 杭州市 上城区 四季青街道',
      addrinfo: '水湘路水湘人家东苑5单元3栋402室',
      zip: '000000',
      phone: '86-15993596769',
    }
  ])
</script>
<template>
  <div class="addr">
    <div class="form">
      <el-form :model="form" label-width="120px">
        <el-form-item label="地址信息">
          <el-input v-model="form.addr"/>
        </el-form-item>
        <el-form-item label="详细地址">
          <el-input v-model="form.addrinfo"/>
        </el-form-item>
        <el-form-item label="邮政编码">
          <el-input v-model="form.postal_code"/>
        </el-form-item>
        <el-form-item label="个人所在地">
          <el-cascader :options="form.options" clearable/>
        </el-form-item>
        <el-form-item label="收货人姓名">
          <el-input v-model="form.name"/>
        </el-form-item>
        <el-form-item label="固定电话">
          <el-input v-model="form.phone"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-divider/>
    <el-table :data="tableData" style="width: 100%" @cell-click="handleClick">
      <el-table-column prop="user" label="收件人" width="80"/>
      <el-table-column prop="address" label="地址信息" width="270"/>
      <el-table-column prop="addrinfo" label="详细地址" width="270"/>
      <el-table-column prop="zip" label="邮编" width="100"/>
      <el-table-column prop="phone" label="电话" width="200"/>
    </el-table>

    <el-dialog draggable width="750px" :modal="false" :show-close="false" class="publish-comment" title="title"
               align-center v-model="alertDialog" :close-on-click-modal="false">
      <el-form :model="form" label-width="120px">
        <el-form-item label="地址信息">
          <el-input v-model="one.addr"/>
        </el-form-item>
        <el-form-item label="详细地址">
          <el-input v-model="one.addrinfo"/>
        </el-form-item>
        <el-form-item label="邮政编码:">
          <el-input v-model="one.postal_code"/>
        </el-form-item>
        <el-form-item label="收货人姓名:">
          <el-input v-model="one.name"/>
        </el-form-item>
        <el-form-item label="固定电话:">
          <el-input v-model="one.phone"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button @click="alertDialog = !alertDialog">Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<style scoped>
  .addr {
    width: 100%;
    margin-left: 10%;
    margin-top: 10%;
  }

  .form {
    width: 80%;
  }
</style>
