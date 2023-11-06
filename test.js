const PetStore = require('./petstore');

describe('Petstore API', () => {
  let petstore;

  beforeEach(() => {
    petstore = new PetStore();
  });

  it('Добавление питомца', async () => {
    const pet = {
        id: Math.floor(Math.random() * 1000),
        name: `Pet${Math.floor(Math.random() * 1000)}`,
        status: ['available', 'pending', 'sold'][Math.floor(Math.random() * 3)]  
    };

    const response = await petstore.addPet(pet);

    expect(response.status).toBe(200);
    expect(response.data).toMatchObject(pet);


  });


it('Поиск питомца по id', async () => {
    const pet = {
        id: Math.floor(Math.random() * 1000),
        name: `Pet${Math.floor(Math.random() * 1000)}`,
        status: ['available', 'pending', 'sold'][Math.floor(Math.random() * 3)]  
    };
  
    await petstore.addPet(pet);
  
    const response = await petstore.findPetById(pet.id);
  
    expect(response.status).toBe(200);
    expect(response.data).toMatchObject(pet);
  });
  

  it('Поиск питомца по статусу', async () => {
    const pet = {
        id: Math.floor(Math.random() * 1000),
        name: `Pet${Math.floor(Math.random() * 1000)}`,
        status: ['available', 'pending', 'sold'][Math.floor(Math.random() * 3)]  
    };
  
    await petstore.addPet(pet);
  
    const response = await petstore.findPetByStatus(pet.status);
  
    expect(response.status).toBe(200);
    // Проверка, что ответ содержит хотя бы одного питомца с нужным статусом
    expect(response.data).toEqual(expect.arrayContaining([expect.objectContaining({ status: pet.status })]));
  });  


it('Редактирование питомца', async () => {
    const pet = {
        id: Math.floor(Math.random() * 1000),
        name: `Pet${Math.floor(Math.random() * 1000)}`,
        status: ['available', 'pending', 'sold'][Math.floor(Math.random() * 3)]  
    };
  
    const updatedPet = {
        id: Math.floor(Math.random() * 1000),
        name: `Pet${Math.floor(Math.random() * 1000)}`,
        status: ['available', 'pending', 'sold'][Math.floor(Math.random() * 3)]  
    };
  
    await petstore.addPet(pet);
  
    const response = await petstore.updatePet(updatedPet);
  
    expect(response.status).toBe(200);
    expect(response.data).toMatchObject(updatedPet);
  });
  

  it('Удаление питомца', async () => {
    const pet = {
        id: Math.floor(Math.random() * 1000),
        name: `Pet${Math.floor(Math.random() * 1000)}`,
        status: ['available', 'pending', 'sold'][Math.floor(Math.random() * 3)]  
    };
  
    await petstore.addPet(pet);
  
    const response = await petstore.deletePet(pet.id);
  
    expect(response.status).toBe(200);
  });
  
  
  
// Загрузка изображения питомца
it('should upload a pet image', async () => {
    try {
      const pet = {
        id: Math.floor(Math.random() * 1000),
        name: `Pet${Math.floor(Math.random() * 1000)}`,
        status: ['available', 'pending', 'sold'][Math.floor(Math.random() * 3)]  
      };
  
      await petstore.addPet(pet);
  
      const imageResponse = await petstore.uploadPetImage(pet.id, './dog.jpg');
  
      expect(imageResponse.status).toBe(200);
      // Проверка, что в ответе есть URL загруженного изображения
      expect(imageResponse.data).toHaveProperty('url');
    } catch (error) {
      console.error(error); 
    }
  });

});