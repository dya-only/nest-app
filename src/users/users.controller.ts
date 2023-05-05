import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './entities/users.entity';
import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-users.dto';
const log = console.log;

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    getAll(): Promise<Users[]> {
        return this.usersService.findAll()
    }

    @Get(':username')
    getOne(@Param() username: string): Promise<Users> {
        return this.usersService.findOne(username)
    }

    @Post()
    create(@Body() user: CreateUserDto) {
        log(user)
        return this.usersService.create(user)
    }

    @Delete(':username')
    removeOne(@Param() username: string): Promise<void> {
        return this.usersService.remove(username)
    }

    @Patch(':username')
    updateOne(@Param() username: string, @Body() user: UpdateUserDto) {
        return this.usersService.update(username, user)
    } 
}