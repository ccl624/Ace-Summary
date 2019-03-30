import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AppService {
    constructor(private http: Http) { }

    getFileTree(path) {
        const request: any = { params: {} };
        request.params.path = path;
        console.log(request);
        
        return this.http.get('api/treeData', request)
    }
}