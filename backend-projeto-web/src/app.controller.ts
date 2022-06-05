import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

/*
  Precisamos cumprir requisitos solicitados e demonstrar conhecimento em SQL.
  Portanto, para fins acadêmicos e agilidade no processo de montagem do trabalho:
    • Todas as consultas ao banco de dados serão feitas no app controller e app services.
    • Todas as consultas ao banco de dados serão feitas através de Querys.

  Temos ciência de que esta não é uma boa prática, mas o foco é o conhecimento em SQL.
*/

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
