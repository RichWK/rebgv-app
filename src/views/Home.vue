<template>
  <ion-page>
    <!-- <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header> -->
    <ion-content :fullscreen="true">
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header> -->
    
      <Logo />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
// import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

import Logo from '@/components/Logo.vue';

export default  {
  name: 'Home',
  components: { Logo, IonContent, IonPage }
  // components: { Logo, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>

