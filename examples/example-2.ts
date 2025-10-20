import http from 'k6/http';

/**
 * Simple POST request with string body
 */
export default function (): void {
    const data = 'some data to send in the request body';
    http.post('https://httpbin.test.k6.io/post', data);
}

/**
 * Example with JSON body and Content-Type header
 */
function example_1() {
    const data = {data: 'some data'};
    http.post('https://httpbin.test.k6.io/post',
        JSON.stringify(data), {
            headers: {'Content-Type': 'application/json'},
        });
}