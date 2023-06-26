<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Docenti</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="showSearchBar=!showSearchBar"> <ion-icon slot="icon-only" :icon="search"></ion-icon> </ion-button>
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
        <ion-item v-for="docente, id in listaDocentiFiltrata" :href="'tabs/docenti/'+id.toString()">
        <ion-label >{{docente?.cognome}} {{docente?.nome}}</ion-label>
      </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar,IonButton, IonButtons, IonTitle, IonContent, IonList, IonItem, IonLabel, IonSearchbar, IonIcon } from '@ionic/vue';
import {search} from 'ionicons/icons'
import {listaDocenti}  from '@/data/docenti';
import {ref, computed} from 'vue';
let query = ref('')
let showSearchBar = ref(false)


const listaDocentiFiltrata = computed(()=>{
  return listaDocenti.filter(docente => {
    const fullName = `${docente.nome} ${docente.cognome}`;
    return fullName.toLowerCase().includes(query.value.toLowerCase());
  });
})
</script>
