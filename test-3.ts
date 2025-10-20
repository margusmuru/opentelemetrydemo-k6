import http from 'k6/http';
import {check, sleep} from "k6";
import {Options} from 'k6/options';


export const options: Options = {
    stages: [
    { duration: '30s', target: 20 },
    { duration: '1m30s', target: 10 },
    { duration: '20s', target: 30 },
  ],
};

function executeDb() {
    const count = Math.floor(Math.random() * 50) + 10;
    const res = http.get('http://localhost:8080/db?count=' + count);
    check(res, {
        'status is 200': () => res.status === 200,
    });
    sleep(Math.floor(Math.random() * 5) + 1);
}

function executeData() {
    const count = Math.floor(Math.random() * 50) + 10;
    const res = http.get('http://localhost:8080/data?count=' + count);
    check(res, {
        'status is 200': () => res.status === 200,
    });
    sleep(Math.floor(Math.random() * 5) + 1);
}

export default function (): void {
    executeDb();
    executeData();
}
