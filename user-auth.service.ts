import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
 
@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
 
  constructor(private http: HttpClient) { }

  getToken(): string | null {
    return localStorage.getItem('token');  // Adjust this based on your app's storage solution
  }
 
 login(payload: any) {
  return this.http.post<any>('/api/login', payload).subscribe(response => {
    if (response.token) {
      localStorage.setItem('token', response.token);  // Save the token to localStorage
    }
  });
}
 
  register(data:any): Promise<any>{
    let payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      password_confirmation: data.confirmPassword
    }
     
    return axios.post('/api/register', payload)
  }
 
  getUser(): Promise<any>{
 
    return axios.get('/api/user', { headers:{Authorization: 'Bearer ' + localStorage.getItem('token')}})
  }
 
  logout(): Promise<any> {
    const token = localStorage.getItem('token');
  
    if (!token) {
      return Promise.reject('No token found'); // Reject if no token is found
    }
  
    return axios
      .post('/api/logout', {}, {
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token in Authorization header
        },
      })
      .then((response) => {
        // If logout is successful, remove the token from localStorage
        localStorage.removeItem('token');
        return response.data;
      })
      .catch((error) => {
        // Handle error if the request fails
        return Promise.reject(error);
      });
  }
  
}