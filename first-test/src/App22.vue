
<template id="page1">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">Page 1</div>
    </v-ons-toolbar>
    <p style="text-align: center">
      This is the first page
      <v-ons-button @click="push">Push Page 2</v-ons-button>
    </p>
  </v-ons-page>
</template>

<template id="page2">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button>Page 1</v-ons-back-button>
      </div>
      <div class="center">Page 2</div>
    </v-ons-toolbar>
    <p style="text-align: center">This is the second page</p>
  </v-ons-page>
</template>

<template id="main">
  <v-ons-navigator swipeable
    :page-stack="pageStack"
    @push-page="pageStack.push($event)"
  ></v-ons-navigator>
</template>

<div id="app"></div>
