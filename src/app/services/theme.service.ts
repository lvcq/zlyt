import { Injectable } from '@angular/core';
import { ThemeItem } from '@customTypes/theme';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private themeStorageKey = 'zlyt-theme-storge-current-key';
    private themes: ThemeItem[] = [
        {
            id: 'custom-dark',
            title: '暗黑',
            path: './assets/themes/custom-dark.css'
        }, {
            id: 'dark-pink',
            title: '暗黑-粉',
            path: './assets/themes/dark-pink.css'
        }
    ];
    public currentTheme = new BehaviorSubject<ThemeItem>(null);
    public currentTheme$ = this.currentTheme.asObservable();
    constructor() {
        this.getUserTheme();
    }

    public getThemes() {
        return this.themes;
    }

    public setCurrentTheme(id: string) {
        const item = this.themes.find(item => item.id === id);
        if (item) {
            localStorage.setItem(this.themeStorageKey, id);
            this.currentTheme.next(item);
        }
    }

    private getUserTheme() {
        let id = localStorage.getItem(this.themeStorageKey);
        const item = this.themes.find(item => item.id === id);
        if (item) {
            this.currentTheme.next(item);
        } else {
            this.currentTheme.next(this.themes[0]);
        }
    }
}
