import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAuthService } from './user-auth.service'; // Adjust the path to your UserAuthService

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: UserAuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Get the token from the UserAuthService
    const token = this.authService.getToken();

    // If a token exists, clone the request and add the Authorization header
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request);
  }
}
