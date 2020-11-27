import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseWithCode } from '@customTypes/http';
import { Demonstrate, DemonstrateItem } from '@customTypes/demonstrate';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DemonstrateAPI {
    private readonly demonstrateCreatePath = "/zlyt/demonstrate/create-or-update";
    private readonly demonstrateInfoPath = "/zlyt/demonstrate/info/";
    private readonly selfDemonstratesPath = "/zlyt/demonstrate/self-demos";

    constructor(private http: HttpClient) {

    }

    public createDemonstrate(demo: Demonstrate) {
        return this.http.post<ResponseWithCode<string>>(this.demonstrateCreatePath, demo)
    }

    public fetchDemonstrateInfo(id: string): Observable<ResponseWithCode<Demonstrate>> {
        return this.http.get<ResponseWithCode<Demonstrate>>(`${this.demonstrateInfoPath}${id}`)
    }

    public fetchSelfDemonstrates():Observable<ResponseWithCode<DemonstrateItem[]>>{
        return this.http.get<ResponseWithCode<DemonstrateItem[]>>(this.selfDemonstratesPath);
    }
}