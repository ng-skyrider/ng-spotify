## *https://ng-skyrider.github.io/ng-spotify/*

###ng-Spotify

- Code condition Filter: filter url of a image, converter in a URL safe of a links extern;
- Artist component: view title, type album, album and a list track [(more info)](https://developer.spotify.com/console/tracks/)
- Search component: view a text box, search letter by letter [(more info ...)](https://developer.spotify.com/console/search/).
- Home component: view a list of artists with configuration of a limit 20 see and a search market US filter. [(more info ...)](https://developer.spotify.com/console/artists/)
- Add Card error: text enter ["TOKEN" of spotify](https://developer.spotify.com/documentation/web-api/")  in box of text and automatically (save text token in the LocalStorage - Local).
- Add nav view interactive (in part select, active and hover colors).
- Add Component: navbar, home and search.

###Help
- `$ ng new ng-spotify`
- `$ ng g c shared/navbar --spec=false`
- `$ ng g c components/search --spec=false`
- `$ ng g c components/home --spec=false `
- `$ ng g s services/spotify --spec=false `
- `$ ng g c components/artist --spec=false`
- `$ ng g c components/list-card --spec=false`
- `$ ng g p pipes/noHasImage --spec=false`
- `$ ng g c components/error --spec=false`

####License

- view License 3rdpartylicenses.txt
