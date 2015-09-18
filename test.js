var TeostoApi = require('./TeostoApi');

TeostoApi.getVenueByName('tavastia', function(error, response, body) {
 if (error) console.log(error);
 console.log('status: ', response.statusCode);
 console.log(body);
});

TeostoApi.getEventById('80a4083b53', function(error, response, body) {
  if (error) console.log(error);
  console.log('status: ', response.statusCode);
  console.log(body);
});
