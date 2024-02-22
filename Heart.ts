
import * as fs from 'fs';

const data = fs.readFileSync('./HeartRate.json', 'utf8');
const heartRateData = JSON.parse(data);
const outputData = [];


heartRateData.forEach((measurement) => {
    const date = measurement.timestamps.startTime.split('T')[0];
    const existingDay = outputData.find((day) => day.date === date);
    if (existingDay) {
        existingDay.measurements.push(measurement.beatsPerMinute);
        if (measurement.timestamps.endTime > existingDay.latestDataTimestamp) {
            existingDay.latestDataTimestamp = measurement.timestamps.endTime;
        }
    } else {
        outputData.push({
            date,
            measurements: [measurement.beatsPerMinute],
            latestDataTimestamp: measurement.timestamps.endTime,
        });
    }

});


outputData.forEach((dayData) => {
    dayData.min = Math.min(...dayData.measurements);
    dayData.max = Math.max(...dayData.measurements);
    dayData.median = calculateMedian(dayData.measurements);
    delete dayData.measurements;
});

function calculateMedian(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const mid = Math.floor(sortedArr.length / 2);

    if (sortedArr.length % 2 === 0) {
        return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
    } else {
        return sortedArr[mid];
    }
}

fs.writeFileSync('./output.json', JSON.stringify(outputData, null, 2), 'utf8');

console.log(outputData)

