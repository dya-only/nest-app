import { Injectable } from '@nestjs/common';
import { Users } from './entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './repositories/users.repository';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-users.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
    ) {}

    findAll(): Promise<Users[]> {
        return this.usersRepository.find()
    }

    findOne(username: string): Promise<Users> {
        return this.usersRepository.findOneBy({ username })
    }

    async create(user: CreateUserDto) {
        await this.usersRepository.save(user)
    }

    async remove(username: string): Promise<void> {
        await this.usersRepository.delete(username)
    }

    async update(username: string, user: UpdateUserDto) {
        const prevUser = await this.usersRepository.findOneBy({ username })
        let userUpdate = { ...prevUser, ...user }
        await this.usersRepository.save(userUpdate)
    }

}
