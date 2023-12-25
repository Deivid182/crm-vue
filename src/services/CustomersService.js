import api from '../lib/api';

export default {
  getCustomers() {
    return api.get('/customers');
  },

  addCustomer(customer) {
    return api.post('/customers', customer);
  },
  getCustomer(id) {
    return api.get(`/customers/${id}`);
  },
  updateCustomer(id, customer) {
    return api.patch(`/customers/${id}`, customer);
  },
  updateStatus(id, status) {
    return api.patch(`/customers/${id}/status`, { status });
  },
  deleteCustomer(id) {
    return api.delete(`/customers/${id}`);
  }
}