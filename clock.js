class Clock {
  constructor() {
    let date = new Date();
    this.hours = date.getHours();
    this.min = date.getMinutes();
    this.sec = date.getSeconds();
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.  
    this.printTime();
    let self = this;
    setInterval(function(){
      self._tick(); 
    }, 1000 );
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hours}:${this.min}:${this.sec}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.sec++;
    if (this.sec === 60){
      this.sec = 0;
      this.min++;
    }
    if (this.min === 60) {
      this.min = 0;
      this.hours++;
    }
    
    if (this.hours === 24){
      this.hours = 0;
    }

    this.printTime();
  }
}

const clock = new Clock();