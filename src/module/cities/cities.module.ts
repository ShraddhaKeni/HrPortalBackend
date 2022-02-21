import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CitiesController } from './cities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitiesRepository } from './cities.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CitiesRepository])],
  controllers: [CitiesController],
  providers: [CitiesService]
})
export class CitiesModule {}
