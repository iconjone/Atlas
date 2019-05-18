<ons-navigator swipeable id="myNavigator"></ons-navigator>

<template id="2-page.html">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">2nd page</div>
    </v-ons-toolbar>
  </v-ons-page>
</template>
<template id="test1">
  <v-ons-page id = "test">
    <v-ons-toolbar>
      <div class="center">Choose Data Mode</div>
    </v-ons-toolbar>

    <div class="content">
         <section style="margin: 16px">
         <v-ons-button id="busTime" modifier="large">Bus Timings</v-ons-button>
       </section>
       <section style="margin: 16px">
         <v-ons-button modifier="large">Get Me There</v-ons-button>
       </section>
           <v-ons-speed-dial position="bottom right" direction="up"
             :visible="spdVisible"
             :open.sync="spdOpen"
           >
             <v-ons-fab>
               <v-ons-icon icon="fa-bus-alt"></v-ons-icon>
             </v-ons-fab>

             <v-ons-speed-dial-item @click="$ons.notification.confirm('go to there?')">
       <v-ons-icon icon="fa-clock"></v-ons-icon>
     </v-ons-speed-dial-item>
     <v-ons-speed-dial-item @click="$ons.notification.confirm('go to there?')">
<v-ons-icon icon="fa-paper-plane"></v-ons-icon>
</v-ons-speed-dial-item>


           </v-ons-speed-dial>


 </div>

 <!-- Fixed content here -->

</v-ons-page>

</template>




<style>
  /* CSS goes here */
</style>

<script>


</script>
