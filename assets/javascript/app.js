  //search button function
$(".material-icons").on("click", function(){

    //grabbing input from search bar
    var input = $("#search").val().trim();
    console.log(input);
    
   

    //sending to search page
    $("#enter-link").attr('href', "search.html");
    
    ticketMaster(input);
 });
 
 // ticketMasterApi = "YKxjTTGNYd3zG58GRyowVtUuQ4WLVhdd"
  
 // Ticket Master API
 function ticketMaster (input) {
    var userInput = input
     console.log("test");
    var tmQueryURL = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=" + userInput + "&apikey=YKxjTTGNYd3zG58GRyowVtUuQ4WLVhdd"
        console.log(tmQueryURL)

     $.ajax({
         url: tmQueryURL,
         method: "GET",
        
     })
         .then(function (response) {
            console.log(response);
            
            
             //function areaResults() {
              for (i = 0; i < response._embedded.events.length; i++) {
                 console.log(i)
                  var showsDiv = $("<div class='shows'>");
                 
                     //ARTIST NAME
                 var artistName = response._embedded.events[i].name;
                 var artistInfo = $("<p>").text(artistName);
                      console.log(artistName + " artist");

                     //IMAGE
                 var image = response._embedded.events[i].images[1].url;
                 var imageInfo =  $("<img>").attr("src", image);
                      console.log("image");

                     //STREET ADDRESS
                 var eventAddress = response._embedded.events[i]._embedded.venues[0].address.line1;
                 var addressInfo = $("<p>").text(eventAddress);
                     console.log(eventAddress + " address");
               
             
                     //CITY
                 var city = response._embedded.events[i]._embedded.venues[0].city.name;
                 var cityInfo = $("<p>").text(city);
                      console.log(city + " city");

                     //VENUE NAME
                 var venueName = response._embedded.events[i]._embedded.venues[0].name;
                 var venueInfo = $("<p>").text(venueName);
                      console.log(venueName + " venue name");

                     //STATE
                 var venueState = response._embedded.events[i]._embedded.venues[0].state.name;
                 var state = $("<p>").text(venueState);
                     console.log(venueState + " state");


                 
                  showsDiv.append(imageInfo);
                  showsDiv.append(artistInfo);
                  showsDiv.append(addressInfo);
                  showsDiv.append(cityInfo);
                  showsDiv.append(venueInfo);
                  showsDiv.append(state);


         // Putting the entire shows above the previous showss
             $("#drop").append(showsDiv);

              }

         });


 }


 