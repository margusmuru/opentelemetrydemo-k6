import http from 'k6/http';
import {check, sleep} from "k6";
import {Options} from "k6/options";

/**
 * Threshold example
 */
export const options: Options = {
    thresholds: {
        http_req_failed: ['rate<0.01'], // http errors should be less than 1%
        http_req_duration: ['p(95)<200'], // 95% of requests must complete below 200ms
    }
};

export default function (): void {
    http.get('https://test.k6.io');
    sleep(1);
}