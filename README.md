# Il progetto

Questa applicazione è stata realizzata utilizzando react nel contesto del corso di Applicazioni Web: Progettazione e Sviluppo, 
Università degli Studi di Milano-Bicocca, AA.2022/2023.

## Come aprire l'applicazione:

Per utilizzare l'applicazione ci sono due metodi:

### `npm start`

Questo metodo utilizza la linea di comando `npm start` per attivare l'applicazione in modalità sviluppo. Al fine di utilizzare questo comando è però necessario installare tutte le dependencies di node che non sono state inserite nel repository di GitHub per questioni di spazio. Per farlo è possibile usare il comando `npm install` nella directory dell'applicazione. Editor come Webstorm permettono di installare automaticamente le dependencies se si tenta di avviare l'applicazione al loro interno con il comando `npm start`.

### `serve`

Utilizzando `serve` è possibile dispiegare l'applicazione su un server locale partendo dalla build realizzata da Create-react-app (contenuta nella cartella `build` nel repository). Al fine di utilizzare questo metodo è necessario utilizzare i comandi `npm install -g serve`(per installare serve localmente se non lo si è già fatto) e `serve -s build` (per dispiegare l'applicazione sul server locale).


## Contenuto dell'applicazione

In questa sezione spiegherò come l'applicazione è stata realizzata e quali sono le sue caratteristiche.

### Argomento

[Outer Wilds](https://www.mobiusdigitalgames.com/outer-wilds.html) è un videogioco di avventura sviluppato da Mobius Digital e pubblicato nel 2019. Una seconda versione aggiornata con un contenuto aggiuntivo *Echoes of the Eye* è stata pubblicata nel 2021. L'obiettivo del gioco è esplorare il sistema solare di fantasia denominato *Outer Wilds*, scoprendo i segreti che si nascondono nei vari pianeti esistenti.

### Realizzazione

L'applicazione è stata costruita partendo dal template creato da [Create-react-app](https://create-react-app.dev/), modificato poi per inserire i contenuti personalizzati. Non esistendo un servizio di API relativo all'argomento l'applicazione utilizza l'API [MediaWiki API](https://www.mediawiki.org/wiki/API:Main_page) per poter accedere ai contenuti della [wiki.fandom](https://outerwilds.fandom.com/wiki/Outer_Wilds_Wiki) ufficiale del gioco. La struttura è stata realizzata utilizzando [reactsrap](https://reactstrap.github.io/?path=/story/home-installation--page) per facilitare la costruzione delle componenti in JSX e del CSS.

### Struttura

L'applicazione è strutturata in 4 tipi di pagine(`views`):


**Home (/)**

Questa pagina è la prima che appare all'utilizzatore. Permette di accedere ai due possibili argomenti trattati dall'applicazione: "Il sistema solare"(System) e i "Viaggiatori"(Travellers). Ognuno delle due card presenti a schermo porta in una delle due versioni della pagina "Chart".

- Risorse: `Home` è una pagina statica, per questo utilizza risorse importate direttamente nel componente.
- Codice: Il codice utilizzato permette di creare staticamente la struttura della pagina e richiama due volte la componente `CardElement`.


**Chart (/list/:type)**

Questa pagina contiene la lista sotto forma di Grid o Table dei pianeti o dei viaggiatori a seconda del valore che `:type` assume nell'URI utilizzato. 
Da questa pagina è possibile accedere alle pagine Details cliccando sulle card desiderate.

- Risorse: `Chart` è una pagina dinamica, utilizza quindi risorse provenienti da due JSON(Planet.json e Travellers.json). I due json sono salvati in locale e sono stati realizzati da me non essendoci API a qui fare riferimento per i dati generici dei singoli elementi.
- Codice: il codice utilizzato è strutturato in modo tale da individuare errori nella scrittura dell'URI, salvando la condizione nello stato `error`(righe:12-22). Passa poi a individuare quale dei due JSON utilizzare a seconda dell'URI(righe:46-68), modificando di conseguenza alcuni elementi della pagina con una funzione (righe:29-44). Vengono poi creati i tasti per modificare la visualizzazione con il relativo stato(righe:46-68). Infine, avviene un render condizionale sulla base dello stato `error` definito precedentemente(righe:71-97).


**Details (/details/:type/:number)**

Questa pagina contiene i dettagli dei singoli elementi delle liste precedenti. Presenta una card in cui sono riportati immagine e dettagli dell'elemento, con sotto una descrizione ottenuta attraverso l'API. Il contenuto della pagina dipende dal valore che assumono ":type" e ":number" nell'URI utilizzato.

- Risorse: `Details` utilizza in combinazione il JSON locale relativo al tipo di oggetto definito da `:type` e il JSON ottenuto dalla chiamata all'API relativa a `:number`.
- Codice: Viene individuato il contenuto da mostrare(righe:26-45), verificando che non ci siano errori nella scrittura dell'URI con una delle funzioni di utility e viene impostata la variabile `error`(riga:46). Da notare che in questo caso non viene utilizzato uno stato error a causa di un errore di rendering ripetuto che rende impossibile visualizzare la pagina. In più evidenzio che la variabile `name`(riga:26) viene inizializzata staticamente solo in caso di errore per non causare problemi alla fetch dato che questa avrebbe potuto avere come valore al suo interno `undefined` impedendo l'esecuzione del codice. A seguito viene impostato l'`Use Effect` con al suo interno una fetch dinamica verso l'API(righe:58-65) e una schermata di caricamento che viene utilizzata per coprire il delay del re-rendering(righe:53-56). Infine, avviene un rendering condizionale sulla base della variabile `error`(righe:75-115).


**ErrorPage (/404)**

Questa pagina viene utilizzata in risposta a un errore nella scrittura del URI.

- Risorse: questa pagina è sostanzialmente vuota quindi non utilizza risorse come le pagine precedenti.
- Codice: viene impostato un rendering basico(righe:6-14).


### Componenti

Le varie pagine utilizzano una moltitudine di componenti(`components`) per realizzare una buona parte dei loro contenuti e della loro struttura:


**CardElement**

Viene utilizzato per la creazione delle varie card presenti nelle pagine.

- Codice: il componente è strutturato come un grande rendering condizionale che si basa sulla prop `boxType` per determinare quale tipo di card utilizzare nella pagina in cui `CardElement` è stato chiamato. I valori impostabili sono quattro: table(righe:16-37), grid(righe:39-56), details(righe:58-81) e null(righe:83-98). Da notare che le card differiscono non solo per struttura ma anche per funzione, alcune di esse infatti sono cliccabili mentre altre sono solo decorative.


**CardGrid**

Viene utilizzato per creare la disposizione a griglia delle pagine `Chart`.

- Codice: viene utilizzato un map(righe:9-20) sul JSON passato come prop `chartData` e su ogni elemento dell'array viene chiamata la componente `CardElement`, creando una card per ogni oggetto del JSON e posizionandole come una griglia.


**CardTable**

Viene utilizzato per creare la disposizione a tabella delle pagine `Chart`. Funziona come la componente `CardGrid`.


**Foote**

Viene usato per realizzare il footer presente in ogni pagina.

- Codice: riceve come props nome e link del corso di studi e dell'API utilizzata.


**Header**

Viene usato per realizzare l'header presente in ogni pagina.

- Codice: riceve i nomi e i link degli elementi di navigazione come prop dalla pagina generale `App`. La struttura è una rivisitazione della normale navbar di reactstrap.


**MainTemplate**

Si occupa di creare il template generico al cui interno saranno inserite le varie pagine. Presenta in cima alla pagina l'Header e in fondo il Footer.

- Codice: tra le varie cose si occupa anche di modificare lo sfondo della pagina se questa è la pagina di errore `ErrorPage`.


**Navigation**

Viene utilizzato per creare i bottoni di navigazione presenti nelle pagine `Details`.

- Codice: utilizza una condizione di `if(true)` per determinare la presenza o meno del bottone. Questo permette di non renderizzare il bottone `Prev` se si tratta del primo oggetto del JSON e di non far apparire il bottone `Next` se si tratta dell'ultimo oggetto.
