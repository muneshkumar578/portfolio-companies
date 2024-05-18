import { Injectable, Scope } from '@nestjs/common'
import { Company } from './interfaces/company.interface';

@Injectable({scope: Scope.REQUEST})
export class CompaniesService{
    private companies : Company[]  = [
        {id: 1, name: 'Company 1'},
        {id: 2, name: 'Company 2'},
        {id: 3, name: 'Company 3'},
        {id: 4, name: 'Company 4'},
    ]

    getCompanies(): Company[] {
        return this.companies;
    }
}