# Feedback

Zeige Kundenrezensionen im Webshop an und antworte auf Feedback. Das Feedback-Plugin erfordert den plentyShop LTS ShopBuilder.

## Kundenrezensionen einrichten

Bevor Kundenrezensionen im Webshop angezeigt werden, musst du Einstellungen in deinem Backend und im ShopBuilder vornehmen.

##### Kundenrezensionen einrichten:

1. Öffne das Menü **Plugins » Plugin-Set-Übersicht**.<br /> → Die Plugin-Set-Übersicht wird geöffnet.
2. Klicke auf dein Plugin-Set.
3. Gib "Kunden-Feedback" in die **Suche** ein.
4. Klicke auf **Installieren**.
5. Nachdem das Plugin installiert wurde, klicke in der Plugin-Set-Übersicht auf **Plugin-Set bereitstellen**.
6. Nach dem Bereitstellen sind die Feedback-Widgets im ShopBuilder in der Kategorie **Artikel** verfügbar.
7. Füge die Widgets deiner Artikelseite hinzu und öffne die Widget-EInstellungen. Beachte dazu die Erläuterungen in Tabelle 1.

<table>
<caption>Tab. 1: Einstellungen für Kundenrezensionen vornehmen</caption>
	<thead>
		<th>
			Einstellung
		</th>
		<th>
			Erläuterung
		</th>
	</thead>
	<tbody>
        <tr>
			<td>
				<b>Datum an der Bewertung anzeigen</b>
			</td>
			<td>
				Aktivieren, um das Erstellungsdatum der Kundenrezension im Webshop anzuzeigen.
			</td>
		</tr>
		<tr>
			<td>
				<b>Bewertungen ohne Punktevergabe erlauben</b>
			</td>
			<td>
				Aktivieren, um Feedbacks ohne Bewertung zu erlauben.
			</td>
		</tr>
		<tr>
			<td>
				<b>Bewertungen nur erlauben, wenn der Artikel gekauft wurde</b>
			</td>
			<td>
				Aktivieren, um Feedbacks nur bei gekauften Artikeln zu erlauben.
			</td>
		</tr>
		<tr>
			<td>
				<b>Maximale Anzahl an Bewertungen pro Autor und Artikel</b>
			</td>
			<td>Wert eingeben, um Kundenrezensionen eines Autors zu einem Artikel zu beschränken. Wenn kein Wert eingeben wird, kann ein eingeloggter Webshop-Besucher beliebig viele Rezensionen für einen Artikel erstellen.
			</td>
		</tr>
    <tr>
			<td>
				<b>Maximale Anzahl an Bewertungen pro Seite</b>
			</td>
			<td>Wert eingeben, um Kundenrezensionen pro Seite zu beschränken. Weitere Rezensionen werden nach Klick auf **mehr** nachgeladen.
			</td>
		</tr>
	</tbody>
</table>

Zusätzlich gibt es im Menü **Plugins » Plugin-Übersicht » Feedback » Einstellungen** weitere Einstellungen, die in der folgenden Tabelle aufgeführt sind:

<table>
<caption>Tab. 2: Einstellungen für Kundenrezensionen im Plugin</caption>
	<thead>
		<th>
			Einstellung
		</th>
		<th>
			Erläuterung
		</th>
	</thead>
	<tbody>
        <tr>
			<td>
				Bewertungen automatisch veröffentlichen
			</td>
			<td>
				Wähle aus, ob du Bewertungen immer automatisch veröffentlichen willst, sie nicht automatisch veröffentlichen willst, oder nur für eingeloggte Benutzer veröffentlichen willst.
			</td>
		</tr>
		<tr>
	<td>
		Bewertungssterne in der Kategorieansicht anzeigen, wenn noch keine Bewertung vorhanden ist
	</td>
	<td>
		Aktivieren, um leere Bewertungssterne anzuzeigen, solange noch keine Bewertungen abgegeben wurden.
	</td>
	</tr>
	<tr>
	<td>
		Filter für Artikelbewertung anzeigen
	</td>
	<td>
		Aktivieren, um es Kunden zu ermöglichen, die Suchergbenisse von Kundenrezensionen durch Filtereinstellungen einzugrenzen.
	</td>
	</tr>
	<tr>
	<td>
		Sortierung in Artikellisten anzeigen
	</td>
	<td>
		Aktivieren, um es Kunden zu ermöglichen, die Artikellisten nach Bewertung zu sortieren.
	</td>
	</tr>
</table>


## Kundenrezensionen in der Kategorieansicht anzeigen

Solange die Kategorieansicht noch nicht über den ShopBuilder bearbeitet werden kann, kannst du Kundenrezensionen in der Kategorieansicht über Container-Verknüpfungen umsetzen. Gehe wie im Folgenden beschrieben vor, um Kundenrezensionen in der Kategorieansicht anzuzeigen.

##### Kundenrezensionen in der Kategorieansicht anzeigen:

1. Öffne das Menü **Plugins » Plugin-Set-Übersicht**.
2. Öffne dein Plugin-Set.
3. Klicke auf das Feedback-Plugin, um die Plugin-Einstellungen zu öffnen.
4. Klicke im Navigationsbaum links auf den untersten Reiter **Container-Verknüpfungen**.
5. Klicke auf den Bereich **Standard-Container-Links**.
6. Aktiviere die Checkbox für den Container **Ceres::CategoryItem.BeforePrices**.
7. **Speichere** die Einstellungen.<br />→ Kundenrezensionen werden in der Kategorieansicht vor Artikelpreisen angezeigt.

## Kundenrezensionen verwalten

Kundenrezensionen verwaltest du im Menü **CMS » Feedback-Bewertungen**. Weitere Informationen zu Kundenrezensionen findest du auf der Handbuchseite <a href="https://knowledge.plentymarkets.com/omni-channel/online-shop/feedbacks-verwalten" target="_blank"><b>Feedbacks verwalten</b></a>.
