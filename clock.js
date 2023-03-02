class Clock {
  constructor() {
    this.date = new Date();
    this.hour = this.date.getHours();
    this.minute = this.date.getMinutes();
    this.second = this.date.getSeconds();
    this.printTime();

    setInterval(this._tick.bind(this), 1000);

    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
  }

  printTime() {
    const hour = parseInt(this.hour) % 12 === 0 ? 12 : parseInt(this.hour) % 12;

    return console.log(`${hour}:${this.minute}:${this.second}`);
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  _tick() {
	this.date = new Date();
	this.hour = this.date.getHours();
    this.minute = this.date.getMinutes();
    this.second = this.date.getSeconds();
	this.printTime()
  }
}

const clock = new Clock();

