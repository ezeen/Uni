<template>
    <v-footer class="d-flex flex-column">
        <div class="bg-teal d-flex w-100 align center px-4">
            <strong> Get connected with us on Social networks</strong>
            <v-spacer></v-spacer>
                <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4"
                :icon="icon"
                variant="plain"
                size="small"
            >
            </v-btn>
        </div>
        <div class="px-4 py-2 bg-black text-center w-100">
            {{ new Date().getFullYear() }} - <strong> Nexus University </strong>
        </div>
    </v-footer>
</template>
<script>
    export default{
        data: () => ({
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-instagram',
                'mdi-facebook',
            ]
        })
    }
</script>