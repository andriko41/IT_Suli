<template>
  <div class="flex flex-col gap-y-1 w-full">
    <label>{{ label }}</label>
    <div class="flex items-center gap-x-1">
      <input
        v-model="modelValue"
        :type="localInputType"
        :placeholder
        class="border border-black w-full"
      />
      <div v-if="hasPasswordIcon">
        <EyeSlashIcon
          v-if="localInputType === InputType.PASSWORD"
          class="eye-icon"
          @click="changeType(InputType.TEXT)"
        />
        <EyeIcon v-else class="eye-icon" @click="changeType(InputType.PASSWORD)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputType } from '@/types/input'
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline'

interface Props {
  type: InputType
  placeholder?: string
  label?: string
  hasPasswordIcon?: boolean
}

const props = defineProps<Props>()

const modelValue = defineModel()

const localInputType = ref(props.type)

function changeType(type: InputType) {
  localInputType.value = type
}
</script>

<style scoped>
.eye-icon {
  @apply cursor-pointer size-4 text-black stroke-black;
}
</style>
