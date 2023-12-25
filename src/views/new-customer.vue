<script setup>
import RouterLink from '../components/ui/router-link.vue'
import Heading from '../components/ui/heading.vue'
import { FormKit } from '@formkit/vue'
import CustomersService from '../services/CustomersService'
import { useRouter } from 'vue-router'

defineProps({
  title: {
    type: String
  }
})

const router = useRouter()

const handleSubmit = async (data) => {
  try {
    data.status = true
    await CustomersService.addCustomer(data)
    router.push({ name: 'home' })
  } catch (error) {
    console.log(error?.response?.data)
  }
}

</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink :to="'home'"> Back </RouterLink>
    </div>

    <Heading>
      {{ title }}
    </Heading>

    <div class="max-w-2xl mx-auto mt-10 bg-white shadow">
      <div class="mx-auto md:w-3/4 px-6 py-12">
        <FormKit 
          type="form" 
          submit-label="Add Customer"
          @submit="handleSubmit" 
        >
          <FormKit
            type="text"
            label="Name"
            placeholder="John"
            validation="required"
            :validation-messages="{ required: 'Name is required' }"
            name="name"
          />
          <FormKit
            type="text"
            label="Last Name"
            placeholder="Doe"
            validation="required"
            :validation-messages="{ required: 'Last Name is required' }"
            name="last_name"
          />
          <FormKit
            type="email"
            label="Email"
            placeholder="johndoe@example.com"
            validation="required | email"
            :validation-messages="{ required: 'Email is required', email: 'Email is invalid' }"
            name="email"
          />

          <FormKit
            type="text"
            label="Phone Number"
            placeholder="Phone Number: 123-456-7890"
            validation="required | matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
            :validation-messages="{ matches: 'Phone Number is invalid' }"
            name="phone_number"
          />

          <FormKit
            type="text"
            label="Name Company"
            placeholder="Inc."
            name="company_name"
          />

          <FormKit
            type="text"
            label="Job"
            placeholder="Software Engineer"
            name="job"
          />

        </FormKit>
      </div>
    </div>
  </div>
</template>

<style>
  .formkit-wrapper {
    max-width: 100%;
  }
</style>