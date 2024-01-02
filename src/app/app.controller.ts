import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
  @Get('health')
  const () {
    return 'Hello, World!!'
  }
}