import { Module } from '@nestjs/common';

import { ClinicsService } from './clinics.service';
import { ClinicsController } from './clinics.controller';
import { ClinicsUtils } from './clinics.utils';

@Module({
  controllers: [ClinicsController],
  providers: [ClinicsService, ClinicsUtils],
})
export class ClinicsModule {}
