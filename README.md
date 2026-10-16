# [Titan training app]

## Om sidan
Mitt projekt handlar om att hjälpa människor som är intresserade av att träna och vara aktiva med sin hälsa. Jag vill även att den ska nå ut till människor som vill börja ta en hälsosammare väg i livet. 

## Skiss
Min skiss ligger bifogad bland mina filer i denna mappen. Den ser annorlunda ut från min sida eftersom att jag vill kunna vara kreativ med min egna sida. Nu är min sida inte fullt utvecklad men den är tillräckligt funktionerad för att kunna ta del av. Många saker som färger och ikoner ändrades sen har vi också fonten som skiljer sig från färdiga sidan. 

## Funktionalitet 
Besökaren kan se dagens datum dynamiskt, starta/stoppa en interaktiv timer för dagens träningspass samt klicka runt bland veckans dagar i träningsschemat för att växla aktiv dag. Detta sköts primärt av script.js i kombination med händelsehanterare (addEventListener), timer-funktioner (setInterval) och DOM-manipulation (classList).

## AI-användning
- Vad jag bad om? Hjälpa mig med att skapa logiken för tränings-timern i Javascript. 
- Vad jag fick? Det jag fick var en funktion som räknar ned och uppdaterar DOM-elementet i realtid när man klickar på "Starta pass". 
- Vad jag gjorde med det? Jag integrerade koden och anpassade den så att knappen även byter text och färg ("Avsluta Pass") när timern är igång. 

- Vad bad jag om? Jag frågade även om förslag på struktur för CSS Grid för att hantera responsivitet. 

- Vad jag fick? Exempel på hur man sätter upp grid-template-areas för både mobil och desktop (@media (min-width: 1024px) ). 

- Vad jag gjorde med det? Det jag gjorde med det var att jag använde strukturen som grunden och finjusterade klasserna för att matcha designens färgpalett och layout. 

## Tekniska val 
CSS Grid och Flexbox, det används för att bygga en flexibel och responsiv layout som anpassar sig sömlöst från enstaka kolumner på mobila enheter till en mer avancerad dashboard-layout på större skärmar. 

Min JavaScript struktur, all DOM-manipulation och logik är inkapslad i en DOMContentLoaded-lyssnare för att säkerställa att skriptet inte körs innan har laddats in i DOM-trädet. 

## Bedöming av AI-innehåll
Jag granskade all kod som genererades av AI för att säkerställa att den följer riktlinjer, till exempel genom att använda const och let korrekt samt kontrollera att element existerar med (if element) innan metoder anropas för att undvika noll-fel i konsolen. Logiken testades även manuellt i webbläsaren för att säkerställa att timern och klick-funktionerna betedde sig som förväntat. 
