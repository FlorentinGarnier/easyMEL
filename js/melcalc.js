/// melcalc.js --- Calculator of due date
/// Commentary:
/// Code:
$(function(){
    //Récupérer la date
    //Calculer cat A (+3J)
    //Afficher la cat A
    //Calculer la cat B
    //Afficher la cat B
    //Calculer la cat C
    //Afficher la cat C
    //Calculer la cat D
    //Afficher la cat D
    var Mel = {
	init: function(cat){
	    this.cat = cat;
	},
	catB: function(){
	    var date;
	    date = this.cat + 3;
	    return date;
	}
    }
});
/// melcalc.js Ends of file
