import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountriesRepository } from './countries.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CountriesRepository])],
  controllers: [CountriesController],
  providers: [CountriesService]
})
export class CountriesModule {}
