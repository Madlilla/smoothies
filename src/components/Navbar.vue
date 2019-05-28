<template>
    <div class="navbar">
        <nav class="nav-extended yellow lighten-1">
            <div class="nav-content">
                <router-link :to="{ name: 'HelloWorld' }">
                    <span class="nav-title orange-text text-darken-4">SmoothieRecipe</span>
                </router-link>
                <a href="" class="btn-floating btn-large  halfway-fab  orange darken-4">
                    <router-link :to="{ name: 'AddSmoothie'}">
                        <i class="material-icons">add</i>
                    </router-link>

                </a>

            </div>

        </nav>
    </div>
</template>


<script>
export default {
   name: 'Navbar',
   data(){
       return{

       }
   } 
}
</script>

<style>
.navbar nav{
    padding: 0 20px;
}
</style>

