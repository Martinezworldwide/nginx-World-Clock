// List of cities, countries, and their respective time zones
const cities = [
    { name: 'New York, USA', timeZone: 'America/New_York' },
    { name: 'Los Angeles, USA', timeZone: 'America/Los_Angeles' },
    { name: 'London, UK', timeZone: 'Europe/London' },
    { name: 'Paris, France', timeZone: 'Europe/Paris' },
    { name: 'Tokyo, Japan', timeZone: 'Asia/Tokyo' },
    { name: 'Beijing, China', timeZone: 'Asia/Shanghai' },
    { name: 'Sydney, Australia', timeZone: 'Australia/Sydney' },
    { name: 'Moscow, Russia', timeZone: 'Europe/Moscow' },
    { name: 'Dubai, UAE', timeZone: 'Asia/Dubai' },
    { name: 'New Delhi, India', timeZone: 'Asia/Kolkata' },
    { name: 'São Paulo, Brazil', timeZone: 'America/Sao_Paulo' },
    { name: 'Cape Town, South Africa', timeZone: 'Africa/Johannesburg' },
    { name: 'Berlin, Germany', timeZone: 'Europe/Berlin' },
    { name: 'Buenos Aires, Argentina', timeZone: 'America/Argentina/Buenos_Aires' },
    { name: 'Mexico City, Mexico', timeZone: 'America/Mexico_City' },
];

// Initialize the clocks
function initializeClocks() {
    const container = document.getElementById('clockContainer');
    container.innerHTML = '';

    cities.forEach(city => {
        const clockDiv = document.createElement('div');
        clockDiv.className = 'clock';

        const cityName = document.createElement('div');
        cityName.className = 'city-name';
        cityName.textContent = city.name;

        const timeDisplay = document.createElement('div');
        timeDisplay.className = 'time';
        timeDisplay.id = city.timeZone.replace('/', '-'); // Unique ID for each time zone

        clockDiv.appendChild(cityName);
        clockDiv.appendChild(timeDisplay);
        container.appendChild(clockDiv);
    });

    updateTimes(); // Update times immediately
    setInterval(updateTimes, 1000); // Update times every second
}

// Update the times for all clocks
function updateTimes() {
    cities.forEach(city => {
        const timeDisplay = document.getElementById(city.timeZone.replace('/', '-'));
        if (timeDisplay) {
            const options = { timeZone: city.timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
            const currentTime = new Intl.DateTimeFormat('en-US', options).format(new Date());
            timeDisplay.textContent = currentTime;
        }
    });
}

// Initialize the world clock
document.addEventListener('DOMContentLoaded', initializeClocks);