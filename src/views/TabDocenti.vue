<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Docenti</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="showSearchBar = !showSearchBar">
            <ion-icon slot="icon-only" :icon="search"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
      <ion-toolbar v-if="showSearchBar">
        <ion-searchbar v-model="query" placeholder="Cerca docente"></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Docenti</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list>
        <ion-item v-for="docente, id in listaDocentiFiltrata" :router-link="'/tabs/docenti/' + id" router-direction="forward"  :detail="true" >
  
            <ion-label>{{ docente?.cognome }} {{ docente?.nome }}</ion-label>

        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonAvatar, IonPage, IonHeader, IonToolbar, IonButton, IonButtons, IonTitle, IonContent, IonList, IonItem, IonLabel, IonSearchbar, IonIcon } from '@ionic/vue';
import { search } from 'ionicons/icons'
import { listaDocenti } from '@/data/docenti';
import { ref, computed } from 'vue';
import DocenteDetail from '@/views/DocenteDetail.vue';
import { useRouter } from 'vue-router';

export default {
  components: { IonAvatar, IonPage, IonHeader, IonToolbar, IonButton, IonButtons, IonTitle, IonContent, IonList, IonItem, IonLabel, IonSearchbar, IonIcon },
  setup() {
    let query = ref('')
    let showSearchBar = ref(false)
    const router = useRouter()

    const listaDocentiFiltrata = computed(() => {
      return listaDocenti.filter(docente => {
        const fullName = `${docente.nome} ${docente.cognome}`;
        return fullName.toLowerCase().includes(query.value.toLowerCase());
      });
    })

    const showDocenteDetail = (id: number)=>{
      router.push({name:'DocenteDetail', params:{id}})
    }

    return { search, query, showSearchBar, listaDocentiFiltrata, DocenteDetail , showDocenteDetail}
  }
}
</script>
