<template>
    <div>
        <ul>
            <li><a class="active" id="1" @click="routeTo(1)">One</a></li>
            <li><a class="" id="2" @click="routeTo(2)">Two</a></li>
            <li><a class="" id="3">Three</a></li>
            <li><a class="" id="4" >Four</a></li>
        </ul>
        
    </div>
</template>


<script>
import router from '@/router'

export default {
    name: 'footer',
    data:{

    },
    methods:{
      routeTo(val){
        if(val == 1){
          document.getElementById("1").classList.add("active")
          document.getElementById("2").classList.remove("active")
          document.getElementById("3").classList.remove("active")
          document.getElementById("4").classList.remove("active")
          router.push({
              name: "homePage"
          })
        }else if(val == 2){
          document.getElementById("2").classList.add("active")
          document.getElementById("1").classList.remove("active")
          document.getElementById("3").classList.remove("active")
          document.getElementById("4").classList.remove("active")
          router.push({
              name: "admissionPage"
          })
        }
      },
    },
    beforeMount(){
        console.log("Footer called");
    }
}
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: hidden;
  background-color: rgb(209, 193, 193);
  top: 0;
  width: 100%;
}

li {
  float: left;
}

li a {
  display: block;
  color: green;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: rgb(185, 228, 219);
}

.active {
  background-color: rgb(209,255,41);
}
</style>


