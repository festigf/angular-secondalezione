import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpHandler ,HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class CustomInterceptor implements HttpInterceptor { 

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("interceptor")
        //'Content-Type': 'application/json; charset=utf-8',
       const r = request.clone({
          
            withCredentials: true,
            setHeaders: {
                'Access-Control-Allow-Headers': 'Authorization',
                'Access-Control-Allow-Credentials': `true`,
                Authorization: `Basic ZmVzdGlnZjpBbHRhRm9ybWF6aW9uZTIwMjA=`,
                
                'Access-Control-Allow-Origin': '//localhost:4200',
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
              }

        });

        return next.handle(r);
    }
}