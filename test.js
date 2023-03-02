class Clock {
	constructor() {
		this.hour = Date().slice(16, 18);
		this.minute = Date().slice(19, 21);
		this.second = Date().slice(22, 24);
		this.printTime();

	  // 1. Create a Date object.
	  // 2. Store the hours, minutes, and seconds.
	  // 3. Call printTime.
	  // 4. Schedule the tick at 1 second intervals.
	}
  
	printTime() {
		const hour = parseInt(this.hour) % 12 === 0 ? 12 : parseInt(this.hour) % 12

		return console.log(`${hour}:${this.minute}:${this.hour}`)
	  // Format the time in HH:MM:SS
	  // Use console.log to print it.
	}
  
	_tick() {
	  // 1. Increment the time by one second.
	  // 2. Call printTime.
	}
  }
  
  const clock = new Clock();