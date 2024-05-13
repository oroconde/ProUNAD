import { Module } from '@nestjs/common';
import { UsuarioService } from './users.service';
import { UsuarioController } from './users.controllers';
import { Usuario } from 'src/shared/entities/Usuario';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([Usuario], 'profesional'),
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsersModule {}
