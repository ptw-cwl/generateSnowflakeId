// script.js

function stringToNumber(str) {
    let number = '';
    for (let i = 0; i < str.length; i++) {
        number += str.charCodeAt(i);
    }
    return parseInt(number);
}

function generateSnowflakeID() {
    const epoch = 1609459200000; // 2021-01-01 00:00:00 UTC
    const timestamp = Date.now();
    const randomBits = Math.floor(Math.random() * 1024); // 随机数范围可以根据实际情况调整
    const extraBits = stringToNumber('ptw-cwl');
    const sequence = 0;
    const snowflakeID = (((timestamp - epoch) << 22) | randomBits | extraBits | sequence) >>> 0;
    document.getElementById("snowflakeID").innerText = snowflakeID;
}

document.getElementById("generateButton").addEventListener("click", generateSnowflakeID);
