# SNACK 2

Abbiamo un elenco degli studenti di una facoltà, identificati da _id_, _Nome_ e _somma totale_ dei loro voti di esame...
1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

Questo è l’elenco degli studenti:
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna         48
145 Gaia Borromini          74
196 Luigi Grimaldello       68
102 Piero della Francesca   50
120 Francesca da Polenta    84

***

1. Creo un array di oggetti con un oggetto per ogni studente e le proprietà id, studentName e grades. 

2. Creo un array con i nomi degli studenti scritti in maiuscolo utilizzando la funzione map e restituendo solo la proprietà studentName di ogni oggetto in uppercase. 

3. Creo un array con gli studenti che hanno un totale di voti superiore a 70 utilizzando la funzione filter e restituendo solo quegli oggetti la cui proprietà grades ha un valore superiore a 70.

4. Creo un array con gli studenti che hanno un totale di voti superiore a 70 e un id superiore a 120, utilizzando la funzione filter e restituendo solo quegli oggetti la cui proprietà grades ha un valore superiore a 70 e la proprietà id ha un valore superiore a 120. 