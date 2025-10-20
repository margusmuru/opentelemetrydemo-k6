import http from 'k6/http';
import {sleep} from "k6";
import {Options} from "k6/options";

/**
 * Tags examples
 * You can add custom tags to your requests for better organization and filtering of results.
 * Tags can be configured per request or globally for all requests in the test.
 * Can be injected to any test by using --tag CLI flag.
 * For example: k6 run script.ts --tag location="eu"
 */

export const options: Options = {
    tags: {
        location: 'eu'
    }
};

export default function (): void {
    http.get('https://test.k6.io', {
        tags: {
            location: 'eu'
        }
    });
    sleep(1);
}