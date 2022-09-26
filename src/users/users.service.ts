import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}
  // repo stand for repository 

  // create function to insert 
  create(email: string, password: string) {
    const user = this.repo.create({ email, password });

    return this.repo.save(user);
  }
  // findone function to serach by id 
  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOne({ 
      where: { 
        id: id
      } 
    });
  }

  // find by email 
  find(email: string) {
    return this.repo.find({ 
      where: { 
        email: email
      } 
    });
  }

  // update function is for the id to be updated 
  async update(id: number, attrs: Partial<User>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  // remove will destroy it 
  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return this.repo.remove(user);
  }
}
