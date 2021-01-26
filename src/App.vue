<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template> 

<script lang="ts">

import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { OneSignal } from '@ionic-native/onesignal'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const initOneSignal = () => {

      OneSignal.setLogLevel( { logLevel: 6, visualLevel: 0 } );

      OneSignal.startInit('a8bd4bc4-e8fb-46f6-9d42-9f8efc607696', '233353133239' );
      OneSignal.inFocusDisplaying( OneSignal.OSInFocusDisplayOption.InAppAlert );

      OneSignal.handleNotificationReceived().subscribe( () => {
        // do something when notification is received
      });

      OneSignal.handleNotificationOpened().subscribe( () => {
        // do something when notification is opened
      });

      OneSignal.endInit();
    }
    return { initOneSignal }
  },
  components: {
    IonApp,
    IonRouterOutlet
  },
  mounted() {
    this.initOneSignal();
  }
});

</script>

