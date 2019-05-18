// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}
var $ = Dom7;
// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
    routes: routes,
  root: '#app',
  theme: theme,
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  view: {
        pushState: true
    },
    on: {
      pageBeforeRemove: function() {
        var self = this;

        //self.autocompleteStandaloneSimple.destroy();
      },
      pageInit: function(page) {
        console.log("run")
        var self = this;
        var app = self.$app;
        var routes =
          '01 - Bonfire,02 - Replant,03 - Yell Practice,04 - Gig Em,05 - Bush School,06 - 12th Man,08 - Howdy,09 - Vet School,12 - Reveille,15 - Old Army,N15 - Old Army (Thur & Fri),22 - Excel,25 - Centerpole,26 - Rudder,27 Ring Dance,31 - E-Walk,34 - Fish Camp,35 - Hullabaloo,36 - Cotton Bowl,40N - Century Tree,40S - Century Tree,47 - Rellis,12-25 - Night and Weekends,01-04 - Night and Weekends,03-05 - Night and Weekends'
          .split(',');

          // var pData = new Promise(function(resolve, reject) {
          //   ret = []
          //   var routes =
          //           '01 - Bonfire,02 - Replant,03 - Yell Practice,04 - Gig Em,05 - Bush School,06 - 12th Man,08 - Howdy,09 - Vet School,12 - Reveille,15 - Old Army,N15 - Old Army (Thur & Fri),22 - Excel,25 - Centerpole,26 - Rudder,27 Ring Dance,31 - E-Walk,34 - Fish Camp,35 - Hullabaloo,36 - Cotton Bowl,40N - Century Tree,40S - Century Tree,47 - Rellis,12-25 - Night and Weekends,01-04 - Night and Weekends,03-05 - Night and Weekends'
          //           .split(',');
          //     routes.forEach(function(routeName) {
          //     pack = {}
          //     routeObj =  busPull(routeName.split(" ")[0])
          //     routeObj.then(function(data){
          //      console.log(JSON.stringify(data))
          //     pack["Name"] = routeName
          //     pack["Data"] = data
          //     ret.push(pack)
          //     console.log(ret)
          //     if(ret.length == routes.length)
          //     resolve(ret);
          //   })
          //
          //   });
          //
          // });


        var $ = self.$;

//page.detail.route.params.routeNum

var auto = this.autocomplete

Promise.all(getAllBusTest()).then(function(val){
var routes =
          '01 - Bonfire,02 - Replant,03 - Yell Practice,04 - Gig Em,05 - Bush School,06 - 12th Man,08 - Howdy,09 - Vet School,12 - Reveille,15 - Old Army,N15 - Old Army (Thur & Fri),22 - Excel,25 - Centerpole,26 - Rudder,27 Ring Dance,31 - E-Walk,34 - Fish Camp,35 - Hullabaloo,36 - Cotton Bowl,40N - Century Tree,40S - Century Tree,47 - Rellis,12-25 - Night and Weekends,01-04 - Night and Weekends,03-05 - Night and Weekends'
          .split(',');
ret = []
var i = 0
val.forEach(function(data){
pack = {}

  pack["Name"] = routes[i]
  pack["Data"] = data
  ret.push(pack)

i++
})

console.log(ret)

data = ret

        // pData.then(function(data){
        //         data.forEach(function(route){
        //           headers = Object.getOwnPropertyNames(route["Data"])
        //         })
        //
        // })
        console.log("init")
        stopsNames = []

        data.forEach(function(route){
                  headers = Object.getOwnPropertyNames(route["Data"])
                  headers.forEach(function(names){
                    if(!(stopsNames.includes(names.substring(1,names.length))))
                      stopsNames.push(names.substring(1,names.length))

                  })
                })

          console.log("done")
          console.log(stopsNames.toString())



        //console.log(await stopsNames)


                console.log("create autocomplete search")
                self.autocompleteStandaloneSimple1 = auto.create({
                  openIn: 'page', //open in page
                  limit: 50,
                  openerEl: '#autocomplete-standalone1', //link that opens autocomplete
                  closeOnSelect: true, //go back after we select something
                  source: function(query, render) {
                    var results = [];
                    if (query === "renderAllPlease" || query.length === 0) {
                      results = stopsNames
                      render(results);
                      return;
                    }
                    // Find matched items
                    for (var i = 0; i < routes.length; i++) {
                      if (stopsNames[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(stopsNames[i]);
                    }
                    // Render items by passing array with result items
                    console.log(results)
                    render(results);
                  },
                  on: {
                    change: function(value) {
                      console.log(value);
                      // Add item text value to item-after
                      $('#autocomplete-standalone1').find('.item-after').text(value[0]);
                      // Add item value to input value
                      $('#autocomplete-standalone1').find('input').val(value[0]);

                      stopName = value[0]
                      console.log(this.app.router)
                      this.app.router.navigate('/stops/' + stopName +'/')
                    },
                    opened: async function(query, render) {
                      stopsNames = await stopsNames
                      console.log("should be first")

                      console.log(this, "")
                      console.log(stopsNames, "testing here 1")
                      this.source("renderAllPlease", stopsNames)
                      },
                  },
                });


      })
      //createAllRouteSearch(getAllBus(), auto, self)

        self.autocompleteStandaloneSimple = this.autocomplete.create({
          openIn: 'page', //open in page
          openerEl: '#autocomplete-standalone', //link that opens autocomplete
          closeOnSelect: true, //go back after we select something
          source: function(query, render) {
            var results = [];
            // if (query.length === 0) {
            //   render(results);
            //   return;
            // }
            // Find matched items
            for (var i = 0; i < routes.length; i++) {
              if (routes[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(routes[i]);
            }
            // Render items by passing array with result items
            console.log(results)
            render(results);
          },
          on: {
            change: function(value) {
              console.log(value);
              // Add item text value to item-after
              $('#autocomplete-standalone').find('.item-after').text(value[0]);
              // Add item value to input value
              $('#autocomplete-standalone').find('input').val(value[0]);
              routeNum  = ""
              minsplit = value[0].split("-")
              if(minsplit.length != 2){
                routeNum = minsplit[0] + "-" + minsplit[1]
              }
              else{
                routeNum = minsplit[0]
              }
              routeNum = routeNum.split(" ")[0]
              console.log(this.app.router)
              this.app.router.navigate('/bus-times/' + routeNum +'/')
            },
            opened: function(query, render) {
              this.source("", routes)
              console.log(this)
              },
          },
        });









//
//         document.addEventListener("backbutton", function (event) {
// console.log("yee")
// this.app.router.navigate('#')
//
//   return false;
// }, false);

      }
    },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },

});
function busPull(routeNum) {

var ret = null
  return fetch("http://transport.tamu.edu/busroutes/Routes.aspx?r=" + routeNum, {mode: 'cors'}).then(function(res) {
      return res.text();
  }).then(function(html) {
      //console.log(html);
      response = html

  //console.log(response)
    //Get the Html Data of whatever bus route
    //var response = UrlFetchApp.fetch("http://transport.tamu.edu/busroutes/Routes.aspx?r=" + routeNum);
    //Isolate the table part of the html to get just the timings
    var findTable = response.substring(
        response.lastIndexOf('<table'),
        response.lastIndexOf('</table>')
    );
    //console.log(findTable)

    //Make a new object called stops that will be converted to JSON
    stops = {}
    //Make an array for each line of the htmld table
    arrayedTable = findTable.split("\n")
    //Add properties to the stops object by finding all of the names
    var name = []
    var i = 0;
    first = 0
    last = 0
    while (i < (arrayedTable[6].match(new RegExp('scope="col">', "g")) || []).length) {
        first = arrayedTable[6].indexOf('scope="col">', first) + 12
        last = arrayedTable[6].indexOf('</th>', first) + 5
        //console.log(arrayedTable[6].substring(first, last - 5))
        name.push(arrayedTable[6].substring(first, last - 5))
        i++;
    }

    //add the properties but add the index to the name so it'll be in order
    var ite = 0
    name.forEach(function(x){
      stops[ite + x] = []
      ite++
    })


    //Find the last occurance of the time row
    ite = 0
    var lst = 0
    arrayedTable.forEach(function(x){
      if (x.indexOf("</tr>") != -1)
          lst = (ite - 1) | 0

      ite++
    })

    //Loop through each row iterating through a even row to get the data from each row
    for (var i = 8; i < lst + 1; i++) {
        if (i % 2 == 0) {
            times = []
            var d = 0;
            first = 0
            last = 0
            while (d < (arrayedTable[i].match(new RegExp('dateTime="', "g")) || []).length) {
                first = arrayedTable[i].indexOf('dateTime="', first) + 10
                last = arrayedTable[i].indexOf('">', first) + 2
                times.push(arrayedTable[i].substring(first, last - 2))
                d++;
            }
            //Add a NA to elements that dont exist using the diff
            if (name.length != times.length) {
                diff = name.length - times.length;
                for (var c = 0; c < diff; c++) {
                    times.unshift("NA")
                }
            }
            //Reformat the times and add it to the "pack" object and then add that to an array so it is sortable
            var ite = 0
            name.forEach(function(x){
              l = times[ite].split(" ")
              date = l[0]
              time = "NA"
              if (date != "NA") {
                  time = l[1].split(":")
                  time = time[0] + ":" + time[1] + " " + l[2]
              }
              //time = l[1] +" " + l[2] - Code to have the entire unformatted time
              pack = {}
              pack["Date"] = date
              pack["Time"] = time


              //stops[ite + x].push(times[ite]) - Code to push the entire time and date without the object
              stops[ite + x].push(pack)
              ite++
            })
        }
    }
    ret = stops;
    //console.log(ret)
    return ret
      });

}
async function getBus(route){
  return await busPull(route)
}

function getAllBusOld(){
ret = []
var routes =
        '01 - Bonfire,02 - Replant,03 - Yell Practice,04 - Gig Em,05 - Bush School,06 - 12th Man,08 - Howdy,09 - Vet School,12 - Reveille,15 - Old Army,N15 - Old Army (Thur & Fri),22 - Excel,25 - Centerpole,26 - Rudder,27 Ring Dance,31 - E-Walk,34 - Fish Camp,35 - Hullabaloo,36 - Cotton Bowl,40N - Century Tree,40S - Century Tree,47 - Rellis,12-25 - Night and Weekends,01-04 - Night and Weekends,03-05 - Night and Weekends'
        .split(',');
  routes.forEach(function(routeName) {
  pack = {}
  routeObj =  getBus(routeName.split(" ")[0])
  pack["Name"] = routeName
  pack["Data"] = routeObj
  ret.push(pack)
});
return ret
}
function getAllBusTest(){
  var ret = []
  var routes =
          '01 - Bonfire,02 - Replant,03 - Yell Practice,04 - Gig Em,05 - Bush School,06 - 12th Man,08 - Howdy,09 - Vet School,12 - Reveille,15 - Old Army,N15 - Old Army (Thur & Fri),22 - Excel,25 - Centerpole,26 - Rudder,27 Ring Dance,31 - E-Walk,34 - Fish Camp,35 - Hullabaloo,36 - Cotton Bowl,40N - Century Tree,40S - Century Tree,47 - Rellis,12-25 - Night and Weekends,01-04 - Night and Weekends,03-05 - Night and Weekends'
          .split(',');
    routes.forEach(function(routeName) {
          ret.push(busPull(routeName.split(" ")[0]))

        })
    return ret
}

function getAllBusTest(){
  var ret = []
  var routes =
          '01 - Bonfire,02 - Replant,03 - Yell Practice,04 - Gig Em,05 - Bush School,06 - 12th Man,08 - Howdy,09 - Vet School,12 - Reveille,15 - Old Army,N15 - Old Army (Thur & Fri),22 - Excel,25 - Centerpole,26 - Rudder,27 Ring Dance,31 - E-Walk,34 - Fish Camp,35 - Hullabaloo,36 - Cotton Bowl,40N - Century Tree,40S - Century Tree,47 - Rellis,12-25 - Night and Weekends,01-04 - Night and Weekends,03-05 - Night and Weekends'
          .split(',');
    routes.forEach(function(routeName) {
          ret.push(busPull(routeName.split(" ")[0]))

        })
    return ret
}

async function getAllBus(){
  var pData = new Promise(function(resolve, reject) {
    ret = []
    var routes =
            '01 - Bonfire,02 - Replant,03 - Yell Practice,04 - Gig Em,05 - Bush School,06 - 12th Man,08 - Howdy,09 - Vet School,12 - Reveille,15 - Old Army,N15 - Old Army (Thur & Fri),22 - Excel,25 - Centerpole,26 - Rudder,27 Ring Dance,31 - E-Walk,34 - Fish Camp,35 - Hullabaloo,36 - Cotton Bowl,40N - Century Tree,40S - Century Tree,47 - Rellis,12-25 - Night and Weekends,01-04 - Night and Weekends,03-05 - Night and Weekends'
            .split(',');
      routes.forEach(function(routeName) {
      pack = {}
      routeObj =  busPull(routeName.split(" ")[0])
      routeObj.then(function(data){
        //console.log(JSON.stringify(data))
      pack["Name"] = routeName
      pack["Data"] = data
      ret.push(pack)
    //  console.log(ret)
      if(ret.length == routes.length)
      resolve(ret);
    })

    });

  });
  return await pData
}

function distance(lat1, lon1, lat2, lon2, unit) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist;
	}
}

var locations = {}
locations["MSC"] = {
  lat: 30.614057,
  lon: -96.343085
}
locations["Beutel"] = {
  lat:30.615418,
  lon:-96.342940
}
locations["White Creek"] = {
  lat:30.607419,
  lon:-96.355054
}
locations["Trigon"] = {
  lat:30.614205,
  lon:-96.338713
}
locations["Carter Creek Shopping Center"] = {
  lat:30.644556,
  lon: -96.332993
}
locations["Blinn College - Bldg E"] = {
  lat:30.663220,
  lon: -96.351957
}
locations["Willow Oaks"] = {
  lat:30.646715,
  lon: -96.333492
}
locations["Reveille Ranch"] = {
  lat:30.628602,
  lon: -96.359861
}
locations["Aggie Station"] = {
  lat:30.624879,
  lon: -96.352502
}





// locations["re"] = {
//   lat:re,
//   lon: re
// }



var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  console.log(crd)
  console.log(distance(crd.latitude, crd.longitude, locations.MSC.lat, locations.MSC.lon, "M"))
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

function test(){
if ("geolocation" in navigator) {
 alert("yay");
//console.log(navigator.geolocation)
navigator.geolocation.getCurrentPosition(success, error, options);
} else {
  alert("shit");
}
}






//
// push.on('notification', function(data) {
//          console.log('notification event');
//          // using Framework7 to show a dialog
//          myApp.alert(data.message, [data.title]);
//
//          push.finish(function() {
//              console.log('success');
//          }, function() {
//              console.log('error');
//          });
//      });
