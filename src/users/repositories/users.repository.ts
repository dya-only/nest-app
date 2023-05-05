import { Injectable } from "@nestjs/common";
import { Users } from "../entities/users.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UsersRepository extends Repository<Users> {
    constructor(
        @InjectRepository(Users)
        repository: Repository<Users>
    ) {
        super(repository.target, repository.manager, repository.queryRunner);
    }
}