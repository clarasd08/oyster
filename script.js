var data = [
    {
      Name: "Browse the Philips Collection",
      Cost: "$20",
      Ward: 2,
      Category: "Arts and Culture",
      Kids: "No",
      Link: "https://www.phillipscollection.org/",
      Pic: "cacassets/philipsCollection.jpeg",
    },
    { Name: "Eat your way through Eastern Market", Cost: "Varies", Ward: 6, Category: "Food", Kids: "Yes", Link: "https://easternmarket-dc.org/", Pic: "cacassets/easternMarket.jpeg"},
    {
      Name: "Wander the Congressional Cemetary", Cost: "Free", Ward: 6, Category: "Nature/Sports", Kids: "No", Link: "https://congressionalcemetery.org/", Pic: "/cacassets/congressionalCemetary.jpeg"
    },
    {
      Name:"Experience life in the 19th century with the Heurich House", Cost: "Free", Ward: 2, Category: "Arts and Culture", Kids: "Yes", Link: "https://www.heurichhouse.org/", Pic: "/cacassets/heurichHouse.jpeg"
    },
    {
      Name: "Play Tennis at the Southeast Tennis and Learning Center", Cost: "$35/hour", Ward: 8, Category: "Nature/Sports", Kids: "Yes", Link: "https://dpr.dc.gov/page/southeast-tennis-and-learning-center-setlc", Pic: "/cacassets/southeastTennisAndLearningCenter.jpeg"
    },
    {
      Name: "Rock out at the 9:30 Club", Cost: "Varies", Ward: 1, Category: "Arts and Culture", Kids: "No", Link: "https://www.930.com/", Pic: "/cacassets/9-30Club.jpeg"
    },
    {
      Name: "See a show at Howard Theatre", Cost: "Varies", Ward: 1, Category: "Arts and Culture", Kids: "No", Link: "https://www.thehowardtheatre.com/", Pic: "/cacassets/howardTheater.jpeg"
    },
    {
      Name: "Go on a Walk throught the beauty of the National Arboreteum", Cost: "Free", Ward: 5, Category: "Nature/Sports", Kids: "Yes", Link: "https://www.usna.usda.gov/", Pic: "/cacassets/nationalArboretum.jpeg"
    },
    {
      Name: "Enjoy DC's green spaces at Kenilworth Auquatic Gardens", Cost: "Free", Ward: 7, Category: "Nature/Sports", Kids: "Yes", Link: "https://www.nps.gov/keaq/index.htm", Pic: "/cacassets/kenilworthAquaticGardens.jpeg"
    },
    {
      Name: "Tour a Mansion at Hillwood Gardens and Estate", Cost: "Free", Ward: 3, Category: "Nature/Sports", Kids: "Yes", Link: "https://hillwoodmuseum.org/", Pic: "/cacassets/hillwood.jpeg"
    },
    {
      Name: "Feel like you're in Europe at the Franciscan Monastery of the Holy Land in America", Cost: "Free", Ward: 5, Category: "Arts and Culture", Kids: "No", Link: "https://myfranciscan.org/", Pic: "/cacassets/franciscanMonastery.jpeg"},
    {
      Name: "Embrace culture and art at Culture House", Cost: "Free", Ward: 6, Category: "Arts and Culture", Kids: "No", Link: "https://www.culturehousedc.org/", Pic: "/cacassets/cultureHouse.jpeg"
    },
    {
      Name: "Wander through Blagden Alley", Cost: "Free", Ward: 1, Category: "Arts and Culture", Kids: "No", Link: "https://www.washingtonpost.com/travel/united-states/blagden-alley-neighborhood-washington-dc/", Pic: "/cacassets/blagdenAlley.jpeg"
    },
    {
      Name: "Go on a walk at Kingman Island", Cost: "Free", Ward: 7, Category: "Nature/Sports", Kids: "Yes", Link: "https://www.kingmanisland.com/", Pic: "/cacassets/kingmanIsland.jpeg"
    },
    {
      Name: "Taste all the food at Union Market", Cost: "Varies", Ward: 5, Category: "Food", Kids: "Yes", Link: "https://unionmarketdc.com/", Pic: "/cacassets/unionMarket.jpeg"
    },
    {
      Name: "Kayak or paddleboard at Fletcher's Cove Boathouse", Cost: "Varies", Ward: 3, Category: "Nature/Sports", Kids: "Yes", Link: "https://boatingindc.com/fletchers-boathouse/", Pic: "/cacassets/fletchersCove.jpeg"
    },
    {
      Name: "Learn about forgotten past at the African American Civil War Memorial and Mueseum", Cost: "Free", Ward: 1, Category: "Museums and History", Kids: "Yes", Link: "https://afroamcivilwar.org/", Pic: "/cacassets/AACWMM.jpeg"
    },
    {
      Name: "Enjoy DC's theater scene at Studio Theater", Cost: "Varies", Ward: 2, Category: "Arts and Culture", Kids: "No", Link: "https://www.studiotheatre.org/", Pic: "/cacassets/studioTheater.jpeg"
    },
    {
      Name: "Shop the H Street Cooridor", Cost: "Varies", Ward: 6, Category: "Shopping", Kids: "Yes", Link: "https://washington.org/dc-neighborhoods/h-street-ne", Pic: "/cacassets/hStreet.jpeg"
    },
    {
      Name: "Find small-buisnesses shopping in Shaw", Cost: "Varies", Ward: 1, Category: "Shopping", Kids: "Yes", Link: "https://washington.org/dc-neighborhoods/shaw", Pic: "/cacassets/shaw.jpeg"
    },
    {
      Name: "Stroll iconic M street and shop in Georgetown", Cost: "Varies", Ward: 2, Category: "Shopping", Kids: "Yes", Link: "https://www.georgetowndc.com/", Pic: "/cacassets/georgetown.jpeg"
    }, {
      Name: "Learn about Anacostia at the Anacostia Community Mueseum", Cost: "Free", Ward: 8, Category: "Museums and History", Kids: "Yes", Link: "https://anacostia.si.edu/", Pic: "/cacassets/anacostiaMuseum.jpeg"
    },
    {
      Name: "Explore the secret rooms of the Mansion on O Street", Cost: "$30/person", Ward: 2, Category: "Arts and Culture", Kids: "Yes", Link: "https://omansion.com/", Pic: "/cacassets/mansionOStreet.jpeg"
    }, {
      Name: "See art at the Dupont Underground", Cost: "Free", Ward: 2, Category: "Arts and Culture", Kids: "No", Link: "https://dupontunderground.org/", Pic: "/cacassets/dupontUnderground.jpeg"
    }, {
      Name: "Spend a night out at the Black Cat", Cost: "Varies", Ward: 1, Category: "Arts and Culture", Kids: "No", Link: "https://www.blackcatdc.com/", Pic: "/cacassets/blackCat.jpeg"
    }, {
      Name: "Take a trip up to Capitol Dome", Cost: "Free", Ward: 2, Category: "Museums and History", Kids: "Yes", Link: "https://www.visitthecapitol.gov/visit/book-a-tour", Pic: "/cacassets/capitolDome.jpeg"
    }, {
      Name: "Admire the architecture of the National Cathedral", Cost: "Free", Ward: 3, Category: "Museums and History", Kids: "Yes", Link: "https://cathedral.org/", Pic: "/cacassets/nationalCathedral.jpeg"
    }, {
      Name: "Visit Cedar Hill, the home of Fredrick Douglas", Cost: "Free", Ward: 8, Category: "Museums and History", Kids: "Yes", Link: "https://www.nps.gov/frdo/index.htm", Pic: "/cacassets/cedarHill.jpeg"
    }, {
      Name: "Explore the National Law Enforcment Mueseum", Cost: "$22/person", Ward: 6, Category: "Museums and History", Kids: "Yes", Link: "https://nleomf.org/museum/", Pic: "/cacassets/lawEnforcement.jpeg"
    }, {
      Name: "Visit the National Mueseum of the US Navy", Cost: "Free", Ward: 8, Category: "Museums and History", Kids: "Yes", Link: "https://www.history.navy.mil/content/history/museums/nmusn.html", Pic: "cacassets/navyMuseum.jpeg"
    }, {
      Name: "Roller Skate in Anacostia Park", Cost: "Free", Ward: 8, Category: "Nature/Sports", Kids: "Yes", Link: "https://www.nps.gov/anac/planyourvisit/roller-skating.htm", Pic: "/cacassets/anacostiaRollerskating.jpeg"
    }, {
      Name: "Go shopping in Adams Morgan", Cost: "Varies", Ward: 1, Category: "Shopping", Kids: "Yes", Link: "https://washington.org/dc-neighborhoods/adams-morgan", Pic: "/cacassets/adamsMorgan.jpeg"
    }, {
      Name: "Sing the night awat at Muzette Karaoke", Cost: "Startes at $35/hour", Ward: 1, Category: "Arts and Culture", Kids: "Yes", Link: "https://muzette.com/", Pic: "/cacassets/karaoke.jpeg"
    }, {
      Name: "Admire the plants of the National Botanic Gardens", Cost: "Free", Ward: 6, Category: "Nature/Sports", Kids: "Yes", Link: "https://www.usbg.gov/", Pic: "/cacassets/botanicGardens.jpeg"
    }, {
      Name: "Workout at the Free Capital Riverfront Summer Workout Classes", Cost: "Free", Ward: 8, Category: "Nature/Sports", Kids: "No", Link: "https://www.capitolriverfront.org/do/outdoor-fitness-specialty-class", Pic: "/cacassets/summerWorkout.jpeg"
    }, {
      Name: "Visit the National Museum of Women in the Arts", Cost: "$13/person", Ward: 2, Category: "Museums and History", Kids: "Yes", Link: "https://nmwa.org/", Pic: "/cacassets/womenInArts.jpeg"
    }, {
      Name: "Visit Dumbarton Oaks", Cost: "$7/person", Ward: 2, Category: "Nature/Sports", Kids: "Yes", Link: "https://www.doaks.org/", Pic: "/cacassets/dumbartonOaks.jpeg"
    }, {
      Name: "Explore Chinatown", Cost: "Free", Ward: 2, Category: "Shopping", Kids: "No", Link: "https://www.trolleytours.com/washington-dc/tours-of-chinatown", Pic: "/cacassets/chinatown.jpeg"
    }, {
      Name: "Visit President Lincoln's Cottage", Cost: "$15/person", Ward: 5, Category: "Museums and History", Kids: "Yes", Link: "https://www.lincolncottage.org/", Pic: "/cacassets/cottage.jpeg"
    }, {
      Name: "Restaraunt hop in Mount Pleasant", Cost: "Varies", Ward: 1, Category: "Food", Kids: "Yes", Link: "https://washington.org/visit-dc/things-see-do-mount-pleasant", Pic: "/cacassets/mountPleasant.jpeg"
    }, {
      Name: "Have brunch at Busboys and Poets", Cost: "Varies", Ward: 4, Category: "Food", Kids: "Yes", Link: "https://www.busboysandpoets.com/locations/?location=takoma&venue=takoma", Pic: "/cacassets/busboysPoets.jpeg"
    }, {
      Name: "Sample Ethiopian Cuisine in Shaw", Cost: "Varies", Ward: 1, Category: "Food", Kids: "No", Link: "https://www.yelp.com/search?cflt=ethiopian&find_loc=Shaw%2C+Washington%2C+DC+20001", Pic: "/cacassets/ethiopian.jpeg"
    }, {
      Name: "Visit the Municipal Fish Market", Cost: "Varies", Ward: 6, Category: "Food", Kids: "Yes" , Link: "https://www.wharfdc.com/fish-market/", Pic: "/cacassets/fish.jpeg"
    }, {
      Name: "Listen to a book talk at Politics and Prose", Cost: "Free", Ward: 3, Category: "Arts and Culture", Kids: "No", Link: "https://www.politics-prose.com/events/detailed-list", Pic: "/cacassets/politicsProse.jpeg"
    }, {
      Name: "Horseback Riding in Rock Creek Park", Cost: "$62/hour", Ward: 3, Category: "Nature/Sports", Kids: "No", Link: "https://rockcreekhorsecenter.com/", Pic: "/cacassets/horsebackRiding.jpeg"
    }, {
      Name: "Go swimming at the Takoma Pool", Cost: "Free", Ward: 4, Category: "Nature/Sports", Kids: "Yes", Link: "https://dpr.dc.gov/page/takoma-aquatic-center", Pic: "/cacassets/takomaPool.jpeg"
    }, {
      Name: "Check out the Parks at Historic Walter Reed and its activities", Cost: "Varies", Ward: 4, Category: "Shopping", Kids: "No", Link: "https://theparksdc.com/", Pic: "/cacassets/theParksWalterReed.jpeg"
    }, {
      Name: "Visit the Marvin Gaye Community Farm", Cost: "Free", Ward: 7, Category: "Food", Kids: "Yes", Link: "https://washingtonparks.net/marvin-gaye-greening-center/", Pic: "/cacassets/marvinGaye.jpeg"
    }, {
      Name: "Ride the DC Streetcar", Cost: "Free", Ward: 7, Category: "Museums and History", Kids: "Yes", Link: "https://dcstreetcar.com/", Pic: "/cacassets/streetcar.jpeg"
    }, {
      Name: "Catch a show at the Filmore Music Venue", Cost: "Varies", Ward: 4, Category: "Arts and Culture", Kids: "No", Link: "https://www.livenation.com/venue/KovZpZA6tFlA/the-fillmore-silver-spring-events", Pic: "/cacassets/filmore.jpeg"
    }, 
  {
    Name: "Play Ping-Pong at Washington D.C. Table Tennis", Cost: "$20", Ward: 4, Category: "Nature/Sports", Kids: "Yes", Link: "https://wdctt.com/", Pic: "/cacassets/tableTennis.jpeg"
  }, {
    Name: "Visit the HBCU Museum", Cost: "$8", Ward: 4, Category: "Museums and History", Kids: "Yes", Link: "https://thehbcumuseum.com/", Pic: "/cacassets/hbcu.png"
  }
    ]

var filteredData = []
var possiblePlaces = [];
var currentActivityIndex = 0;

function next() {
  var filtered = checkFiltered();
  if (filtered == false) {
    if (currentActivityIndex == data.length - 1) {
      currentActivityIndex = 0;
    } else {
      currentActivityIndex = currentActivityIndex + 1;
    }
    updateActivityDisplay(data)
  } else {
    if (currentActivityIndex == filtered.length) {
      currentActivityIndex = 0;
    } else {
      currentActivityIndex = currentActivityIndex + 1;
    }
    updateActivityDisplay(filtered)
  }
}

function back() {
  var filtered = checkFiltered();
  if (filtered == false) {
    if (currentActivityIndex == 0) {
      currentActivityIndex = data.length - 1;
    } else {
      currentActivityIndex = currentActivityIndex - 1;
    }
    updateActivityDisplay(data)
  } else {
    if (currentActivityIndex == 0) {
      currentActivityIndex = filtered.length - 1;
    } else {
      currentActivityIndex = currentActivityIndex - 1;
    }
    updateActivityDisplay(filtered)
  }
}

function updateActivityDisplay(set) {
  var activity = set[currentActivityIndex];
  document.getElementById("nameLabel").innerHTML = `Name: ${activity.Name}`;
  document.getElementById("wardsLabel").innerHTML = `Wards: ${ activity.Ward}`;
  document.getElementById("costLabel").innerHTML = `Cost: ${activity.Cost}`;
  document.getElementById("categoriesLabel").innerHTML =
    `Categories: ${activity.Category}`;
  document.getElementById("linkLabel").innerHTML = `${activity.Link}`;
  document.getElementById("activityImage").src = activity.Pic
}


function seeAll() {
  currentActivityIndex = 0
  window.location.href='suggestions.html'
  updateActivityDisplay(data)
}

function checkFiltered() {
  var filterBy = document.getElementById("filterByDropdown").value;
  if (filterBy == "All") {
    return false
  } else {
    filteredData = [];
    for (var i = 0; i < data.length; i++) {
      if (data[i].Category == filterBy) {
        filteredData.push(data[i])
      }
    }
    return filteredData
  }
}

function quiz() {
  possiblePlaces = []
  var ward = document.getElementById("ward").value;
  var kids = document.getElementById("kids").value;
  var cost = document.getElementById("budget").value;
  var type = document.getElementById("activityType").value;
  for (var i=0; i<data.length; i++) {
    if ((data[i].Ward == ward || ward=="Any") && (data[i].Category == type)) {
      if ((data[i].Kids == "Yes") || ((data[i].Kids == "No") && (kids == "No"))) {
        if (data[i].Cost == "Free") {
          possiblePlaces.push(data[i])
        } else if (data[i].Cost == "Varies" && cost != "Free") {
          possiblePlaces.push(data[i])
        } else if ((cost == "Medium") || (cost == "AnyCost")) {
          possiblePlaces.push(data[i])
        }
      }
    }
    
}
  if (possiblePlaces.length == 0) {
    document.getElementById("NumActivites").innerHTMl = ""
    document.getElementById("nameLabelQuiz").innerHTML = "There were no activities that matched your criteria, please adjust your choices.";
    document.getElementById("wardsLabelQuiz").innerHTML = ""
    document.getElementById("costLabelQuiz").innerHTML = ""
    document.getElementById("categoriesLabelQuiz").innerHTML = ""

  } else {
    //document.getElementById("NumActivities").innerHTML = `There are ${possiblePlaces.length} places that fit your criteria.`  
      updateActivityDisplayQuiz(possiblePlaces)
  }
}


function updateActivityDisplayQuiz(set) {
var activityQuiz = set[currentActivityIndex];
document.getElementById("nameLabelQuiz").innerHTML = `Name: ${activityQuiz.Name}`;
document.getElementById("wardsLabelQuiz").innerHTML = `Ward: ${ activityQuiz.Ward}`;
document.getElementById("costLabelQuiz").innerHTML = `Cost: ${activityQuiz.Cost}`;
document.getElementById("categoriesLabelQuiz").innerHTML =
  `Category: ${activityQuiz.Category}`;
  document.getElementById("linkLabelQuiz").innerHTML = `${activityQuiz.Link}`;
  document.getElementById("activityImageQuiz").src = activityQuiz.Pic;
}
function nextQuiz() {
  if (currentActivityIndex == possiblePlaces.length - 1) {
    currentActivityIndex = 0
  } else {
  currentActivityIndex += 1
  }
  updateActivityDisplayQuiz(possiblePlaces)
}
function backQuiz() {
  if (currentActivityIndex == 0) {
    currentActivityIndex = possiblePlaces.length - 1
  } else {
    currentActivityIndex -= 1
  }
  updateActivityDisplayQuiz(possiblePlaces)
}

function badge() {
  const email = document.getElementById("emailaddress").value
  var ward1 = 0;
  var ward2 = 0;
  var ward3 = 0;
  var ward4 = 0;
  var ward5 = 0;
  var ward6 = 0;
  var ward7 = 0;
  var ward8 = 0;
  const checked = document.querySelectorAll('input[type="checkbox"]:checked')
  checkedValues = Array.from(checked).map(x => x.value)
  for (var i=0; i<checkedValues.length; i++){
    if (checkedValues[i] == "1") {
      ward1 +=1
    } else if (checkedValues[i] == "2") {
      ward2 += 1
    } else if (checkedValues[i] == "3") {
      ward3 += 1
    } else if (checkedValues[i] == "4") {
      ward4 += 1
    } else if (checkedValues[i] == "5") {
      ward5 += 1
    } else if (checkedValues[i] == "6") {
      ward6 += 1
    } else if (checkedValues[i] == "7") {
      ward7 += 1
    } else if (checkedValues[i] == "8") {
      ward8 += 1
    } 
  }
  if (ward1 >= 3 && ward2 >= 3 && ward3 >= 3 && ward4 >= 3 && ward5 >= 3 && ward6 >= 3 && ward7 >= 3 && ward8 >= 3) {
    completed(email)
  } else {
    document.getElementById("badge").innerHTML = `You have to yet completed at least 3 activities in each ward. Don't worry though, this is just a great excuse to explore more! Head to the all activites page to see more suggestistions or go to the seuggest a new activity page to submit a request for a new activity to be added to the site. Here are the number of activities you have completed in each ward: 
    Ward 1: ${ward1}
    Ward 2: ${ward2}
    Ward 3: ${ward3}
    Ward 4: ${ward4}
    Ward 5: ${ward5}
    Ward 6: ${ward6}
    Ward 7: ${ward7}
    Ward 8: ${ward8}`
  }

}


function newActivity() {
  const recipient = 'worldsoysterdc@gmail.com';
  const subject = 'New Activity';
  const body = '';

  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
};

function completed(email) {
  const name = document.getElementById("nameInput").value
  const recipient = email;
  const subject = 'Congratulations';
  const body = `Congratulations ${name}, you have completed the World\'s your Oyster\'s explore DC challenge! Thank you for partcipating in the World\'s your Oyster. This email is to cerfity that ${name} has completed the challenge, so go and brag and show it off to all your friends if you want! Thank you so much for participating in the challenge, we hope that you had fun and got to explore new places! Please continue exploring, there is always more!`;

  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink

}