import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseWithCode } from '@customTypes/http';
import { Demonstrate } from '@customTypes/demonstrate';

@Injectable({
    providedIn: 'root'
})
export class DemonstrateAPI {
    private readonly demonstrateCreatePath = "/demonstrate/create-or-update";

    constructor(private http: HttpClient) {

    }

    public createDemonstrate(demo: Demonstrate) {
        return this.http.post<ResponseWithCode<string>>(this.demonstrateCreatePath, demo)
    }
}