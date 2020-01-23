import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpHandler ,HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class CustomInterceptor implements HttpInterceptor { 

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("interceptor")
      /*  request = request.clone({
            withCredentials: true
        });*/

        return next.handle(request);
    }
}