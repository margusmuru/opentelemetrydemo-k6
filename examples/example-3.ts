import http from 'k6/http';
import {check} from "k6";

/**
 * Batch request example
 */
export default function (): void {
    const responses = http.batch([
        ['GET', 'https://httpbin.test.k6.io'],
        ['GET', 'https://httpbin.test.k6.io/style.css'],
        ['GET', 'https://httpbin.test.k6.io/images/logo.png'],
    ]);

    check(responses[0], {
        'main page status was 200': (res) => res.status === 200
    });
}