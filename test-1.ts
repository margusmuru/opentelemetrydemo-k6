import http from 'k6/http';
import {check, sleep} from "k6";
import {Options} from 'k6/options';


export const options: Options = {
    iterations: 10,
};

export default function (): void {
    const res = http.get('http://localhost:8080/db?const=10');
    check(res, {
        'status is 200': () => res.status === 200,
    });
    sleep(Math.floor(Math.random() * 5) + 1);
}