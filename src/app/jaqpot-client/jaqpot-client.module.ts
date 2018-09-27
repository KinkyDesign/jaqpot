import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppModule } from '../app.module';
// import { ConfigService } from '../app.';

import { AaService } from './api/aa.service';
import { SessionService } from '../session/session.service';
import { SessionModule } from '../session/session.module';
import { AlgorithmService } from './api/algorithm.service';
// import { AlgorithmService } from './api/algorithm.service';
// import { BibtexService } from './api/bibtex.service';
import { DatasetService } from './api/dataset.service';
// import { DoseresponseService } from './api/doseresponse.service';
// import { EnmService } from './api/enm.service';
// import { FeatureService } from './api/feature.service';
// import { InterlabService } from './api/interlab.service';
// import { ModelService } from './api/model.service';
// import { OpenrisknetService } from './api/openrisknet.service';
// import { PmmlService } from './api/pmml.service';
// import { ReadacrossService } from './api/readacross.service';
// import { ReportService } from './api/report.service';
// import { TaskService } from './api/task.service';
import { UserService } from './api/user.service';
import { OrganizationService } from './api/organization.service';
import { NotificationFactoryService } from './factories/notification-factory.service';
import { NotificationBuilderService } from './builders/notification-builder.service';
import { NotificationService } from './api/notification.service';
// import { ValidationService } from './api/validation.service';

@NgModule({
  imports:      [ HttpModule , SessionModule],
  declarations: [],
  exports:      [],
  providers:    [ 
    AaService,
    SessionService,
    AlgorithmService,
    // AlgorithmService, 
    // BibtexService, 
    DatasetService,
    // DoseresponseService, 
    // EnmService, 
    // FeatureService, 
    // InterlabService, 
    // ModelService, 
    // OpenrisknetService, 
    // PmmlService, 
    // ReadacrossService, 
    // ReportService, 
    // TaskService, 
    UserService,
    OrganizationService,
    NotificationService,
    // ValidationService 
    NotificationFactoryService,
    NotificationBuilderService
    ]
})
export class JaqpotClientModule {
    // public static forConfig(configurationFactory: () => ConfigService): ModuleWithProviders {
    //     return {
    //         ngModule: JaqpotClientModule,
    //         providers: [ {provide: ConfigService, useFactory: configurationFactory}]
    //     }
    // }
}