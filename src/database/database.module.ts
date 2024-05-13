import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

// Entities
import { Calificacion } from 'src/shared/entities/Calificacion';
import { CategoriaProyecto } from 'src/shared/entities/CategoriaProyecto';
import { Educacion } from 'src/shared/entities/Educacion';
import { ExperienciaLaboral } from 'src/shared/entities/ExperienciaLaboral';
import { Habilidad } from 'src/shared/entities/Habilidad';
import { PerfilProfesional } from 'src/shared/entities/PerfilProfesional';
import { Profesion } from 'src/shared/entities/Profesion';
import { Proyecto } from 'src/shared/entities/Proyecto';
import { ProyectoCategoria } from 'src/shared/entities/ProyectoCategoria';
import { Ranking } from 'src/shared/entities/Ranking';
import { Rol } from 'src/shared/entities/Rol';
import { Usuario } from 'src/shared/entities/Usuario';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      name: 'profesional',
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      synchronize: false,
      entities: [
        Calificacion,
        CategoriaProyecto,
        Educacion,
        ExperienciaLaboral,
        Habilidad,
        PerfilProfesional,
        Profesion,
        Proyecto,
        ProyectoCategoria,
        Ranking,
        Rol,
        Usuario,
      ],
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
