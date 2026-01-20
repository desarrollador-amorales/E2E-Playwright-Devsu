import { APIRequestContext, expect } from '@playwright/test';

export class PetApi {
  constructor(private request: APIRequestContext) {}

  async addPet(pet: any) {
    const response = await this.request.post('v2/pet', {
      data: pet
    });

    expect(response.status()).toBe(200);
    console.log('URL POST:', response.url());
    console.log(`Status POST recibido: ${response.status()}`);
    return response.json();
  }

  async getPetById(id: number) {
    const response = await this.request.get(`v2/pet/${id}`);
    expect(response.status()).toBe(200);
    console.log('URL GET:', response.url());
    console.log(`Status GET recibido: ${response.status()}`);
    return response.json();
  }

  async updatePet(pet: any) {
    const response = await this.request.put('v2/pet', {
      data: pet
    });

    expect(response.status()).toBe(200);
    console.log('URL PUT:', response.url());
    console.log(`Status PUT recibido: ${response.status()}`);
    return response.json();
  }

  async getPetByStatus(status: string) {
    const response = await this.request.get(`v2/pet/findByStatus?status=${status}`);
    expect(response.status()).toBe(200);
    console.log('URL GetByStatus:', response.url());
    console.log(`Status GetByStatus recibido: ${response.status()}`);
    return response.json();
  }
}
