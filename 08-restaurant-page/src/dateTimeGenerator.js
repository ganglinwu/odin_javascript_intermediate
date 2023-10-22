// IIFE to extend Date object prototype

(function () {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    Date.prototype.getDayName = function () {
        return days[this.getDay()];
    };

    Date.prototype.getMonthName = function () {
        return months[this.getMonth()];
    };
})();


// date time generator class

export default class OpeningHours {
    constructor(wkdayOpen, wkdayClose, wkendOpen, wkendClose) {
        this.wkdayOpen = wkdayOpen;
        this.wkdayClose = wkdayClose;
        this.wkendOpen = wkendOpen;
        this.wkendClose = wkendClose;
        this.wkdaySlots = this._generateTimeSlots(wkdayOpen, wkdayClose);
        this.wkendSlots = this._generateTimeSlots(wkendOpen, wkendClose);
    }

    _isWkend(dateObj) {
        if (dateObj.getDay()===0 || dateObj.getDay() === 6) {
            return true
        } else return false
    }

    _cafeIsClosed(dateObj) {
        if (this._isWkend) {
            if (dateObj.getHours()< this.wkendClose) {
                return false
            } else return true
        } else {
            if (dateObj.getHours() < this.wkdayClose) {
                return false
            } else return true
        }
    }

    nextAvailableTime(dateObj) {
        if (dateObj.getDay() === 2) {
            // check because cafe is closed tuesdays

            // note: there's no need to clone! we SHOULD change the dateObj directly
            dateObj.setDate(dateObj.getDate() + 1);
            dateObj.setHours(this.wkdayOpen - 1);


            return this.nextAvailableTime(dateObj);
        } else if (this._cafeIsClosed(dateObj)) {
            // check if cafe is closed (after 6pm)
     
            // note: there's no need to clone! we SHOULD change the dateObj directly
            dateObj.setDate(dateObj.getDate() + 1);
            if (this._isWkend(dateObj)) {
                dateObj.setHours(this.wkendOpen - 1);
            } else {
                dateObj.setHours(this.wkdayOpen - 1);
            }
            return this.nextAvailableTime(dateObj);           
        } else {
            // else return current date in str form
            // also return the remainingOpeningHours in an Array
            

            const dateStr = `(${dateObj.getDayName()}) ${dateObj.getMonthName()} ${dateObj.getDate()}, ${dateObj.getFullYear()}`
            // e.g. (Fri) Oct 20, 2023
            let remainingOpenHoursArr=[]
            if (this._isWkend) {
                remainingOpenHoursArr = [...this.wkendSlots];
                while (dateObj.getHours() > Number(remainingOpenHoursArr[0].substring(0,2))) {
                    remainingOpenHoursArr.shift();
                    }
                if (dateObj.getHours() == Number(remainingOpenHoursArr[0].substring(0,2)) && dateObj.getMinutes()>30) {
                    remainingOpenHoursArr.shift();
                    }
                } else {
                remainingOpenHoursArr = [...this.wkdaySlots];
                while (dateObj.getHours() > Number(remainingOpenHoursArr[0].substring(0,2))) {
                    remainingOpenHoursArr.shift();
                } 
                if (dateObj.getHours() == Number(remainingOpenHoursArr[0].substring(0,2)) &&dateObj.getMinutes()>30) {
                    remainingOpenHoursArr.shift();
                }


            }
            
            return [dateStr, remainingOpenHoursArr]
        }
    }

    // helper function to generate time slots based on opening closing time
    _generateTimeSlots(open,close) {
        let timeSlotArr = []
        while (open < close) {
            timeSlotArr.push(''+open+':00')
            timeSlotArr.push(''+open+':30')
            open+=1
        }
        return timeSlotArr
    }
}

// Questions
// 1) if i called OpeningHours.nextAvailableTime() from another file, would it have access to the IIFE?
// 2) need to implement something of while (availableDatesArr.length < 3) {generate more dates}
//    (will probably need to keep a counter to increment by 1)