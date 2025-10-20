# opentelemetrydemo k6

# Getting started
Install k6
```bash
brew install k6
```
```bash
winget install k6 --source winget
```

## Run 
```bash
k6 run script.js
```
Run parallel
```bash
k6 run --vus 10 --duration 30s script.js
```

## Run Typescript
[k6 typescript template](https://github.com/grafana/k6-template-typescript/tree/main)<br>
Install TypeScript definitions for k6
```bash
npm install --save-dev @types/k6
```
Run 
```bash
k6 run test-1.ts
````