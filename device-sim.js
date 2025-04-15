const axios = require('axios');

setInterval(() => {
  const fakeData = {
    deviceId: 'sensor-1',
    temp: (20 + Math.random() * 10).toFixed(2),  // random temp
    pressure: (1 + Math.random() * 0.5).toFixed(2) // random pressure
  };

  axios.post('http://localhost:3000/data', fakeData)
    .then(() => console.log('Data sent:', fakeData))
    .catch(err => console.error('Error sending data:', err));
}, 5000);
