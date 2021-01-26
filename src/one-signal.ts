// OneSignal is a service providing push notification functionality.

import { OneSignal } from '@ionic-native/onesignal'

const initialiseOneSignal = (): void => {

  OneSignal.startInit('a8bd4bc4-e8fb-46f6-9d42-9f8efc607696', '233353133239' );
  OneSignal.inFocusDisplaying( OneSignal.OSInFocusDisplayOption.InAppAlert );

  OneSignal.handleNotificationReceived().subscribe( () => {  /* do something */ });
  OneSignal.handleNotificationOpened().subscribe( () => { /* do something */ });

  OneSignal.endInit();
}

export default initialiseOneSignal

