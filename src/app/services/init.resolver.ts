import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { ThemeService } from './theme.service';

@Injectable({
    providedIn: 'root'
})

export class InitResolver implements Resolve<boolean>{
    constructor(
        private themeService: ThemeService
    ) {

    }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.themeService.currentTheme$.pipe(filter(res => !!res), take(1), map(res => !!res))
    }

}