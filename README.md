# Portfolio Website

Welkom bij je portfolio! Hier zijn de instructies om je website te gebruiken.

## Projecten Toevoegen

Open `script.js` en gebruik de `addProject()` functie om projecten toe te voegen.

### Voorbeeld:

```javascript
addProject(
    'Mijn Coole Website',
    'Ik maakte een website met PHP en MySQL',
    'Dit project was een volledige webapplicatie met een database. Ik leerde hiervan hoe je veilig met databases werkt.',
    ['PHP', 'MySQL', 'CSS', 'JavaScript'],
    '🌐',
    'https://mijn-website.nl',
    'https://github.com/ronny/mijn-website'
);
```

### Parameters:
- **title**: De naam van je project
- **shortDescription**: Korte beschrijving (voor de kaart)
- **fullDescription**: Lange beschrijving (in het popup)
- **technologies**: Array van technologieen die je gebruikte
- **emoji**: Een emoji voor je project (optioneel, standaard: 💻)
- **link**: URL naar je live project (optioneel, standaard: '#')
- **github**: URL naar je GitHub repo (optioneel, standaard: '#')

## Structuur

- `index.html` - Home pagina
- `projects.html` - Projecten pagina
- `style.css` - Alle styling
- `script.js` - JavaScript logica en projecten array
- `README.md` - Dit bestand

## Kleuren

Je kleurenpalette:
- Blue Popsicle: `#0f2862` (primair)
- Redline: `#9e363a` (accent)
- Purple Shadow: `#091f36` (secondary)
- Grey Blue Leaf: `#4f5f76` (text)

## Tips

- Voeg veel projecten toe om je vaardigheden te laten zien!
- Zorg dat je GitHub links correct zijn
- Test op je telefoon of het responsive werkt
