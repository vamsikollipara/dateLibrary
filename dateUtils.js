/**
 * This is pure javascript library for add on Date functions
 * Free to use by any one just don't forget to credit the author
 * Author: Vamsi Krishna Kollipara
 */

Date.monthFullNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
Date.monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
Date.monthLetters = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

Date.DayFullNames = ["Sunday", "Monday", "Tuesday", "WednesDay", "Thursday", "Friday", "Saturday"];
Date.DayShortNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
Date.DayLetters = ["Su", "M", "Tu", "W", "Th", "F", "Sa"];

Date.daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
Date.daysInMonthLeapYear = [31,29,31,30,31,30,31,31,30,31,30,31];


Date.prototype.getFullMonthName = function() {
	return Date.monthFullNames[this.getMonth()];
}
Date.prototype.getShortMonthName = function() {
	return Date.monthShortNames[this.getMonth()];
}
Date.prototype.getMonthLetter = function() {
	return Date.monthLetters[this.getMonth()];
}

Date.prototype.getFullDayName = function() {
	return Date.DayFullNames[this.getDay()];
}
Date.prototype.getShortDayName = function() {
	return Date.DayShortNames[this.getDay()];
}
Date.prototype.getDayLetter = function() {
	return Date.DayLetters[this.getDay()];
}

Date.prototype.getWeek = function() {
}

Date.prototype.addDays = function(days) {
	return new Date(this.setDate(this.getDate() + days));
}
Date.prototype.removeDays = function(days) {
	return new Date(this.setDate(this.getDate() - days));
}

Date.prototype.addMonths = function(months) {
	return new Date(this.setMonth(this.getMonth() + months));
}
Date.prototype.removeMonths = function(months) {
	return new Date(this.setMonth(this.getMonth() - months));
}

Date.prototype.addYears = function(years) {
	return new Date(this.setFullYear(this.getFullYear() + years));
}
Date.prototype.removeYears = function(years) {
	return new Date(this.setFullYear(this.getFullYear() - years));
}

Date.prototype.addHours = function(hours) {
	return new Date(this.setHours(this.getHours() + hours));
}
Date.prototype.removeHours = function(hours) {
	return new Date(this.setHours(this.getHours() - hours));
}

Date.prototype.addMinutes = function(minutes) {
	return new Date(this.setMinutes(this.getMinutes() + minutes));
}
Date.prototype.removeMinutes = function(minutes) {
	return new Date(this.setMinutes(this.getMinutes() - minutes));
}

Date.prototype.addSeconds = function(seconds) {
	return new Date(this.setSeconds(this.getSeconds() + seconds));
}
Date.prototype.removeSeconds = function(seconds) {
	return new Date(this.setSeconds(this.getSeconds() - seconds));
}

Date.prototype.addMilliSeconds = function(ms) {
	return new Date(this.setMilliseconds(this.getMilliseconds() + ms));
}
Date.prototype.removeMilliSeconds = function(ms) {
	return new Date(this.setMilliseconds(this.getMilliseconds() - ms));
}

Date.prototype.compareWith = function() {
}
Date.prototype.isBetween = function(firstDate, secondDate) {
	return (firstDate < this && secondDate > this)
}

Date.prototype.isSunday =function() {
	return (this.getDay()==0);
}
Date.prototype.isMonday =function() {
	return (this.getDay()==1);
}
Date.prototype.isTuesday =function() {
	return (this.getDay()==2);
}
Date.prototype.isWednesday =function() {
	return (this.getDay()==3);
}
Date.prototype.isThursday =function() {
	return (this.getDay()==4);
}
Date.prototype.isFriday =function() {
	return (this.getDay()==5);
}
Date.prototype.isSaturday =function() {
	return (this.getDay()==6);
}


/*
 * dateOptions @Object
 * dateOptions = {
 * "year":
 * "month":
 * "date":
 * "hours":
 * "minutes":
 * "seconds":
 * "milliSeconds":
 * }
 */
Date.prototype.add = function(dateOptions) {
	if(!isNaN(dateOptions.year)) {
		this.setFullYear(dateOptions.year)
	}
	
	if(!isNaN(dateOptions.month)) {
		this.setMonth(dateOptions.month)
	}
	
	if(!isNaN(dateOptions.hours)) {
		this.setHours(dateOptions.hours)
	}
	
	if(!isNaN(dateOptions.minutes)) {
		this.setMinutes(dateOptions.minutes)
	}
	
	if(!isNaN(dateOptions.seconds)) {
		this.setSeconds(dateOptions.seconds)
	}
	
	if(!isNaN(dateOptions.milliSeconds)) {
		this.setMilliSeconds(dateOptions.milliSeconds)
	}	
}
Date.prototype.remove = function(dateOptions) {
}
Date.prototype.set = function(dateOptions) {
}
Date.prototype.get = function() {
}

Date.prototype.clearTime = function() {
	this.setHours(0);
	this.setMinutes(0);
	this.setSeconds(0);
	this.setMilliSeconds(0);
	return new Date(this);
}
Date.prototype.isEqualTo = function(date) {
}

Date.prototype.moveToEndOfWeek = function() {
	return new Date(this.addDays(6-this.getDay()));
}
Date.prototype.moveToEndOfMonth = function() {
	return new Date(this.addDays(this.daysInMonth()-this.getDate()))
}
Date.prototype.moveToEndOfYear = function() {
	this.setMonth(11);
	return new Date(this.setDate(31));
}

Date.prototype.moveToStartOfWeek = function() {
	return new Date(this.removeDays(this.getDay()));
}
Date.prototype.moveToStartOfMonth = function() {
	return new Date(this.removeDays(this.getDate()-1));
}
Date.prototype.moveToStartOfYear = function() {
	this.removeDays(this.getDate()-1)
	return new Date(this.removeMonths(this.getMonth()));
}


Date.prototype.isWeekDay = function() {
	return !(this.getDay() == 0 || this.getDay() == 6);
}
Date.prototype.isWeekEnd = function() {
	return (this.getDay() == 0 || this.getDay() == 6);
}
Date.prototype.isEndOfWeek = function() {
	return (this.getDay() == 0 || this.getDay() == 6);
}
Date.prototype.isEndOfMonth = function() {
	return (this.isLeapYear() ? (this.getDate() == Date.daysInMonthLeapYear[this.getMonth()]) : (this.getDate() == Date.daysInMonth[this.getMonth()]));  
}
Date.prototype.isEndOfYear = function() {
	var x=new Date(this);
	return (x.addDays(1).getMonth() == 0);
}

Date.prototype.isLeapYear = function() {
	return ((this.getFullYear() % 4 == 0) && (this.getFullYear() % 100 != 0)) || (this.getFullYear() % 400 == 0);
}
Date.prototype.daysInMonth = function() {
	return (this.isLeapYear() ? (Date.daysInMonthLeapYear[this.getMonth()]) : (Date.daysInMonth[this.getMonth()])); 
}
Date.prototype.next = function() {
	return this.addDays(1);
}

Date.prototype.previous = function() {
	return this.removeDays(1);
}

Date.prototype.getWeekNumber = function() {
	var onejan = new Date(this.getFullYear(),0,1);
	var nowDate = this
	return Math.ceil((((nowDate - onejan) / 86400000) + onejan.getDay()+1)/7);
}
