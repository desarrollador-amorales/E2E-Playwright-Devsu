import { test, expect } from '@playwright/test';
import { PetApi } from '../pages/PetApi';
import petData from '../data/petData.json';

test.describe('PetStore API Tests', () => {
  let petApi: PetApi;

  test.beforeEach(async ({ request }) => {
    petApi = new PetApi(request);
  });

  //Caso de prueba ejecutado por dependencia en el flujo completo
  test('Flujo completo de mascota', async () => {
  const created = await petApi.addPet(petData.pet);
  expect(created.name).toBe(petData.pet.name);

  const fetched = await petApi.getPetById(created.id);
  expect(fetched.id).toBe(created.id);

  const updated = await petApi.updatePet(petData.updated);
  expect(updated.status).toBe('sold');

  const pets = await petApi.getPetByStatus('sold');
  expect(pets.length).toBeGreaterThan(0);
});
});
