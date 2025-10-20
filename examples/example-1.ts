import http from 'k6/http';

export default function (): void {
    const params = {
        cookies: {lang: 'et'},
        headers: {'Accept-Language': 'et'}
    }
    http.get('http://localhost:8080/db?const=1', params);
}