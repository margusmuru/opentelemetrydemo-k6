import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  // Define the number of iterations for the test
  iterations: 10,
};

export default function () {
  http.get('http://localhost:8080/db?count=10');

  sleep(1);
}