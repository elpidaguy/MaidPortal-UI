import { InjectionToken } from '@angular/core';
import { environment } from '../../environments/environment';

export const applicationConfiguration = new InjectionToken<AppConfig>(
  'app.config'
);

export const maidAppConfig: AppConfig = {
  appname: 'Maid Portal',
  allowDocumentTypes: ['doc', 'docx', 'pdf', 'rtf', 'txt', 'xls', 'xlsx', 'csv', 'ppt', 'pptx'],
  allowImageTypes: ['tiff', 'jpeg', 'jpg', 'png', 'gif', 'bmp', 'esp'],
  systemNotificationEnabled: environment.systemNotificationEnabled,
  approvalRequired: environment.approvalRequired,
  faqEnabled: environment.faqEnabled,
  isReadOnly: environment.isReadOnly,
  middlewareUrl: environment.middlewareUrl,

};

export interface AppConfig {
  appname: string;
  allowDocumentTypes: any;
  allowImageTypes: any;
  systemNotificationEnabled: boolean;
  approvalRequired: boolean;
  faqEnabled: boolean;
  isReadOnly: boolean;
  middlewareUrl: string;
}
