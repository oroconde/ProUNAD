import { IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'Nombre del usuario', example: 'John Doe' })
  @IsString()
  readonly nombre: string;

  @ApiProperty({
    description: 'Correo electrónico del usuario',
    example: 'john@example.com',
  })
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    description: 'Contraseña del usuario',
    example: 'password123',
  })
  @IsString()
  readonly contrasena: string;
}
