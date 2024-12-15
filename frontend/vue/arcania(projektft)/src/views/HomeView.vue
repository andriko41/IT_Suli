<template>
  <h1 class="text-2xl font-weight: 700">Welcome to the Styxa IT page!</h1>
  <div class="h-56 grid grid-cols-3 gap-4 content-center">
    <div></div>
    <div class="flex flex-col w-96 gap-y-8 justify-center">
      <p></p>
      <p></p>
      <h1 class="flex justify-center text-2xl font-weight: 700">User Login</h1>
      <p></p>
    </div>
    <div></div>
    <div></div>
    <div class="flex flex-col w-96 gap-y-4 justify-center">
      <p class="flex justify-center">UserName</p>
      <div class="flex justify-center"><BaseInput :type="InputType.TEXT" /></div>
      <p class="flex justify-center">Password</p>
      <div class="flex justify-center w-[404px]">
        <BaseInput :type="InputType.TEXT" hasPasswordIcon />
      </div>
      <div class="flex justify-center"><BaseButton text="Login" :type="ButtonType.PRIMARY" /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'

import { InputType } from '@/types/input'
import { ButtonType } from '@/types/button'
</script>
