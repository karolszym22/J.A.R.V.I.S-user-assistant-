J.A.R.V.I.S jest to aplikacja asystenta głosowego która pomaga użytkownikowi w różnych czynnościach. Projekt został napisany w takich technologiach jak: React, Redux, Hooks, Styled Components. Pierwsza wersja potrafi ręcznie po albo wydaniu komendy:

-dodać notatkę podając tytuł oraz opis
-usunąć notatkę klikając na przycisk "delete" lub po wydaniu komendy usunięcia notatki a potem podając jej tytuł
-nawigacja między lokalizacjami strony
-wyszukać informacji o interesującej nas rzeczy na stronie wikipedia

Głosowa interacja między aplikacją może być dynamiczna albo ciągła:

-dynamiczna wtedy kiedy od razu podajemy komendę po której wykonuje się czynność na przykład: "Poszukaj informacji o <wartość której szukamy>". Aplikacja od razu zareaguje, otwierając kartę z wynikiem na stronie Wikipedia

-ciągła natomiast to dłuższy dialog z aplikacją. Przykładowo chcemy dodać notatkę, użytkownik wypowiada komendę : "Dodaj notatkę" następnie funkcja sprawdza czy taka komenda znajduje się w bazie komend, jeśli tak, aplikacja przyjmuje określony stan na 3 sekundy. W tym przypadku użytkownik ma 3 sekundy na to aby podać tytuł oraz opis notatki (kolejność bez znaczenia). Warto podreślić, że użytkownik nie musi się spieszyć, funkcja ustawiająca wartortość stanu na domyślną, jest synchroniczna więc każde wypowiedziane słowo przez użytkownika, resetuje tą funkcję.

Program wykorzystuje biblioteki i paczki takie jak: 

-Formik
-React Router Dom
-React Redux
-ReduxJs/Toolkit
-Axios
-React-Speech-Recognition

Wykorzystuję również API ResponsiveVoice która komentuję nasze poczynania

Program również na starcie informuje nas wykorzystując syntezator mowy ResponsiveVoice o naszej lokalizacji oraz temperaturze pogody i szybkości wiatru.

Po odpaleniu apki, intefejs informuje nas o godzinie, dniu tygodnia, lokalizacji oraz pokazuje stan pogody:

![example1](https://user-images.githubusercontent.com/32464644/179853757-d804198f-4405-4f90-aa15-79d9b6941454.png)

Kontener z notatkami:

![example2](https://user-images.githubusercontent.com/32464644/179853800-f6dd63f7-0572-4629-aa92-cd725083dde7.png)

Strona gdzie użytkownik może poszukać informacji:

![example3](https://user-images.githubusercontent.com/32464644/179853824-0c8c1e38-9ba7-47d7-96cd-4a51426c798a.png)




