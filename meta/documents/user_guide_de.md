# Feedback

Zeigen Sie Kundenrezensionen im Webshop an und antworten Sie auf Feedbacks.

<div class="alert alert-warning" role="alert">
    Beachten Sie, dass das Menü <b>CMS » Feedback-Bewertungen</b> nur über den zentralen Login erreicht werden kann.
</div>

## Kundenrezensionen einrichten

Bevor Kundenrezensionen im Webshop angezeigt werden, müssen Sie Einstellungen in Ihrem plentymarkets Backend vornehmen.

##### Kundenrezensionen einrichten:

1. Öffnen Sie das Menü **Start » Plugins**.<br /> → Die Plugin-Übersicht wird geöffnet.
2. Klicken Sie auf **Feedback**.<br /> → Das Plugin wird in einem neuen Tab geöffnet.
3. Klicken Sie im Verzeichnisbaum auf **Konfiguration**.<br /> → Das Tab **Feedback settings** ist bereits vorausgewählt.
4. Nehmen Sie die Einstellungen vor. Beachten Sie dazu die Erläuterungen in Tabelle 1.
5. **Speichern** Sie die Einstellungen.

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
				<b>Release feedbacks automatically</b>
			</td>
			<td>
                Aktivieren, um Kundenrezensionen automatisch im Webshop freizuschalten. Wenn diese Einstellung deaktiviert ist, müssen Kundenrezensionen manuell im Menü **CMS » Feedback-Bewertungen** freigeschaltet werden. Nur Kundenrezensionen, die erstellt wurden, nachdem diese Funktion aktiviert wurde, werden automatisch freigeschaltet.
			</td>
		</tr>
        <tr>
			<td>
				<b>Show date for the feedback</b>
			</td>
			<td>
				Aktivieren, um das Erstellungsdatum der Kundenrezension im Webshop anzuzeigen.
			</td>
		</tr>
		<tr>
			<td>
				<b>Allow feedbacks with no rating</b>
			</td>
			<td>
				Aktivieren, um Feedbacks ohne Bewertung zu erlauben.
			</td>
		</tr>
		<tr>
			<td>
				<b>Allow adding feedbacks only if the item was purchased</b>
			</td>
			<td>
				Aktivieren, um Feedbacks nur bei gekauften Artikeln zu erlauben.
			</td>
		</tr>
		<tr>
			<td>
				<b>Maximum number of feedbacks per author and item</b>
			</td>
			<td>Wert eingeben, um Kundenrezensionen eines Autors zu einem Artikel zu beschränken. Wenn kein Wert eingeben wird, kann ein eingeloggter Webshop-Besucher beliebig viele Rezensionen für einen Artikel erstellen.
			</td>
		</tr>
	</tbody>
</table>

## Kundenrezensionen im Webshop anzeigen

Das Template-Plugin **Ceres** bietet Ihnen in der Einzelansicht eines Artikels einen Template-Container, in dem Sie Rezensionen ihrer Kunden anzeigen können. Gehen Sie wie im Folgenden beschrieben vor, um Kundenrezensionen im Webshop anzuzeigen.

##### Kundenrezensionen im Webshop anzeigen:

1. Öffnen Sie das Menü **Plugins » Content**.
2. Wählen Sie den Bereich **Feedback Javascript**.
3. Aktivieren Sie den Container **Script loader: Register/load JS**.
4. Wählen Sie den Bereich **Feedback CSS (Ceres)**.
5. Aktivieren Sie den Container **Template: Style**.
6. Wählen Sie den Bereich **Feedback ratings**.
7. Aktivieren Sie den Container **Single item: Container for customer feedback**.
8. **Speichern** Sie die Einstellungen.<br />→ Kundenrezensionen werden in der Einzelansicht eines Artikels angezeigt.

## Kundenrezensionen verwalten

Kundenrezensionen verwalten Sie im Menü **CMS » Feedback-Bewertungen**. Weitere Informationen zu Kundenrezensionen finden Sie auf der Handbuchseite <a href="https://knowledge.plentymarkets.com/omni-channel/online-shop/feedbacks-verwalten" target="_blank"><b>Feedbacks verwalten</b></a>.