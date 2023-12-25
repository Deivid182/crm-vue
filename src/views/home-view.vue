<script setup>
import RouterLink from '../components/ui/router-link.vue'
import Heading from '../components/ui/heading.vue'
import { onMounted, ref, computed } from 'vue'
import CustomersService from '../services/CustomersService'
import Customer from '../components/customer.vue'

const customers = ref([])

onMounted(() => {
  const getCustomers = async () => {
    try {
      const { data } = await CustomersService.getCustomers()
      customers.value = data
    } catch (error) {
      console.log(error)
    }
  }

  getCustomers()
})

defineProps({
  title: {
    type: String
  }
})

const updateStatus = async (id, status) => {
  try {
    await CustomersService.updateCustomer(id, { status })
    const i = customers.value.findIndex((customer) => customer.id === id)
    customers.value[i].status = status
  } catch (error) {
    console.log(error)
  }
}

const deleteCustomer = async (id) => {
  try {
    await CustomersService.deleteCustomer(id)
    const i = customers.value.findIndex((customer) => customer.id === id)
    customers.value.splice(i, 1)
  } catch (error) {
    console.log(error)
  }
}

const isThereCustomers = computed(() => {
  return customers.value.length > 0
})
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink :to="'new-customer'"> Add Customer </RouterLink>
    </div>

    <Heading>
      {{ title }}
    </Heading>

    <div v-if="isThereCustomers" class="flow-root mx-auto mt-10 p-5 bg-white shadow">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">
                  Name
                </th>
                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">
                  Company
                </th>
                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">
                  Status
                </th>
                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <Customer
                v-for="customer in customers"
                :key="customer.id"
                :customer="customer"
                @update-status="updateStatus"
                @delete-customer="deleteCustomer"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="text-center text-2xl mt-10 font-semibold">No customers yet</p>
    </div>
  </div>
</template>
