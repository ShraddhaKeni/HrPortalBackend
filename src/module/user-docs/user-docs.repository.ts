import { EntityRepository, Repository } from "typeorm";
import { UserDoc } from "./entities/user-doc.entity";

@EntityRepository(UserDoc)
export class UserDocsRepository extends Repository<UserDoc>{

}