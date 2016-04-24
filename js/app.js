/**
 *This Script calcule and display date for EasyMel
 */



/**
 *Class for access of date
 */

var  melDate = {

  day: "",
  month: "",
  dayPerMonth:[],
  year: "",
  category:"",

  init: function(category)
  {
    var today = new Date();
    var month = new Date();
    var year = new Date();
    this.setCategory(category);
    this.setDay(today.getUTCDate());
    this.setMonth(today.getUTCMonth());
    this.setYear(today.getUTCFullYear());
    this.setDayPerMonth([31,28,31,30,31,30,31,31,30,31,30,31]);
  },

  setDayPerMonth: function(days)
  {

    this.dayPerMonth = days;
  },

  getDayPerMonth: function()
  {
    return this.dayPerMonth;
  },

  setDay: function(day)
  {
    this.day = day;
  },

  getDay: function()
  {
    return this.day;
  },

  setCategory: function(category)
  {
    this.category = category;
  },

  getCategory: function()
  {
    return this.category;
  },

  setMonth: function(month)
  {
    this.month = month;
  },

  getMonth: function()
  {
    return this.month;
  },

  setYear: function(year)
  {
    this.year = year;
  },

  getYear: function()
  {
    return this.year;
  },

  getDueDate: function()
  {
    switch (this.category)
    {
    case 'b':
      day = this.dueDate(3);
      break;
    case 'c':
      day = this.dueDate(10);
      break;
    case 'd':
      day = this.dueDate(120);
    }
    return day + '-' + this.getMonth() + '-' + this.getYear();
  },

  bissextile: function()
  {
    if (!(this.getYear() % 400) || !(this.getYear() % 4) && (this.getYear() % 100))
    {
      this.dayPerMonth[1] += 1;
    }
    else console.log("Ce n'est pas une année bissextile");
  },
  dueDate: function(cat)
  {
    //controle année bissextile
    this.bissextile();
    //on se place à l'index mois-1 du tableau
    //on récupère le nombre de jour
    var index = this.month-1;
    var nbDays = this.dayPerMonth[index];
    console.log(nbDays);
    //on soustrait le total au jour d'aujourd'hui pour savoir combien il reste de jour dans le mois
    var restDaysInMonth= nbDays - this.today;
    
    var dueDate;
    //boucle sur le nombre de jour restant.
    for (var i = 0; i<restDaysInMonth; i++)
    {
      dueDate++;
    }

    return dueDate;
    //envoi du resultat
  }
};



// Job Start here
var catB = Object.create(melDate);
var catC = Object.create(melDate);
var catD = Object.create(melDate);

catB.init("b");
catC.init("c");
catD.init("d");

document.querySelector('#catB').innerHTML = 'Due date ' + catB.getDueDate();
document.querySelector('#catC').innerHTML = 'Due date ' + catC.getDueDate();
document.querySelector('#catD').innerHTML = 'Due date ' + catD.getDueDate();

catB.bissextile();
