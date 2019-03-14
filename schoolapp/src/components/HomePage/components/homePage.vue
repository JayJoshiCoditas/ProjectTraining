<template>
    <div>
        <br>
        <div class="service">
            <span class="serviceText"> Educate for a better tomorrow</span><br>
            <span class="subText">Get your child admitted without any hassles</span>
            <form class="search-container">
                <input v-model="defaultDataList" class="inputList" list="schools" name="schools" placeholder="Search Universities" >
                <datalist id="schools">
                    Hello World
                    <option value="MIT"></option>
                    <option value="CMU"></option>
                    <option value="Cambridge"></option>
                    <option value="Oxford"></option>
                    <option value="Schoffield"></option>
                    <option value="Harvard"></option>                     
                </datalist>
                <input type="submit" @click="nextState()" value="Explore">
            </form>
        </div>
        <div class="viewSection">
            <div class="viewHeader">Most Viewed Universities</div>
            <div class="card" v-for="element in universities" :key="element.name">
                <img :src="element.url" alt="SchoolImage" style="width=100%" />
                <div class="container">
                    <h4><b>{{element.name}}</b></h4>
                    <p>UK</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router'
import cards from '@/config/cards.json'
export default {
  name: 'homePage',
  data () {
    return {
      msg: 'Home Page',
      defaultDataList: '',
      universities : cards,
    }
  },
  computed(){

  },
  methods: {
      nextState(){
          router.push({
              name: "admissionPage"
          })
      },
      showList(){
          this.defaultDataList = ''
          var cat
        //   cat = document.getElementById("schools");
        //   cat.style.display = 'block';

      },
  },
  beforeMount(){
      /* eslint-disable */
      console.log(this.universities);
  }
}
</script>

<style lang="postcss" scoped>
    @import '../../../css/landingPage.css';

</style>