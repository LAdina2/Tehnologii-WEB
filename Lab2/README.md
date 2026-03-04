1. ### Ce este o resura (resource) in aplicatia ta?
   În această aplicație, o resursă reprezintă un punct de interes sau un serviciu oferit studenților în campusul universitar. Din punct de vedere tehnic, resursele sunt obiecte stocate în fișierul resources.json (ex: Biblioteca Centrală, Cantina UAB, Aula Magna), fiecare având proprietăți specifice: nume, tip (pentru filtrare), locație, program și etichete (tags).
2. ### Da exemplu de un URI si explica componentele acestuia.
   Exemplu: http://localhost:5500/Laborator_2/pages/cantina.html#menu-today
   Componente:
   Protocol: http
   Gazdă (Host): localhost:5500
   Cale (Path): /Laborator_2/pages/cantina.html (indică fișierul specific al resursei "Cantină")
   Fragment: #menu-today (ancora care direcționează browserul direct la secțiunea cu meniul zilei din pagină).
3. ### Care parti sunt statice si care sunt dinamice?
   Părțile statice: Structura HTML (paginile de Bibliotecă, Cantină, Evenimente), fișierul de stilizare CSS (care definește aspectul vizual) și textele descriptive fixe.
   Părțile dinamice: Secțiunea "Resurse Disponibile" din index.html. Aceasta este generată prin JavaScript folosind funcția fetch() care preia datele din resources.json. De asemenea, filtrarea (afișarea doar a locurilor de studiu sau a cantinelor) este o funcționalitate dinamică ce modifică DOM-ul fără a reîncărca pagina.
4. ### Este aplicatia ta document-centric sau interactive (sau ambele)? De ce?
   Aplicația este interactivă (interactive).
   Justificare: Deși oferă informații (specific aplicațiilor document-centric), elementul central este interacțiunea utilizatorului cu datele. Utilizatorul poate filtra resursele prin butoane, poate activa/dezactiva meniul de navigare (hamburger menu) și poate folosi link-uri de tip fragment pentru a naviga rapid în interiorul paginilor lungi (jump-to links). Aplicația procesează datele și răspunde la acțiunile utilizatorului prin JavaScript.
