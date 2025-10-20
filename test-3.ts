import http from 'k6/http';
import {check, sleep} from "k6";
import {Options} from 'k6/options';


export const options: Options = {
    stages: [
        {duration: '30s', target: 20},   // ramp up to 20 users
        {duration: '1m30s', target: 10}, // stay at 10 users
        {duration: '20s', target: 0},    // ramp down to 0 users
    ],
};

function executeDb() {
    const count = Math.floor(Math.random() * 50) + 10;
    const res = http.get('http://localhost:8080/db?count=' + count);
    check(res, {'status is 200': () => res.status === 200});
    sleep(Math.floor(Math.random() * 5) + 1);
}

function executeData() {
    const count = Math.floor(Math.random() * 50) + 10;
    const res = http.get('http://localhost:8080/data?count=' + count);
    check(res, {'status is 200': () => res.status === 200});
    sleep(Math.floor(Math.random() * 5) + 1);
}

export default function (): void {
    executeDb();
    executeData();
}
