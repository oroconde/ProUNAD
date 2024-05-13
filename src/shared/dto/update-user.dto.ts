import { IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUsuarioDto {
  @ApiProperty({
    description: 'Nombre del usuario',
    example: 'John Doe',
    required: false,
  })
  @IsString()
  readonly nombre?: string;

  @ApiProperty({
    description: 'Correo electrónico del usuario',
    example: 'john@example.com',
    required: false,
  })
  @IsEmail()
  readonly email?: string;

  @ApiProperty({
    description: 'Contraseña del usuario',
    example: 'password123',
    required: false,
  })
  @IsString()
  readonly contrasena?: string;
}
