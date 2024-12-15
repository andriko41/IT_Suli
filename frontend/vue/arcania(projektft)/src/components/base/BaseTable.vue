<template>
  <div class="flow-root">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div class="overflow-hidden shadow ring-1 ring-black/5 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-300">
            <thead class="bg-gray-50">
              <tr>
                <th
                  v-for="header in headers"
                  :key="header.key"
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  {{ header.label }}
                </th>
                <th
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody v-if="data.length" class="divide-y divide-gray-200 bg-white">
              <tr
                v-for="(tableData, index) in data"
                :key="index"
                @click="onRowClick(tableData?.id)"
              >
                <td
                  v-for="header in headers"
                  :key="header.key"
                  class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                >
                  <img v-if="header.key === 'img'" :src="getImgSrc(tableData, header.key)" />
                  <p v-else>{{ tableData?.[header.key] || '' }}</p>
                </td>
                <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"></td>
              </tr>
            </tbody>
            <tbody v-else class="bg-white">
              <tr>
                <td
                  class="py-4 pl-4 pr-3 text-sm align-middle font-medium text-gray-900 sm:pl-6"
                  colspan="3"
                >
                  <div class="flex items-center justify-center w-full flex-1">
                    <BaseSpinner />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" generic="T extends Record<string, unknown>">
import BaseSpinner from '@/components/base/BaseSpinner.vue'

interface Props {
  headers: {
    label: string
    key: keyof T
  }[]
  data: T[]
}

defineProps<Props>()

const emit = defineEmits(['onRowClick'])

function getImgSrc(tableData: T, key: keyof T): string {
  return tableData?.[key] as string
}

function onRowClick(id?: number | unknown): void {
  if (id === undefined) {
    return
  }
  emit('onRowClick', id)
}
</script>
