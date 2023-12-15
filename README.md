# my-own-choice-shop-opgave
Jeg har planlagt og udviklet et api til en webshop efter mit eget valg. Jeg har valgt en Make-up shop. For at Få den til at køre skal du følge denne installations instruktion

# Installation af API
Følg disse trin for at installere og køre API'et lokalt på din maskine.

## Trin 1: Installation af Node.js
Sikr dig, at Node.js er installeret på din computer. 

## Trin 2: Klone projektet fra GitHub
Åben VS Code og tryk på clone github repository
indset dette link: [My Own Shop](https://github.com/Hedemann-Nielsen/my-own-choice-shop-opgave)

Naviger til den mappe, hvor du vil gemme projektet. Når projektet er indlæst trykker du på knappen Open når du bliver adspurgt.

## Trin 3: Installer afhængigheder
Åben terminalen. 
for at åbne terminalen kan du inden kommandoen navigere til terminalen ved at trykke: 'ctrl+j' HVis genvejen ikke virker kan du åbne terminaln manuelt ved at vælge "View" i menuen, derefter "Terminal" eller ved at bruge kommandopalette (Ctrl + Shift + P eller Cmd + Shift + P på macOS) og søge efter "Toggle Integrated Terminal".
Når projektet er clonet, skal package.json indlæses. Dette gør du ved at skrive følgenede komando i terminalen: 
```
npm install
```

## Trin 4: Konfiguration
Åben .env filen og tilpas nødvendige indstillinger, såsom brugernavn(DBUSER), adgangskode(DBPASSWORD) og andre variabler så de passer til din database.

```
# port number
PORT = 3500

# DATABASE CREDENTIALS
DBHOST = localhost
DBNAME = myownshop 
DBUSER = root
DBPASSWORD = Elastik56Kat
DBPORT = 3306
```

## Trin 5: Kør API'et med nodemon
Udfør følgende kommando i terminalen for at starte API'et med nodemon:
```
nodemon index.js
```
Min API-server kører nu på http://localhost:3500.

## Trin 6: Åbn frontend
Åben et nyt vindue i VS Code og tryk på clone github repository
indset dette link: [My Own Shop - frontend](https://github.com/Hedemann-Nielsen/my-own-choice-shop-opgave-frontend)

Naviger til den mappe, hvor du vil gemme projektet. Når projektet er indlæst trykker du på knappen Open når du bliver adspurgt.
## Trin 7: Åbn browser
For at åbne browseren med frontend filen trykker du på 'Go Live' i VS Code. 

Min frontend side køre nu med data fra mit api (backend)
