import { Injectable } from '@angular/core';
import { DemonstrateAPI } from '@api/demonstrate.api';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class EditorService {

    private demoMeta = new BehaviorSubject<DemoMeta>(null);
    private code: CodeInfo = {
        html: '',
        css: '',
        js: ''
    };
    private id: string;
    private meta: DemoMeta;
    private codeObser = new BehaviorSubject<CodeInfo>(null);

    public demoMeta$ = this.demoMeta.asObservable();
    public code$ = this.codeObser.asObservable();

    constructor(private demonstrateApi: DemonstrateAPI) {

    }

    setDemoMeta(meta: DemoMeta) {
        this.meta = meta;
    }

    setCode(code: CodeInfo) {
        this.code = code;
    }

    saveNewDemo() {
        const meta = this.meta;
        if (meta && meta.name) {
            this.demonstrateApi.createDemonstrate({
                id: this.id,
                name: meta.name,
                desc: meta.desc,
                html: this.code.html,
                css: this.code.css,
                js: this.code.js
            }).subscribe(res => {
                if (res && res.code === 20000) {
                    this.id = res.data;
                    this.demoMeta.next({
                        id: this.id,
                        name: meta.name,
                        desc: meta.desc
                    });
                }
            })
        }
    }

    getDeomInfoById(id: string) {
        this.demonstrateApi.fetchDemonstrateInfo(id).subscribe(res => {
            if (res && res.code === 20000) {
                this.id = res.data.id;
                const meta = {
                    id: res.data.id,
                    name: res.data.name,
                    desc: res.data.desc || ''
                };
                const code = {
                    html: res.data.html,
                    css: res.data.css,
                    js: res.data.js
                };
                this.meta = meta;
                this.demoMeta.next(meta);
                this.setCode(code)
                this.codeObser.next(code);
            }
        })
    }

    clear() {
        this.id = "";
        this.codeObser.next({
            html: '',
            css: '',
            js: ''
        })
        this.demoMeta.next({
            id: '',
            name: '',
            desc: ''
        });
    }

}

export interface DemoMeta {
    id?: string;
    name?: string;
    desc?: string;
}

export interface CodeInfo {
    html?: string;
    css?: string;
    js?: string;
}