<template>
  <div class="flex flex-col items-center justify-center h-full">
    <h1 class="text-4xl font-bold">City Detail View</h1>

    <h2>{{ localCity.name }}</h2>
    <p>{{ localCity.description }}</p>
    <p>{{ localCity.population }}</p>
    <BaseButton :type="ButtonType.PRIMARY" text="Edit City" @click="iseditCityModalOpen = true" />
    <BaseButton
      :type="ButtonType.PRIMARY"
      text="Delete City"
      @click="isdeleteCityModalOpen = true"
    />
  </div>
  <BaseModal
    :is-open="isdeleteCityModalOpen"
    :is-primary-button-disabled="cityStore.isLoading"
    primary-button-text="delete"
    title="delete city"
    description="This is a delete city modal"
    @on-close="closeDeleteModal"
    @on-action-click="deleteThisCity"
  >
    <div class="sm:flex sm:items-start">
      <div
        class="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:mx-0 sm:size-10"
      >
        <component :is="HomeIcon" class="size-6 text-indigo-600" aria-hidden="true" />
      </div>
      <div class="flex flex-col gap-y-8 ml-4">
        <h1 class="text-3xl font-semibold text-gray-900">Are you sure you want to delete City</h1>
      </div>
    </div>
  </BaseModal>
  <BaseModal
    :is-open="iseditCityModalOpen"
    :is-primary-button-disabled="cityStore.isLoading"
    primary-button-text="edit"
    title="edit new city"
    description="This is a edit  city modal"
    @on-close="closeEditModal"
    @on-action-click="editThisCity"
  >
    <div class="sm:flex sm:items-start">
      <div
        class="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:mx-0 sm:size-10"
      >
        <component :is="HomeIcon" class="size-6 text-indigo-600" aria-hidden="true" />
      </div>
      <div class="flex flex-col gap-y-8 ml-4">
        <h1 class="text-3xl font-semibold text-gray-900">Edit City</h1>

        <div class="flex flex-col w-[300px]">
          <BaseInput v-model="editedcity.name" :type="InputType.TEXT" label="Name" placeholder="" />
          <BaseInput
            v-model="editedcity.description"
            :type="InputType.TEXT"
            label="Description"
            placeholder="Add your new city's description..."
          />
          <BaseInput
            v-model="editedcity.population"
            :type="InputType.NUMBER"
            label="Population"
            placeholder="Add your new city's population..."
          />
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import { useCityStore } from '@/stores/city'
import { computed, onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseModal from '@/components/base/BaseModal.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import { InputType } from '@/types/input'
import { ButtonType } from '@/types/button'
import { HomeIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'

const router = useRouter()

const route = useRoute()

const cityId = Number(route.params.id)

const cityStore = useCityStore()

const localCity = computed(() => cityStore.city)

const editedcity = ref(initializeNewEditedCity())

const iseditCityModalOpen = ref(false)
const isdeleteCityModalOpen = ref(false)

function initializeNewEditedCity() {
  return {
    name: '',
    description: '',
    population: 0,
  }
}

function closeEditModal() {
  iseditCityModalOpen.value = false
  editedcity.value = initializeNewEditedCity()
}

function closeDeleteModal() {
  isdeleteCityModalOpen.value = false
  editedcity.value = initializeNewEditedCity()
}

async function editThisCity() {
  cityStore.setIsLoading(true)
  await cityStore.editCity(editedcity.value)
  closeEditModal()
  cityStore.setIsLoading(false)
  router.push('/cities')
}

async function deleteThisCity() {
  cityStore.setIsLoading(true)
  await cityStore.deleteCity(cityId)
  closeEditModal()
  cityStore.setIsLoading(false)
  router.push('/cities')
}

onBeforeMount(async () => {
  const cityId = Number(route.params.id)
  await cityStore.getCityById(cityId)
  console.log(cityStore.city)
})
</script>
