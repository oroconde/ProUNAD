import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../shared/entities/Usuario';

@Injectable()
export class UsuarioService {
  private readonly logger = new Logger(UsuarioService.name);

  constructor(
    @InjectRepository(Usuario, 'profesional')
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  private handleException(
    error: Error,
    methodName: string,
    id?: number,
  ): never {
    if (error instanceof NotFoundException) {
      if (id) {
        this.logger.warn(`Usuario no encontrado. ID: ${id}`);
      }
      throw error;
    }
    this.logger.error(`Error en '${methodName}': ${error}`);
    throw new Error(
      `Error interno del servidor al ${methodName.toLowerCase()}.`,
    );
  }

  async findAll(): Promise<Usuario[]> {
    this.logger.log(
      `Entrando en el método 'findAll' de la clase '${UsuarioService.name}'`,
    );
    try {
      return await this.usuarioRepository.find();
    } catch (error) {
      this.handleException(error, 'findAll');
    }
  }

  async findOne(id: number): Promise<Usuario> {
    this.logger.log(
      `Entrando en el método 'findOne' de la clase '${UsuarioService.name}'. ID: ${id}`,
    );
    try {
      const usuario = await this.usuarioRepository.findOne({ where: { id } });
      if (!usuario) {
        throw new NotFoundException('Usuario no encontrado.');
      }
      return usuario;
    } catch (error) {
      this.handleException(error, 'findOne', id);
    }
  }

  async create(usuario: Partial<Usuario>): Promise<Usuario> {
    this.logger.log(
      `Entrando en el método 'create' de la clase '${UsuarioService.name}'. Datos de entrada: ${JSON.stringify(usuario)}`,
    );
    try {
      const user = this.usuarioRepository.create(usuario);
      return await this.usuarioRepository.save(user);
    } catch (error) {
      this.handleException(error, 'create');
    }
  }

  async update(id: number, usuario: Partial<Usuario>): Promise<Usuario> {
    this.logger.log(
      `Entrando en el método 'update' de la clase '${UsuarioService.name}'. ID: ${id}, Datos de entrada: ${JSON.stringify(usuario)}`,
    );
    try {
      const existingUsuario = await this.usuarioRepository.findOne({
        where: { id },
      });
      if (!existingUsuario) {
        throw new NotFoundException('Usuario no encontrado.');
      }
      await this.usuarioRepository.update(id, usuario);
      return await this.usuarioRepository.findOne({ where: { id } });
    } catch (error) {
      this.handleException(error, 'update', id);
    }
  }

  async remove(id: number): Promise<void> {
    this.logger.log(
      `Entrando en el método 'remove' de la clase '${UsuarioService.name}'. ID: ${id}`,
    );
    try {
      const usuario = await this.usuarioRepository.findOne({ where: { id } });
      if (!usuario) {
        throw new NotFoundException('Usuario no encontrado.');
      }
      await this.usuarioRepository.remove(usuario);
    } catch (error) {
      this.handleException(error, 'remove', id);
    }
  }
}
