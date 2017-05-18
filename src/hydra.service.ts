import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ViolationCollection } from './violation.collection';
import { HydraError } from './hydra.error';

const HEADERS: Headers = new Headers({ 'Content-Type': 'application/json' });
const OPTIONS: RequestOptions = new RequestOptions({ headers: HEADERS });

@Injectable()
export class HydraService {

    constructor(private http: Http) { }

    private _jsonCollections: string[] = [];

    public query(url: string, filter: any = null, useCache: boolean = true): Observable<any> {

        let searchString = this.parseFilter(filter);
        let urlWithParams: string = url.concat(searchString);

        if (useCache && this._jsonCollections[urlWithParams]) {
            return Observable.of(this._jsonCollections[urlWithParams]);
        }

        return this.http.get(urlWithParams)
            .map((response: Response) => {
                this._jsonCollections[urlWithParams] = response.json();
                return response.json();
            })
            .catch(this.handleError);
    }

    public remove(id: string): Observable<any> {
        return this.http.delete(id)
            .catch(this.handleError);
    }

    public get(id: string): Observable<any> {
        return this.http.get(id)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    public update(id: string, values: any): Observable<any> {
        let jsonString = JSON.stringify(values);
        return this.http.put(id, jsonString, OPTIONS)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    public create(url: string, values: any): Observable<any> {
        let jsonString = JSON.stringify(values);
        return this.http.post(url, jsonString, OPTIONS)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    public clearCache(): void {
        this._jsonCollections = [];
    }

    private parseFilter(filter: any): string {
        if (filter) {
            let filterStrings: string[] = [];
            for (let key in filter) {
                filterStrings.push(key.concat('=', filter[key]));
            }
            return filterStrings.length > 0 ? '?'.concat(filterStrings.join('&')) : '';
        }
        return "";
    }

    private handleError(error: Response) {
        let jsonObject: any = error.json();
        let errorType: string = jsonObject['@type'];
        let errorInstance: any;

        if (errorType == 'Error') {
            errorInstance = HydraError.parseFromTypedJSON(jsonObject, HydraError);
        }

        if (errorType == 'ConstraintViolationList') {
            errorInstance = ViolationCollection.parseFromTypedJSON(jsonObject, ViolationCollection);
        }

        if (errorInstance) {
            return Observable.throw(errorInstance);
        }

        throw new Error(jsonObject);
    }
}