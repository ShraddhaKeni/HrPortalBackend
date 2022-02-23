import { Module } from '@nestjs/common';
import { ApplicationTrackService } from './application-track.service';
import { ApplicationTrackController } from './application-track.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationTrackRepository } from './application-track.repository';

@Module({
  controllers: [ApplicationTrackController],
  providers: [ApplicationTrackService],
  imports:[
    TypeOrmModule.forFeature([ApplicationTrackRepository])
  ]
})
export class ApplicationTrackModule {}
