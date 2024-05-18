import { Controller, Get } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { Company } from './interfaces/company.interface';
import { CompanyCreateRequest, CompanyListRequest } from './dto/company-request.dtos';

@Controller('companies')
export class CompaniesController {

    constructor(private companiesService: CompaniesService) {}

    @Get()
    getCompanies() : Company[] {
        return this.companiesService.getCompanies();
    }
}
