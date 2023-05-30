import { ConflictException, HttpException, HttpStatus, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
import { Role } from "./entities/role.entity";


@EntityRepository(Role)
export class RolesRepository extends Repository<Role>{
    async createRole(createRoleDto: CreateRoleDto): Promise<Role>{
        const { name } = createRoleDto;
        const role = this.create({ name });
        try {
            this.save(role);
            return role;
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException('Role already exist');
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    async findAllRoles(): Promise<Role[]> {
        return new Promise(resolve => {
            const roles = this.find({
                where:{
                    status:true
                }
            });
            resolve(roles);
        });
    }

    async findRoleData(role_id:number): Promise<Role>{
        return new Promise((resolve, reject) => {
            const role = this.findOne(role_id);
            role.then(resp => {
                if(resp){
                    resolve(role);
                }
                else{
                    reject(new HttpException('Role not found', HttpStatus.NOT_FOUND)); 
                }
            })
        });
    }

    async updateRole(role_id: number, updateRoleDto: UpdateRoleDto): Promise<Role>{
        return new Promise (resolve => {
            this.update(role_id,updateRoleDto).then(
                resp => {
                    const role = this.findOne({
                        where:{
                            id:role_id
                        }
                    });
                    resolve(role);
                }
            )
        })
    }

    async deleteRole(role_id:number):Promise<Role>{
        return new Promise((resolve, reject) => {
            const role = this.update(role_id,{status:false});
            role.then(response=>{
                const fineRole = this.findOne({
                    where:{
                        id:role_id
                    }
                })
                fineRole.then(resp=>{
                    if(resp)
                    {
                        resolve(fineRole)
                    }
                    else{
                        reject(new HttpException('Role not found', HttpStatus.NOT_FOUND)); 
                    }
                })
                .catch(err=>{
                    reject(new HttpException('Role not found', HttpStatus.NOT_FOUND)); 
                })
            })
            .catch(err=>{
                reject(new HttpException('Role not found', HttpStatus.NOT_FOUND)); 
            })
            
        });
    }

}