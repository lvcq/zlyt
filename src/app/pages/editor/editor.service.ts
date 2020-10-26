import { Injectable } from '@angular/core';
import { DemonstrateAPI } from '@api/demonstrate.api';

@Injectable()
export class EditorService {

    private demoMeta: DemoMeta;
    private code: CodeInfo;
    private id: string;

    constructor(private demonstrateApi: DemonstrateAPI) {

    }

    setDemoMeta(meta: DemoMeta) {
        this.demoMeta = meta;
    }

    setCode(code: CodeInfo) {
        this.code = code;
    }

    saveNewDemo() {
        if (this.demoMeta.name) {
            this.demonstrateApi.createDemonstrate({
                id: this.id,
                name: this.demoMeta.name,
                desc: this.demoMeta.desc,
                html: this.code.html,
                css: this.code.css,
                js: this.code.js
            }).subscribe(res => {
                if (res && res.code === 20000) {
                    this.id = res.data;
                }
            })
        }
    }

}

export interface DemoMeta {
    name?: string;
    desc?: string;
}

export interface CodeInfo {
    html?: string;
    css?: string;
    js?: string;
}