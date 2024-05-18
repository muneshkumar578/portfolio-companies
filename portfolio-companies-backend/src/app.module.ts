import { Module } from '@nestjs/common';
import { CompaniesModule } from './companies/companies.module';

@Module({
  imports: [CompaniesModule], // import the module into root module
  exports: [CompaniesModule] // re-export the module if you want to use it in another module
})
export class AppModule {}
