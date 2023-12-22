import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class DevagramApiIntercetador implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');
        let novaReq = req;
        if(token) {
            novaReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`)
            })
        }

        return next.handle(novaReq);
    }
    
}