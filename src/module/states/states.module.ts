import { Module } from '@nestjs/common';
import { StatesService } from './states.service';
import { StatesController } from './states.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatesRepository } from './states.repository';

@Module({
  imports: [TypeOrmModule.forFeature([StatesRepository])],
  controllers: [StatesController],
  providers: [StatesService]
})
export class StatesModule {}
