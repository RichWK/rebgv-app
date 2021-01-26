<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template> 

<script lang="ts">

import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import initialisePushNotifications from './one-signal';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  mounted() {
    initialisePushNotifications();
  }
});

</script>

