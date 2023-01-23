import { Module } from '@nestjs/common';

import { ClinicsModule } from './clinics/clinics.module';

@Module({
  imports: [ClinicsModule],
})
export class AppModule {}
