import { Injectable } from '@nestjs/common';
import { ApplicationTrackRepository } from './application-track.repository';
import { CreateApplicationTrackDto } from './dto/create-application-track.dto';
import { UpdateApplicationTrackDto } from './dto/update-application-track.dto';

@Injectable()
export class ApplicationTrackService {
  constructor(private readonly applicationTrackRepository: ApplicationTrackRepository){}

  create(createApplicationTrackDto: CreateApplicationTrackDto) {
    return this.applicationTrackRepository.createJobApplication(createApplicationTrackDto)
  }

  findAll() {
    return this.applicationTrackRepository.findAllJobApplications()
  }

  findOne(id: number) {
    return this.applicationTrackRepository.findJobApplications(id)
  }

  update(id: number, updateApplicationTrackDto: UpdateApplicationTrackDto) {
    return this.applicationTrackRepository.updateJobApplication(id, updateApplicationTrackDto)
  }

  remove(id: number) {
    return this.applicationTrackRepository.deleteApplicationTrack(id)
  }
}
