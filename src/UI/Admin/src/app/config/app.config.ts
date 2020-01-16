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


};

export interface AppConfig {
  /**
   * A short name for your app. It will be used as a
   * cookie prefix as well as general display throughout the app.
   */
  appname: string;

  /**
   * The identifier for the seller, buyer network or buyer application that
   * will be used for authentication. You can view client ids for apps
   * you own or are a contributor to on the [dashboard](https://developer.ordercloud.io/dashboard)
   */
  allowDocumentTypes: any;
  allowImageTypes: any;

  /**
   * An array of security roles that will be requested upon login.
   * These roles allow access to specific endpoints in the OrderCloud.io API.
   * To learn more about these roles and the security profiles that comprise them
   * read [here](https://developer.ordercloud.io/documentation/platform-guides/authentication/security-profiles)
   */
  systemNotificationEnabled: boolean,
  approvalRequired: boolean,
  faqEnabled: boolean,
  isReadOnly: boolean,
}
