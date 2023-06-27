<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>{{ docente.cognome }} {{ docente.nome }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true" class="ion-text-center ion-padding">
            <ion-grid>
                <ion-row class="ion-justify-content-center">
                    <ion-col size="auto">
                        <ion-avatar>
                            <img alt="Silhouette of a person's head"
                                src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </ion-avatar>
                    </ion-col>
                </ion-row>
                <ion-row class="ion-justify-content-center">
                    <ion-col size="auto">
                        <!-- Contenuto centrato -->
                        <h1>{{ docente.cognome }} {{ docente.nome }}</h1>
                        <p>Matematica & Fisica</p>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <ion-list>
                <ion-item>
                    <ion-label>Aula</ion-label>
                    <ion-badge slot="end">B122</ion-badge>
                </ion-item>
                <ion-item>
                    <ion-label>Classe</ion-label>
                    <ion-badge color="success" slot="end">5ASA</ion-badge>
                </ion-item>
            </ion-list>
            <ion-list>
                <ion-list-header>
                    <ion-label>Orario giornaliero</ion-label>
                </ion-list-header>
                <ion-item>
                    <ion-label>Aula</ion-label>
                    <ion-badge slot="end">B122</ion-badge>
                </ion-item>
                <ion-item>
                    <ion-label>Classe</ion-label>
                    <ion-badge color="success" slot="end">5ASA</ion-badge>
                </ion-item>
            </ion-list>
        </ion-content>

    </ion-page>
</template>

<script lang="ts">
import { IonListHeader, IonPage, IonBadge, IonLabel, IonHeader, IonTitle, IonToolbar, IonContent, IonButtons, IonBackButton, IonGrid, IonRow, IonCol, IonAvatar, IonList, IonItem } from '@ionic/vue';
import { ref } from 'vue'
import { getDocente } from '@/data/docenti'

export default {
    name: 'DocenteDetail',
    props: {
        id: String
    },
    components: { IonListHeader, IonPage, IonBadge, IonLabel, IonHeader, IonTitle, IonToolbar, IonContent, IonButtons, IonBackButton, IonGrid, IonRow, IonCol, IonAvatar, IonItem, IonList },
    setup(props) {
        const docente = ref(getDocente(props.id))
        return { docente }
    }
}

</script>