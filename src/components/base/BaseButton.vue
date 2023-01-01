<template>
  <button :class="`b-button ${type} ${size} ${reversed ? 'reversed' : ''}`">
    <base-icon
      :name="name"
      v-if="name"
      :fill="fill"
      :width="width"
      :height="height"
    />
    {{ title }}
  </button>
</template>

<script setup>
import BaseIcon from "./BaseIcon.vue";

const props = defineProps({
  title: String,
  type: {
    type: String,
    default: "primary",
    validator: (value) => {
      return ["primary", "outline"].includes(value);
    },
  },
  size: {
    type: String,
    default: "small",
    validator: (value) => {
      return ["small", "medium", "large"].includes(value);
    },
  },
  reversed: {
    type: Boolean,
    default: false,
  },
  name: String,
  width: [String, Number],
  height: [String, Number],
  fill: String,
});
</script>

<style lang="sass" scoped>
.b-button
  outline: none
  border: none
  background-color: transparent
  cursor: pointer
  user-select: none
  white-space: nowrap
  display: flex
  align-items: center
  gap: 8px

.b-button.primary
  border-radius: 8px
  background-color: $primary-700
  color: #fff
  margin-left: 20px
  &:hover
    background-color: $primary-800
  &:active
    box-shadow: 0 0 0 6px $primary-200

.b-button.small
  height: 34px
  padding: 0 12px
</style>
