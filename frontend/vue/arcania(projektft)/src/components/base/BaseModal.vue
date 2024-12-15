<template>
  <TransitionRoot as="template" :show="open">
    <Dialog class="relative z-10" @close="onModalClose">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500/75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <slot></slot>
              </div>
              <div class="bg-gray-50 px-4 py-3 flex justify-end gap-x-2 sm:px-6">
                <BaseButton text="Cancel" :type="ButtonType.SECONDARY" @click="onModalClose" />
                <BaseButton
                  :text="primaryButtonText"
                  :type="ButtonType.PRIMARY"
                  :disabled="isPrimaryButtonDisabled"
                  @click="emit('onActionClick')"
                />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { computed, type Component } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { ButtonType } from '@/types/button'

interface Props {
  isOpen: boolean
  primaryButtonText: string
  isPrimaryButtonDisabled?: boolean
  title: string
  description?: string
  icon?: Component
}

const props = defineProps<Props>()

const emit = defineEmits(['onActionClick', 'onClose'])

const open = computed(() => props.isOpen)

function onModalClose() {
  emit('onClose')
}
</script>
