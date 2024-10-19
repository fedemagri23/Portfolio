<template>
    <v-row class="my-2">

        <v-col cols="6" class="rounded-ts-xl d-flex flex-column align-center border-lg pa-4">
            <v-container class="d-flex flex-row justify-center align-center w-100" style="height: 128px;">
                <v-icon class="text-colortext1 ma-2" size="64">mdi-vuejs</v-icon>
                <h1 class="text-colortext1 font-weight-bold">Vue</h1>
            </v-container>
            <v-progress-linear color="primary" indeterminate :height="6"></v-progress-linear>
            <br>
            <p class="font-weight-medium">

            </p>
            <br>

        </v-col>

        <v-col cols="6" class="rounded-be-xl d-flex flex-column align-center border-lg pa-4">
            <v-container class="d-flex flex-row justify-center align-center w-100" style="height: 128px;">
                <v-icon class="text-colortext1 ma-2" size="64">mdi-react</v-icon>
                <h1 class="text-colortext1 font-weight-bold">React Native</h1>
            </v-container>
            <v-progress-linear color="yellow" model-value="50" :height="6"></v-progress-linear>
            <br>
            <p class="font-weight-medium">

            </p>
            <br>
        </v-col>

    </v-row>
</template>