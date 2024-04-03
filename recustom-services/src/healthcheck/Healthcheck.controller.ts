import { Controller, Get } from '@nestjs/common';

@Controller('/healthcheck')
class HealthcheckController {
  @Get()
  public async healthcheck(): Promise<string> {
    return 'OK';
  }
}

export default HealthcheckController;
