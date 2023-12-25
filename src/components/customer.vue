<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  customer: {
    type: Object,
    required: true
  }
})

const status = computed(() => {
  if (props.customer.status) {
    return 'Active'
  } else {
    return 'Inactive'
  }
})


defineEmits(['update-status', 'delete-customer'])

</script>

<template>
  <tr>
    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
      <p class="font-medium text-gray-900">{{ customer.name }}</p>
      <p class="text-gray-500">{{ customer.email }}</p>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      <p class="text-gray-900 font-bold">{{ customer.company }}</p>
      <p class="text-gray-600">{{ customer.job }}</p>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-white">
      <button
        class="px-2 py-1 rounded-full"
        :class="status === 'Active' ? 'bg-green-600' : 'bg-red-600'"
        @click="$emit('update-status', customer.id, status === 'Active' ? false : true)"
      >
        {{ status }}
      </button>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 flex items-center gap-4">
      <RouterLink :to="'/edit-customer/' + customer.id" class="text-indigo-600 hover:text-indigo-900">
        Edit
      </RouterLink>
      <button 
        @click="$emit('delete-customer', customer.id)"
        class="text-red-600 hover:text-red-900">Delete</button>
    </td>
  </tr>
</template>
