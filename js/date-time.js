class DateTime {
	constructor() {
		this._sidebarClock = document.querySelector('#user-profile-clock');
		this._sidebarDate = document.querySelector('#user-profile-date');
		this._setTime = this._setTime.bind(this);
		this._monthsArr = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];

		this._daysArr = [
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
			'Sunday'
		];

		this._init();
	}

	_appendZero(k) {
		// Append 0 before time elements if less hour's than 10
		if (k < 10) {
			return '0' + k;
		} else {
			return k;
		}
	}

	_setTime() {
		const date = new Date();
		let hour = date.getHours();
		let min = date.getMinutes();
		min = this._appendZero(min);
		hour = this._appendZero(hour);
		this._sidebarClock.innerText = `${hour}:${min}`;
		this._sidebarDate.innerText = `${this._daysArr[date.getDay()]}, ${this._monthsArr[date.getMonth()]} ` +
			`${this._appendZero(date.getDate())}, ${date.getFullYear()}`;
	}

	_startClock() {
		this._setTime();
		setInterval(this._setTime, 1000);
	}

	_init() {
		this._startClock();
	}
}
