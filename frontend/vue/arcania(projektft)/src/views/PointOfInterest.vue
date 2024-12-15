<template>
  <div class="flex w-full justify-between items-center mb-8">
    <h1 class="text-2xl font-semibold text-gray-900">Points Of interest</h1>
    <BaseButton :type="ButtonType.PRIMARY" text="Add New Poi" @click="isCreateModalOpen = true" />
  </div>

  <BaseTable :headers="PoiHeader" :data="PoiStore.Pois" />

  <BaseModal
    :is-open="isCreateModalOpen"
    :is-primary-button-disabled="PoiStore.isLoading"
    primary-button-text="Create"
    title="Create new city"
    description="This is a create new city modal"
    @on-close="closeCreateModal"
    @on-action-click="addNewPoi"
  >
    <div class="sm:flex sm:items-start">
      <div
        class="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:mx-0 sm:size-10"
      >
        <component :is="BuildingStorefrontIcon" class="size-6 text-indigo-600" aria-hidden="true" />
      </div>
      <div class="flex flex-col gap-y-8 ml-4">
        <h1 class="text-3xl font-semibold text-gray-900">Adding New City</h1>

        <div class="flex flex-col gap-y-4 w-[300px]">
          <BaseInput
            v-model="newPoi.name"
            :type="InputType.TEXT"
            label="Name"
            placeholder="Add your new poi's name..."
          />
          <BaseInput
            v-model="newPoi.description"
            :type="InputType.TEXT"
            label="Description"
            placeholder="Add your new poi's description..."
          />
          <BaseInput
            v-model="newPoi.cityid"
            :type="InputType.NUMBER"
            label="cityid"
            placeholder="Add your poi's home cityid"
          />
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BaseModal from '@/components/base/BaseModal.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { BuildingStorefrontIcon } from '@heroicons/vue/24/outline'
import { InputType } from '@/types/input'
import { ButtonType } from '@/types/button'

import { usePoiStore } from '@/stores/poi'
import type { Poi } from '@/types/Poi'

const PoiStore = usePoiStore()

const PoiHeader = ref([
  { label: 'Name', key: 'name' as keyof Poi },
  { label: 'Description', key: 'description' as keyof Poi },
  { label: 'Population', key: 'population' as keyof Poi },
  { label: 'cityid', key: 'cityid' as keyof Poi },
])

const isCreateModalOpen = ref(false)

const newPoi = ref(initializeNewPoi())

function initializeNewPoi() {
  return {
    name: '',
    description: '',
    cityid: 0,
  }
}

function closeCreateModal() {
  isCreateModalOpen.value = false
  newPoi.value = initializeNewPoi()
}

async function addNewPoi() {
  PoiStore.setIsLoading(true)
  await PoiStore.addPoi(newPoi.value)
  closeCreateModal()
  PoiStore.setIsLoading(false)
}

onBeforeMount(async () => {
  await PoiStore.getPois()
})
</script>
