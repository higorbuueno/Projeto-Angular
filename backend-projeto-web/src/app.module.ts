import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configDatabaseService } from './config/config.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PizzasModule } from './pizzas/pizzas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configDatabaseService.getTypeOrmConfig()),
    UsuariosModule,
    PizzasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
