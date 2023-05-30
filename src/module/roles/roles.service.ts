import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RolesRepository } from './roles.repository';

@Injectable()
export class RolesService {
  constructor(private readonly rolesRepository: RolesRepository){}
  create(createRoleDto: CreateRoleDto) {
    return this.rolesRepository.createRole(createRoleDto);
  }

  findAll() {
    return this.rolesRepository.findAllRoles();
  }

  findOne(id: number) {
    return this.rolesRepository.findRoleData(id);
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.rolesRepository.updateRole(id,updateRoleDto);
  }

  remove(id: number) {
    return this.rolesRepository.deleteRole(id);
  }
}
