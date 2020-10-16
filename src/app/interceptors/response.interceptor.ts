import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HttpAbnormalService } from '@services/http-abnormal.service';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(
    private httpAbnormalService: HttpAbnormalService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(map(response => {
      if (response instanceof HttpResponse) {
        if (response.body.code === 10002) {
          this.httpAbnormalService.setSessionExpired();
        }
      }
      return response;
    }), filter(response => {
      if (response instanceof HttpResponse) {
        return response.body.code === 20000
      }
      return true;
    }));
  }
}
