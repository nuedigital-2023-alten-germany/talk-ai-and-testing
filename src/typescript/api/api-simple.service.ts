export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export class ApiService {
  private readonly baseUrl = "https://jsonplaceholder.typicode.com";

  async fetchAll(): Promise<Array<User>> {
    try {
      const response = await fetch(`${this.baseUrl}/users`);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw new Error("Network error: " + error.message);
      }
    }
    return Promise.reject();
  }

  async fetchOne(id: number): Promise<User> {
    try {
      const response = await fetch(`${this.baseUrl}/users/${id}`);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw new Error("Network error: " + error.message);
      }
    }
    return Promise.reject();
  }
}
