import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { UserAuthService } from '../services/user-auth.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})

export class AuthInterceptor implements HttpInterceptor {
  constructor(private userauth: UserAuthService, private router: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.headers.get('No-Auth') == 'True') {
      return next.handle(req.clone());
    }
    const token = this.userauth.getToken();
    req = this.addtoken(req, token);
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.router.navigate(['/login']);
        } else if (err.status === 403) {
          this.router.navigate(['./forbidden']);
        }
        return throwError(() => new Error('test'));
      })
    );
  }
  private addtoken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
