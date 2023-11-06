const axios = require('axios');

class PetStore {
  constructor() {
    this.baseURL = 'https://petstore.swagger.io/v2';
  }

  async addPet(pet) {
    return await axios.post(`${this.baseURL}/pet`, pet);
  }

  async updatePet(pet) {
    return await axios.put(`${this.baseURL}/pet`, pet);
  }

  async deletePet(petId) {
    return await axios.delete(`${this.baseURL}/pet/${petId}`);
  }

  async findPetById(petId) {
    return await axios.get(`${this.baseURL}/pet/${petId}`);
  }

  async findPetByStatus(status) {
    return await axios.get(`${this.baseURL}/pet/findByStatus?status=${status}`);
  }

  async uploadPetImage(petId, imageData) {
    return await axios.post(`${this.baseURL}/pet/${petId}/uploadImage`, imageData, {
      headers: {'Content-Type': 'multipart/form-data'}
    });
  }
}

module.exports = PetStore;