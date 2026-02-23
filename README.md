1. **Ce este o resursă (resource) în aplicația ta?**
   În aplicația mea, resursele sunt fișierele sursă care compun laboratoarele: documentele structurale (index.html), regulile de stilizare (style.css) și elementele multimedia (imaginile de tip .png și .jpg).

2. **Da exemplu de un URI și explica componentele acestuia.**
   Un exemplu de URI (Uniform Resource Identifier) pentru acest proiect este: https://github.com/LAdina2/Tehnologii-WEB/blob/main/Lab1/index.html. Componentele sale sunt:

   Protocol/Schemă (https): Definește metoda de acces și transfer al datelor.

   Gazdă/Host (github.com): Indică serverul unde este stocată resursa.

   Cale/Path (/LAdina2/.../index.html): Reprezintă locația ierarhică exactă a fișierului în sistemul de stocare al serverului.

3. **Care părți sunt statice și care sunt dinamice?**
   La nivel general, componentele unei aplicații web se împart în funcție de modul în care este servit conținutul către client (browser):

   Părțile statice sunt resursele care sunt livrate utilizatorului exact așa cum sunt stocate pe server (HTML, CSS, imagini, fișiere JS pre-scrise). Acestea nu se schimbă indiferent de cine le accesează, fiind ideale pentru conținut informativ constant.

   Părțile dinamice reprezintă acele elemente generate "on-the-fly" în momentul solicitării, adesea prin interogarea unei baze de date sau prin logica de tip server-side (PHP, Python, Node.js). Acestea permit personalizarea conținutului în funcție de utilizator (ex: profilul de utilizator, coșul de cumpărături).

   În cazul proiectului de față, arhitectura este una statică, deoarece paginile sunt compuse din fișiere sursă fixe, fără interacțiune cu un server de baze de date pentru generarea conținutului.

4. **Este aplicația ta document-centric sau interactive? De ce?**
   Aplicația este predominant document-centric, deoarece obiectivul principal este transmiterea și organizarea informației textuale și vizuale către utilizator. Deși poate conține elemente de bază de interactivitate (cum ar fi hiperlink-urile), aceasta nu se comportă ca o aplicație software complexă (interactive app) care să își modifice starea internă semnificativ în urma input-ului utilizatorului.
