function Clock(date) {
  this.date = date,
  this.secs = (date.getHours()*3600 + date.getMinutes()*60 + date.getSeconds())
}

Clock.prototype.run = function () {
  var that = this;
  console.log(this.hours() + ":" + this.minutes() + ":" + this.seconds());
  setInterval(function () {
    that.secs += 5;
    console.log(that.hours() + ":" + that.minutes() + ":" + that.seconds());
  }, 5000);
};

Clock.prototype.hours = function () {
  return Math.floor(this.secs/3600);
}
Clock.prototype.minutes = function () {
  return Math.floor((this.secs - (this.hours() * 3600)) / 60 );
}
Clock.prototype.seconds = function () {
  return this.secs % 60;
}

var time1 = new Clock(new Date());

time1.run();