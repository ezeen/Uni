<template>
    <div id="students">
        <v-container>
            <v-container >
                <v-layout column>
                    
                    <v-card
                        class="mx-auto"
                    >
                        <v-toolbar
                            color="#01959a"
                            theme="dark"
                        >
                            <v-toolbar-title class="text-h6">
                                Student Registration
                            </v-toolbar-title>
                        </v-toolbar>
        
                        <v-container>
                            <v-table>
                                    <thead>
                                        <tr>
                                            <th class="text-left">
                                            FisrtName
                                            </th>
                                            <th class="text-left">
                                            LastName
                                            </th>
                                            <th class="text-left">
                                            Gender
                                            </th>
                                            <th class="text-left">
                                            Email
                                            </th>
                                            <th class="text-left">
                                            Phone
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            v-for="student in students"
                                            :key="student.id"
                                        >
                                            <td>{{ student.firstname }}</td>
                                            <td>{{ student.lastname }}</td>
                                            <td>{{ student.gender }}</td>
                                            <td>{{ student.email }}</td>
                                            <td>{{ student.phone }}</td>
                                        </tr>
                                    </tbody>
                                </v-table>
                        </v-container>

                        <v-divider></v-divider>
                    </v-card>    
                </v-layout>
            </v-container>
        </v-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            students: [
                {
                    firstname: 'Will',
                    lastname: 'Smith',
                    gender: 'Male',
                    email: 'wsmiht@gmail.com',
                    phone: '0783728918'
                },
                {
                    firstname: 'Ryan',
                    lastname: 'Reynolds',
                    gender: 'Male',
                    email: 'rrs@gmail.com',
                    phone: '0783728918'
                },
                {
                    firstname: 'Bill',
                    lastname: 'Clinton',
                    gender: 'Male',
                    email: 'clinB@gmail.com',
                    phone: '0783728918'
                },
                {
                    firstname: 'Tasha',
                    lastname: 'Smith',
                    gender: 'Female',
                    email: 'tsmiht@gmail.com',
                    phone: '0783728918'
                },
                {
                    firstname: 'Tracey',
                    lastname: 'Baley',
                    gender: 'Female',
                    email: 'tashab@gmail.com',
                    phone: '0783728918'
                },
                {
                    firstname: 'Akia',
                    lastname: 'Lane',
                    gender: 'Female',
                    email: 'akialane@gmail.com',
                    phone: '0783728918'
                }
            ]
        }
    }
}
</script>