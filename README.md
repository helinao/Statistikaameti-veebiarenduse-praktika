# Statistikaameti veebiarenduse praktika kodutöö

See repositoorium sisaldab React + TypeScript viktoriini projekti Statistikaameti veebiarenduse praktika kodutöö jaoks. Projektil on Playwright e2e testid, mis katavad viktoriinirakenduse põhifunktsionaalsust.

## Projekti struktuur

- `src/App.tsx` - rakenduse põhiloogika
- `src/components/Question.tsx` - ühe küsimuse vaade
- `src/components/ResultsTable.tsx` - tulemuste tabel
- `src/questions/questionsData.tsx` - küsimuste andmed
- `tests/` - Playwright e2e testid

## Projekti tööle panek läbi koodi

1. Ava terminal kaustas, kuhu soovid projekti alla tõmmata.
2. Klooni projekt GitHubist:

```bash
git clone https://github.com/helinao/Statistikaameti-veebiarenduse-praktika
```

3. Liigu kloonitud repositooriumi kausta:

```bash
cd Statistikaameti-veebiarenduse-praktika
```

4. Paigalda sõltuvused:

```bash
npm install
```

5. Käivita arendusserver:

```bash
npm run dev
```

6. Ava brauseris kuvatud aadress (vaikimisi [http://localhost:5173](http://localhost:5173)).


## Testimine

### 1) Paigalda Playwright brauserid (esimesel korral)

```bash
npx playwright install
```

### 2) Kõikide testide käivitamine

```bash
npx playwright test
```

### 3) Konkreetse testi käivitamine

```bash
npx playwright test tests/quiz-score.spec.ts
```

### 4) HTML raporti kuvamine

```bash
npx playwright show-report
```
