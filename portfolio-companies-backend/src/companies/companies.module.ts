import { Module } from '@nestjs/common';
import { CompaniesController } from './companies.controller';
import { CompaniesService } from './companies.service';

@Module({
  controllers: [CompaniesController],
  providers: [CompaniesService], // DI
  exports: [CompaniesService] // export if you want to use it in another module
})
export class CompaniesModule {}