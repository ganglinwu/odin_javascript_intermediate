import { createDiv, removeAllChildNodes } from "."

export default function loadContact(openingHours) {
    const contactMainDiv = createDiv();
    contactMainDiv.setAttribute('id', 'contactMainDiv');

    /* ------------------------------------ */
    /* --------- where to find us --------- */
    /* ------------------------------------ */
    const contactTitle = createDiv('title');
    contactTitle.innerText = 'Where to Find us!'
    const gmapsIframe = document.createElement('iframe');
    gmapsIframe.setAttribute('id', 'gmapsIframe')
  
    gmapsIframe.allowFullscreen='';
    gmapsIframe.loading='lazy';
    gmapsIframe.referrerPolicy='no-referrer-when-downgrade';

    gmapsIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6912681612303!2d103.88319307584166!3d1.3618939986252117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17b48481c657%3A0xa51fa321551b358e!2sPentagon%20Learning%20%7C%20Sec%203%204%20A%20Math%20Tuition%20JC%20H2%20Math%20Tuition!5e0!3m2!1sen!2ssg!4v1697636299324!5m2!1sen!2ssg"
    
    contactMainDiv.appendChild(contactTitle);
    contactMainDiv.appendChild(gmapsIframe);

    /* --------------------------------- */
    /* --------- opening hours --------- */
    /* ---------------------------------- */
    const openingHoursTitle = createDiv('title');
    openingHoursTitle.innerText = 'Opening Hours'
    const openingHoursText = createDiv('text');
    openingHoursText.innerText = `Weekdays ${openingHours.wkdayOpen}am - ${openingHours.wkdayClose%12}pm \n Weekends ${openingHours.wkendOpen}am - ${openingHours.wkendClose%12}pm \n Closed on Tuesdays`


    contactMainDiv.appendChild(openingHoursTitle);
    contactMainDiv.appendChild(openingHoursText);


    
    /* ------------------------------------ */
    /* --------- reservation form --------- */
    /* ------------------------------------ */
   
    // create title and append
    const reserveTitle = createDiv('title')
    reserveTitle.innerText = 'Make a reservation'

    contactMainDiv.appendChild(reserveTitle);

    // create form
    const form = document.createElement('form');
    form.action = '';
    form.method = 'post'

    // form will have 3 dropdown inputs
    // 1) party size
    // 2) date
    // 3) time

    let dateTimeArr = [];
    let dateToday = new Date();
    
    while (dateTimeArr.length < 3) {
        dateTimeArr.push(openingHours.nextAvailableTime(dateToday));
        dateToday.setDate(dateToday.getDate() + 1);
        if (dateToday.getDay() === 0 || dateToday.getDay() === 6) {
            dateToday.setHours(openingHours.wkendOpen-1, 59);
        } else {
            dateToday.setHours(openingHours.wkdayOpen-1, 59);
        }
    }

    let dateArr = []
    dateTimeArr.forEach((element)=> {
        dateArr.push(element[0]);
    })

    let timeArr = [...dateTimeArr[0][1]];

    const partySizeInput = createDropdown('partySize', 'Party Size', 'partySize', 1, [1,2,3,4,5,6],'partySize');

    const dateInput = createDropdown('dateInput', 'Date', 'date', 1, dateArr , 'dateInput');

    const timeInput = createDropdown('timeInput', 'Time', 'time', 1, timeArr ,'timeInput');

    // create button
    const btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.innerText = 'Reserve a table'
    
    form.appendChild(partySizeInput);
    form.appendChild(dateInput);
    form.appendChild(timeInput);
    form.appendChild(btn);

    contactMainDiv.appendChild(form);

    return contactMainDiv
}


// helper function to create dropdown and label, returns both elements under a div
function createDropdown(id, labelName, inputName, dropdownSize, optionsArr, className) {
    const inputWrapper = createDiv(className)

    // create label for dropdown
    const labelElement = document.createElement('label');
    labelElement.setAttribute('for', id);
    labelElement.innerText = labelName

    // create select input
    const dropdownElement = document.createElement('select');
    dropdownElement.setAttribute('id', id);
    dropdownElement.setAttribute('name', inputName);
    dropdownElement.setAttribute('size', dropdownSize);
    dropdownElement.setAttribute('required', '');

    // create options
    optionsArr.forEach((element) => {
        const optionElement = document.createElement('option');
        optionElement.setAttribute('value', element);
        optionElement.innerText = element

        dropdownElement.appendChild(optionElement)
    })


    inputWrapper.appendChild(labelElement);
    inputWrapper.appendChild(dropdownElement);


    return inputWrapper
}

