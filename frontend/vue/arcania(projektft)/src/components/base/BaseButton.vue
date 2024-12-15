<template>
  <button :class="['rounded-lg py-2 px-4', buttonStyle, disabledButtonStyle]" :disabled="disabled">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import { ButtonType } from '@/types/button'
import { computed } from 'vue'

interface Props {
  text: string
  type: ButtonType
  disabled?: boolean
}

const props = defineProps<Props>()

const buttonStyle = computed(() =>
  props.type === ButtonType.PRIMARY
    ? 'bg-blue-500 text-white hover:bg-blue-700'
    : props.type === ButtonType.SECONDARY
      ? 'bg-gray-500 text-white hover:bg-gray-700'
      : '',
)

const disabledButtonStyle = computed(() =>
  props.disabled
    ? 'bg-gray-300 text-gray-500 hover:bg-gray-300 hover:text-gray-500 cursor-not-allowed'
    : '',
)
</script>
