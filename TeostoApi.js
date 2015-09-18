'use strict';

var request = require('request'); // https://github.com/request/request
var config = require('./config');
var createGetRequest = function(requestUrl, cb) {
  var options = {
    url: config.basicURL + requestUrl,
    json: true
  };
  request(options, cb);
};

var getPage = function(page){
  return !isNaN(page) ? page : '1';
};

var getLimit = function(limit){
  return !isNaN(limit) ? limit : '100';
};

module.exports = {
  getRoot: function(cb) {
    createGetRequest('', function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getFinlandTopWorks: function(cb) {
    createGetRequest('finland?method=topWorks', function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  // REGIONS
  getRegions: function(cb) {
    createGetRequest('region', function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getRegionByName: function(name, cb) {
    createGetRequest('region?name=' + name, function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getRegionMunicipalities: function(name, page, limit, cb) {
    createGetRequest('region?name=' + name + '&method=municipalities&page=' + getPage(page) + '&limit=' + getLimit(limit), function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getRegionPlaces: function(name, page, limit, cb) {
    createGetRequest('region?name=' + name + '&method=places&page=' + getPage(page) + '&limit=' + getLimit(limit), function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getRegionVenues: function(name, page, limit, cb) {
    createGetRequest('region?name=' + name + '&method=venues&page=' + getPage(page) + '&limit=' + getLimit(limit), function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getRegionEvents: function(name, page, limit, cb) {
    createGetRequest('region?name=' + name + '&method=events&page=' + getPage(page) + '&limit=' + getLimit(limit), function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getRegionTopWorks: function(name, cb) {
    createGetRequest('region?name=' + name + '&method=topWorks', function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  // MUNICIPALITIES

  getMunicipalities: function(page, limit, cb) {
    createGetRequest('municipality?page=' + getPage(page) + '&limit=' + getLimit(limit), function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getMunicipalityByName: function(name, cb) {
    createGetRequest('municipality?name=' + name, function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getMunicipalityPlaces: function(name, page, limit, cb) {
    createGetRequest('municipality?name=' + name + '&method=places&page=' + getPage(page) + '&limit=' + getLimit(limit), function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getMunicipalityVenues: function(name, page, limit, cb) {
    createGetRequest('municipality?name=' + name + '&method=venues&page=' + getPage(page) + '&limit=' + getLimit(limit), function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getMunicipalityEvents: function(name, page, limit, cb) {
    createGetRequest('municipality?name=' + name + '&method=events&page=' + getPage(page) + '&limit=' + getLimit(limit), function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getMunicipalityTopWorks: function(name, cb) {
    createGetRequest('municipality?name=' + name + '&method=topWorks', function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  // PLACES
  getPlaces: function(page, limit, cb) {
    createGetRequest('place?page=' + getPage(page) + '&limit=' + getLimit(limit), function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getPlaceById: function(id, cb) {
    createGetRequest('place?id=' + id, function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getPlaceVenues: function(id, page, limit, cb) {
    createGetRequest('place?id=' + id + 'method=venues&page=' + getPage(page) + '&limit=' + getLimit(limit), function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getPlaceTopWorks: function(id, cb) {
    createGetRequest('place?id=' + id + '&method=topWorks', function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  // VENUES
  getVenues: function(page, limit, cb) {
    createGetRequest('venue?page=' + getPage(page) + '&limit=' + getLimit(limit), function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getVenueById: function(id, cb) {
    createGetRequest('venue?id=' + id, function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getVenueByName: function(name, cb) {
    createGetRequest('venue?name=' + name, function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getVenueEvents: function(id, page, limit, cb) {
    createGetRequest('venue?id=' + id + 'method=events&page=' + getPage(page) + '&limit=' + getLimit(limit), function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getVenueTopWorks: function(id, cb) {
    createGetRequest('venue?id=' + id + '&method=topWorks', function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  // EVENTS
  getEvents: function(page, limit, cb) {
    createGetRequest('event?page=' + getPage(page) + '&limit=' + getLimit(limit), function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getEventById: function(id, cb) {
    createGetRequest('event?id=' + id, function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getEventShows: function(id, page, limit, cb) {
    createGetRequest('event?id=' + id + 'method=shows&page=' + getPage(page) + '&limit=' + getLimit(limit), function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  // SHOWS
  getShows: function(page, limit, cb) {
    createGetRequest('show?page=' + getPage(page) + '&limit=' + getLimit(limit), function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getShowById: function(id, cb) {
    createGetRequest('show?id=' + id, function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getShowWorks: function(id, page, limit, cb) {
    createGetRequest('show?id=' + id + 'method=works&page=' + getPage(page) + '&limit=' + getLimit(limit), function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  // WORKS
  getWorks: function(page, limit, cb) {
    createGetRequest('work?page=' + getPage(page) + '&limit=' + getLimit(limit), function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getWorkById: function(id, cb) {
    createGetRequest('work?id=' + id, function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getWorkByName: function(name, page, limit, cb) {
    createGetRequest('work?title=' + name + '&page=' + getPage(page) + '&limit=' + getLimit(limit), function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getWorkShows: function(id, page, limit, cb) {
    createGetRequest('work?id=' + id + 'method=shows&page=' + getPage(page) + '&limit=' + getLimit(limit), function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getWorkTopMunicipalities: function(id, cb) {
    createGetRequest('work?id=' + id + '&method=topMunicipalities', function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getWorkTopVenues: function(id, cb) {
    createGetRequest('work?id=' + id + '&method=topVenues', function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  // AUTHORS
  getAuthors: function(page, limit, cb) {
    createGetRequest('author?page=' + getPage(page) + '&limit=' + getLimit(limit), function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getAuthorById: function(id, cb) {
    createGetRequest('author?id=' + id, function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getAuthorWorks: function(id, page, limit, cb) {
    createGetRequest('author?id=' + id + 'method=works&page=' + getPage(page) + '&limit=' + getLimit(limit), function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getAuthorTopWorks: function(id, cb) {
    createGetRequest('author?id=' + id + '&method=topWorks', function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getAuthorTopVenues: function(id, cb) {
    createGetRequest('author?id=' + id + '&method=topVenues', function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  // ROLES
  getRoles: function(page, limit, cb) {
    createGetRequest('role?page=' + getPage(page) + '&limit=' + getLimit(limit), function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getRoleInfoByTitle: function(title, cb) {
    createGetRequest('role?titleAbbr=' + title, function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getRoleTopAuthorsByTitle: function(title, cb) {
    createGetRequest('role?titleAbbr=' + title + '&method=topAuthors', function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  // DATES
  getDates: function(page, limit, cb) {
    createGetRequest('date?page=' + getPage(page) + '&limit=' + getLimit(limit), function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getDatesByDatetime: function(datetime, cb) {
    createGetRequest('date?date=' + datetime, function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getDatesByStartDate: function(startDate, page, limit, cb) {
    createGetRequest('date?startDate=' + startDate + '&page=' + getPage(page) + '&limit=' + getLimit(limit), function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getDatesByMonth: function(month, page, limit, cb) {
    createGetRequest('date?month=' + month + '&page=' + getPage(page) + '&limit=' + getLimit(limit), function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  },

  getDatesByWeekdayNumber: function(weekdayNumber, page, limit, cb) {
    createGetRequest('date?weekday=' + weekdayNumber + '&page=' + getPage(page) + '&limit=' + getLimit(limit), function(error, response, body) {
      if (error) {
        cb(error, false, false);
      } else {
        cb(false, response, body);
      }
    });
  }

};

/* EXAMPLES:
 TeostoApi.getRoot(function(error, response, body) {
   if (error) console.log(error);
   console.log('status: ', response.statusCode);
   console.log(body);
 });

 TeostoApi.getVenueByName('tavastia', function(error, response, body) {
   if (error) console.log(error);
   console.log('status: ', response.statusCode);
   console.log(body);
 });

 TeostoApi.getEventById('81a00c3853', function(error, response, body) {
   if (error) console.log(error);
   console.log('status: ', response.statusCode);
   console.log(body);
 });

*/