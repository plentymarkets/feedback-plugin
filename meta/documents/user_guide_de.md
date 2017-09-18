# Feedback

Zeigen Sie Kundenrezensionen im Webshop an.

## Kundenrezensionen einrichten

Bevor die Zahlungsart in Ihrem Webshop verfügbar ist, müssen Sie Einstellungen in Ihrem plentymarkets Backend vornehmen.

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
                Aktivieren, um Kundenrezensionen automatisch im Webshop freizuschalten. Wenn diese Einstellung deaktiviert ist, müssen Kundenrezensionen manuell im Menü ##TODO## freigeschaltet werden.
			</td>
		</tr>
        <tr>
			<td>
				<b>Show timestamp for the feedback</b>
			</td>
			<td>
				Aktivieren, um das Erstellungsdatum der Kundenrezension im Webshop anzuzeigen.
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

1. Gehen Sie zu **Plugins » Content**.
3. Wählen Sie den Bereich **Feedback Javascript**.
4. Aktivieren Sie den Container **Script loader: Register/load JS**.
5. Wählen Sie den Bereich **Feedback CSS (Ceres)**.
6. Aktivieren Sie den Container **Template: Style**.
7. Wählen Sie den Bereich **Feedback ratings**.
8. Aktivieren Sie den Container **Single item: Container for item lists**.
9. **Speichern** Sie die Einstellungen.<br />→ Kundenrezensionen werden in der Einzelansicht eines Artikels angezeigt.

## Lizenz

Das gesamte Projekt unterliegt der GNU AFFERO GENERAL PUBLIC LICENSE – weitere Informationen finden Sie in der [LICENSE.md](https://github.com/plentymarkets/feedback-plugin/blob/master/LICENSE.md).