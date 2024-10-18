<template>
    <v-col style="padding-top: 106px;">
        <h1 style="font-size: 3rem;">Education</h1>
        <v-row class="my-2">

            <v-col xs="12" sm="12" md="4" lg="4" xl="4" class="rounded-ts-xl d-flex flex-column align-center border-lg pa-4">
                <v-container class="d-flex flex-row justify-center align-center w-100" style="height: 128px;">
                    <v-icon class="text-colortext1 ma-2" size="64">mdi-school-outline</v-icon>
                    <h1 class="text-colortext1 font-weight-bold">Secondary school</h1>
                </v-container>
                <v-container 
                    @click="goToLink('https://lasalleflorida.edu.ar/')"
                    class="bg-secondary w-100 border-md rounded d-flex flex-row justify-center align-center cursor-pointer"
                >
                    <h1>Institution: La Salle florida</h1>
                    <v-icon class="text-colortext1 mx-2" size="28">mdi-open-in-new</v-icon>
                </v-container>
                <v-container class="w-100 px-1 pt-6">
                    <h2 class="font-weight-medium">Title: <b>Electronic technician</b> </h2>
                    <h2 class="font-weight-medium">Start date: January 2015</h2>
                    <h2 class="font-weight-medium">Estimated end date: December 2021</h2>
                </v-container>
            </v-col>

            <v-col xs="12" sm="12" md="4" lg="4" xl="4" class="d-flex flex-column align-center border-lg pa-4">
                <v-container class="d-flex flex-row justify-center align-center w-100" style="height: 128px;">
                    <v-icon class="text-colortext1 ma-2" size="64">mdi-earth</v-icon>
                    <h1 class="text-colortext1 font-weight-bold">English</h1>
                </v-container>
                <v-container 
                    @click="goToLink('https://www.cambridgeenglish.org/')"
                    class="bg-secondary w-100 border-md rounded d-flex flex-row justify-center align-center cursor-pointer"
                >
                    <h1>Institution: Cambridge</h1>
                    <v-icon class="text-colortext1 mx-2" size="28">mdi-open-in-new</v-icon>
                </v-container>
                <v-container class="w-100 px-1 pt-6">
                    <h2 class="font-weight-medium">Title: <b>First Certificate in English</b> </h2>
                    <h2 class="font-weight-medium">Date: July 2021 </h2>
                </v-container>
                <a href="StatementOfResult.pdf" download style="text-decoration: none; width: 100%;">
                    <v-container class="bg-secondary w-100 border-md rounded d-flex flex-row justify-center align-center cursor-pointer">
                        <h1>Doenload statement of result</h1>
                        <v-icon class="text-colortext1 mx-2" size="28">mdi-download</v-icon>
                    </v-container>
                </a>
                
            </v-col>
            
            <v-col xs="12" sm="12" md="4" lg="4" xl="4" class="rounded-be-xl d-flex flex-column align-center border-lg pa-4">
                <v-container class="d-flex flex-row justify-center align-center w-100" style="height: 128px;">
                    <v-icon class="text-colortext1 ma-2" size="64">mdi-certificate-outline</v-icon>
                    <h1 class="text-colortext1 font-weight-bold">university</h1>
                </v-container>
                <v-container 
                    @click="goToLink('https://www.itba.edu.ar/')"
                    class="bg-secondary w-100 border-md rounded d-flex flex-row justify-center align-center cursor-pointer"
                >
                    <h1>Institution: ITBA</h1>
                    <v-icon class="text-colortext1 mx-2" size="28">mdi-open-in-new</v-icon>
                </v-container>
                <v-container class="w-100 px-1 pt-6">
                    <h2 class="font-weight-medium">Degree: <b>Computer engineering</b> </h2>
                    <h2 class="font-weight-medium">Start date: March 2022</h2>
                    <h2 class="font-weight-medium">Estimated end date: July 2027</h2>
                    <br>
                    <h3 class="font-weight-medium">More: I have a university scholarship because I excelled in technical secondary school.</h3>
                </v-container>
            </v-col>
            
        </v-row>
    </v-col>
</template>

<script setup>
    const goToLink = (link) => {
        window.open(link, '_blank');
    };
</script>