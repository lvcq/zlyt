import { Injectable } from '@angular/core';
import { ThemeItem } from '@customTypes/theme';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private themeContainer: HTMLLinkElement;
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
        }, {
            id: 'teal-purple',
            title: '茶绿-深紫',
            path: './assets/themes/teal-purple.css'
        }
    ];
    private currentTheme = new BehaviorSubject<ThemeItem>(null);
    public currentTheme$ = this.currentTheme.asObservable();

    constructor() {
    }

    public getThemes() {
        return this.themes;
    }

    public setThemeContainer(themeLink: HTMLLinkElement) {
        this.themeContainer = themeLink;
        this.getUserTheme();
    }

    public setCurrentTheme(id: string) {
        const item = this.themes.find(item => item.id === id);
        if (item) {
            localStorage.setItem(this.themeStorageKey, id);
            this.currentTheme.next(item);
            this.applyTheme(item);
        }
    }

    private getUserTheme() {
        let id = localStorage.getItem(this.themeStorageKey);
        let item = this.themes.find(item => item.id === id) || this.themes[0];
        this.currentTheme.next(item);
        this.applyTheme(item);
    }

    private applyTheme(theme: ThemeItem) {
        if (theme) {
            if (this.themeContainer) {
                this.themeContainer.setAttribute('href', theme.path);
            }
        }
    }
}
