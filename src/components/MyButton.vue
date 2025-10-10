<!-- src/components/MyButton.vue -->
<template>
  <button type="button" :class="classes" @click="$emit('click')">
    {{ label }}
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  // 按钮的文字内容
  label: {
    type: String,
    required: true,
  },
  // 是否是主要按钮
  primary: {
    type: Boolean,
    default: false,
  },
  // 按钮尺寸
  size: {
    type: String,
    validator: function (value) {
      return ['small', 'medium', 'large'].indexOf(value) !== -1;
    },
    default: 'medium',
  },
});

defineEmits(['click']); // 定义click事件

const classes = computed(() => ({
  'storybook-button': true,
  'storybook-button--primary': props.primary,
  'storybook-button--secondary': !props.primary,
  [`storybook-button--${props.size}`]: true,
}));
</script>

<style scoped>
.storybook-button {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
}
.storybook-button--primary {
  color: white;
  background-color: #1ea7fd;
}
.storybook-button--secondary {
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
}
.storybook-button--small {
  font-size: 12px;
  padding: 10px 16px;
}
.storybook-button--medium {
  font-size: 14px;
  padding: 11px 20px;
}
.storybook-button--large {
  font-size: 16px;
  padding: 12px 24px;
}
</style>