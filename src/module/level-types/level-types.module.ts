import { Module } from '@nestjs/common';
import { LevelTypesService } from './level-types.service';
import { LevelTypesController } from './level-types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LevelTypeRepository } from './level-types.repository';

@Module({
  controllers: [LevelTypesController],
  providers: [LevelTypesService],
  imports: [TypeOrmModule.forFeature([LevelTypeRepository])]
})
export class LevelTypesModule {}
