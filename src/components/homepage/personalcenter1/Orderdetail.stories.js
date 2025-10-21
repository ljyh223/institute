import Orderdetail from './Orderdetail.vue';

// 1. 默认导出：定义组件的元信息
export default {
  // Storybook 侧边栏中的路径和名称
  title: 'homepage/personalcenter1/Orderdetail.vue', // 使用一个更清晰的标题
  // 指定要测试的组件
  component: Orderdetail,
  // 自动生成组件文档
  tags: ['autodocs'],
  // 定义可供故事使用的参数类型，提供交互式控件
  argTypes: {
    visible: {
      control: 'boolean',
      description: '控制对话框的显示/隐藏 (v-model)',
    },
    orderData: {
      control: 'object',
      description: '订单详情的数据对象',
    },
    'update:visible': {
      action: 'update:visible',
      description: '当对话框关闭时触发的 v-model 更新事件',
    }
  },
};

const baseDetailData = {
  product: {
    name: '高性能无线蓝牙降噪耳机Pro',
    spec: '颜色: 星空灰',
    price: 899.00,
    quantity: 1,
    imageUrl: 'https://via.placeholder.com/150/92c952', // 使用一个占位图片URL
  },
  shippingInfo: {
    name: '王先生',
    phone: '138****8888',
    address: '北京市海淀区中关村大街1号'
  },
  createTime: '2023-10-26 14:30:00',
  paymentMethod: '微信支付',
  paymentAmount: 899.00,
  paymentTime: '2023-10-26 14:31:00',
  orderNumber: '2023102614300012345'
};

// 3. 编写第一个故事：已完成的订单 (带收货信息)
export const CompletedOrder = {
  name: '已完成的订单', // 在 Storybook 中显示的故事名称
  args: {
    // ---- 这里就是为组件添加的参数 ----
    visible: true, // 让对话框默认显示，方便预览
    orderData: {
      ...baseDetailData, // 展开基础数据
      status: '已完成',    // 覆盖特定状态的数据
      statusCode: 'completed',
    },
  },
};

// 4. 编写第二个故事：已取消的订单 (不带收货信息)
export const CancelledOrder = {
  name: '已取消的订单 (无收货地址)',
  args: {
    visible: true,
    orderData: {
      ...baseDetailData,
      status: '已取消',
      statusCode: 'cancelled',
      paymentTime: 'N/A', // 已取消的订单可能没有支付时间
      shippingInfo: null, // 设置为 null 来测试无收货信息的显示情况
      product: { // 针对在线课程等无实体物品的场景
        ...baseDetailData.product,
        spec: '在线课程 - 无需配送',
      }
    },
  },
};

// 5. 编写第三个故事：待付款的订单
export const PendingOrder = {
  name: '待付款的订单',
  args: {
    visible: true,
    orderData: {
      ...baseDetailData,
      status: '待付款',
      statusCode: 'pending',
      paymentTime: 'N/A',
      shippingInfo: null,
    },
  },
};