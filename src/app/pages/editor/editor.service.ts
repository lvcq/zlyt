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

    public demoMeta$ = this.demoMeta.asObservable();

    constructor(private demonstrateApi: DemonstrateAPI) {

    }

    setDemoMeta(meta: DemoMeta) {
        this.demoMeta.next(meta);
    }

    setCode(code: CodeInfo) {
        this.code = code;
    }

    saveNewDemo() {
        const meta = this.demoMeta.getValue();
        if (meta && meta.name) {
            this.demonstrateApi.createDemonstrate({
                id: this.id,
                name: meta.name,
                desc: meta.desc,
                html: this.code.html && this.code.html.replace(/\n|\r|\s/g, ''),
                css: this.code.css && this.code.css.replace(/\n|\r|\s/g, ''),
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
                this.demoMeta.next({
                    id: res.data.id,
                    name: res.data.name,
                    desc: res.data.desc || ''
                })
            }
        })
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