<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Docenti</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar v-model="query" placeholder="Cerca docente"></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Docenti</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-label>{{query}}</ion-label>
      <ion-list>
        <ion-item v-for="docente in listaDocentiFiltrata">
        <ion-label>{{docente.cognome}} {{docente.nome}}</ion-label>
      </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonSearchbar } from '@ionic/vue';


import {ref, computed} from 'vue';
let query = ref('')
const listaDocenti = [
    {
      "nome": "Mario",
      "cognome": "Rossi"
    },
    {
      "nome": "Luca",
      "cognome": "Bianchi"
    },
    {
      "nome": "Giulia",
      "cognome": "Verdi"
    },
    {
      "nome": "Sara",
      "cognome": "Gallo"
    },
    {
      "nome": "Marco",
      "cognome": "Ferrari"
    },
    {
      "nome": "Anna",
      "cognome": "Russo"
    },
    {
      "nome": "Paolo",
      "cognome": "Lombardi"
    },
    {
      "nome": "Francesca",
      "cognome": "Romano"
    },
    {
      "nome": "Andrea",
      "cognome": "Conti"
    },
    {
      "nome": "Laura",
      "cognome": "Gatti"
    },
    {
      "nome": "Alessandro",
      "cognome": "Barbieri"
    },
    {
      "nome": "Martina",
      "cognome": "Mancini"
    },
    {
      "nome": "Stefano",
      "cognome": "Moretti"
    },
    {
      "nome": "Chiara",
      "cognome": "De Angelis"
    },
    {
      "nome": "Roberto",
      "cognome": "Marino"
    },
    {
      "nome": "Valentina",
      "cognome": "Ferri"
    },
    {
      "nome": "Giovanni",
      "cognome": "Caruso"
    },
    {
      "nome": "Elena",
      "cognome": "Santoro"
    },
    {
      "nome": "Davide",
      "cognome": "Rizzo"
    },
    {
      "nome": "Simona",
      "cognome": "Farina"
    },
    {
      "nome": "Fabio",
      "cognome": "Longo"
    },
    {
      "nome": "Cristina",
      "cognome": "Pellegrini"
    },
    {
      "nome": "Pietro",
      "cognome": "Guerini"
    },
    {
      "nome": "Marta",
      "cognome": "Serra"
    },
    {
      "nome": "Lorenzo",
      "cognome": "Falcone"
    },
    {
      "nome": "Elisa",
      "cognome": "Greco"
    },
    {
      "nome": "Federico",
      "cognome": "Ricci"
    },
    {
      "nome": "Silvia",
      "cognome": "Monti"
    },
    {
      "nome": "Riccardo",
      "cognome": "Vitale"
    },
    {
      "nome": "Veronica",
      "cognome": "Mazza"
    }
  ]


const listaDocentiFiltrata = computed(()=>{
  return listaDocenti.filter(docente => {
    const fullName = `${docente.nome} ${docente.cognome}`;
    return fullName.toLowerCase().includes(query.value.toLowerCase());
  });
})
</script>
