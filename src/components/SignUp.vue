<script>

</script>

<template>
    <div id="sign in">
        <v-container>
            <v-container >
                <v-layout column>
                    
                    <v-card
                        class="mx-auto"
                        width="50%"
                    >
                        <v-toolbar
                            color="#01959a"
                            theme="dark"
                        >
                            <v-toolbar-title class="text-h6">
                                Sign in
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-container>
                        <v-text-field
                            v-model="first"
                            color="#01959a"
                            label="First Name"
                            variant="underlined"
                        >
                        </v-text-field>
                        
                        <v-text-field
                            v-model="password"
                            color="#01959a"
                            label="Password"
                            placeholder="Enter your Password"
                            variant="underlined"
                            type="password"
                        >
                        </v-text-field>
                    </v-container>

                    <v-divider></v-divider>
                    <div style=" padding: 15px;">
                        <v-btn to="/signup" color="black" dark> Sign Up</v-btn>
                    </div>
                    </v-card>    
                </v-layout>
            </v-container>
        </v-container>
    </div>
</template>
<script>
export default {
    data: () => ({
        first: null,
        last: null,
        password: null,
    })
}
</script>