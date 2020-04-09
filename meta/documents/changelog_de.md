# Release Notes für Feedback

## v3.5.0 (2020-04-14)

### TODO

- Zur Nutzung des Feedback-Plugins muss Ceres in Version 5.0 oder höher installiert sein.
- Nach dem Update auf v3.5.0 müssen Widgets im Menü **CMS » ShopBuilder** durch Klick auf **Inhalte neu generieren** aktualisiert werden. 

### Hinzugefügt

- Es wurde eine neue REST-Route hinzugefügt, um benötigte Daten für das Feedback-Widget nachzuladen.

### Geändert

- Das Feedback-Plugin ist nun kompatibel mit Ceres 5.0.
- Das Feedback-Plugin kann nun für Artikelsets verwendet werden.

## v3.4.1 (2020-03-04)

### TODO

- Zur Nutzung des Feedback-Plugins muss Ceres in Version 4.6 oder höher installiert sein.

### Geändert

- Die strukturierten Daten werden nun über '<script2>'-Tags ausgegeben.

### Behoben

- Durch einen Fehler scrollte die Seite nach Klick auf die Anzahl der Bewertungen nicht automatisch zum Feedback-Plugin. Dies wurde behoben. 

## v3.4.0 (2020-01-20)

### TODO

- Nach dem Update auf v3.4.0 müssen Widgets im Menü **CMS » ShopBuilder** durch Klick auf **Inhalte neu generieren** aktualisiert werden. 

### Hinzugefügt

- Das Bewertungssterne-Widget kann nun die Anzahl der abgegebenen Bewertungen anzeigen. Durch Klick auf diese Zahl neben den Bewertungssternen wird der Nutzer automatisch zum Artikelbewertungs-Widget geleitet, sofern dieses auf dem gleichen ShopBuilder-Inhalt vorhanden ist.

### Geändert

- Das Bewertungssterne-Widget lädt nun bereits initial die notwendigen Daten. Dadurch wird eine leichte Verbesserung der Performance erzielt.

### Behoben

- Artikelpakete wurden im Artikelbewertungs-Widget für die Bestellbestätigungsseite inkorrekt dargestellt. Dies wurde behoben.
- Unter bestimmten Umständen wurden fehlerhafte Tooltips in Ceres angezeigt. Dies wurde behoben.
- Im ShopBuilder wurde das Artikelbewertungs-Widget für die Bestellbestätigungsseite nicht auf Inhalten angezeigt, die keine Bestellbestätigung waren. Dies wurde behoben.

## v3.3.0 (2019-12-18)

### Hinzugefügt

- Es wurde ein Shopbuilder-Widget hinzugefügt, um Artikel auf der Kategorieseite nach Bewertungen filtern zu können.

## v3.2.2 (2019-10-22)

### TODO

- Nach dem Update auf v3.2.2 müssen Widgets im Menü **CMS » ShopBuilder** durch Klick auf **Inhalte neu generieren** aktualisiert werden. 

### Geändert

- Das Feedback-Widget für die Bestellbestätigung wurde intern von Grid-Layout auf Spalten umgebaut, um die Kompatibilität mit älteren Browsern zu verbessern.

### Behoben 

- Im Feedback-Widget für die Bestellbestätigung wurden manche Bilder nicht korrekt angezeigt. Dies wurde behoben.
- Es wird nun der Artikelname des Artikels anstatt des Variantennamens ausgegeben.

## v3.2.1 (2019-10-09)

### Hinzugefügt

- Auf der Bestellbestätigungsseite wurde ein Hinweis ergänzt, der darauf hinweist, dass das Widget geladen wird. 

### Behoben

- Durch einen Fehler wurden auf der Bestellbestätigungsseite keine Daten für das Feedback-Widget geladen. Dies wurde behoben.
- Durch Code-Änderungen im `FeedbackService` wurde eine verbesserte Stabilität des Plugins erreicht.

## v3.2.0 (2019-09-30)

### TODO

- Nach dem Update auf v3.2.0 müssen Widgets im Menü **CMS » ShopBuilder** durch Klick auf **Inhalte neu generieren** aktualisiert werden. 

### Hinzugefügt

- Das Feedback-Widget kann jetzt auf der Bestellbestätigungsseite verwendet werden.

## v3.1.2 (2019-09-02)

### Behoben

- Durch einen Fehler waren die strukturierten Daten invalide, wenn für einen Artikel noch keine Sternebewertung vergeben wurde. Dies wurde behoben. 
- Durch einen Fehler funktionierte die Einstellung "Bewertungssterne anzeigen, wenn keine Bewertungen vorhanden sind" nicht wie gewollt. Dies wurde behoben.

## v3.1.1 (2019-08-22)

### Behoben

- Durch einen Fehler wurden Styles auf bestimmten Templates nicht geladen. Dies wurde behoben. 

## v3.1.0 (2019-08-19)

### TODO

- Nach dem Update auf 3.1.0 muss die Einstellung zur automatischen Veröffentlichung von Rezensionen im Menü **Plugin-Übersicht » Feedback » Einstellungen** erneut vorgenommen werden.

### Hinzugefügt

- Gastbewertungen sind nun möglich.
- Gastkunden können nun einen Namen an der Rezension hinterlegen.
- Es wurde ein Honeypot hinzugefügt, um Spam entgegenzuwirken.

### Geändert

- Die Einstellungen für die automatische Veröffentlichung von Rezensionen wurden erweitert.

### Behoben

- Es wurden einige Verbesserung bezüglich der Benutzeroberfläche vorgenommen.
- Es wurden einige Verbesserungen bezüglich der Performance des Plugins vorgenommen.

## v3.0.0 (2019-08-12)

### Hinzugefügt

- Kompatibilität zum ShopBuilder wurde hergestellt.
- Die Anzahl der Artikelbewertungen pro Seite kann nun über die Widget-Einstellungen festgelegt werden.
- Die Größe der Bewertungssterne kann nun über die Widget-Einstellungen festgelegt werden.
- Das Feld “aggregateRatings”, das die durchschnittliche Bewertung eines Artikels enthält, wurde dem Schema.org Markup hinzugefügt.

### Geändert

- Das Feedback-Plugin wurde in 2 ShopBuilder-Widgets umgebaut. Über das Widget **Artikelbewertung** können Kunden Artikelrezensionen schreiben, die im Webshop angezeigt werden. Das Widget **Bewertungssterne** zeigt den Durchschnittswert der Bewertungen in der Artikelansicht.
- Die Einstellungen des Plugins wurden größtenteils in die beiden Widgets überführt.
- Das Feedback-Plugin ist jetzt Open Source.
- Die bisherigen Container-Verknüpfungen wurden bis auf “Feedback category ratings” entfernt.

### Behoben

- Beim Hinzufügen einer Rezension wurden die Bewertungssterne erst nach erneutem Laden der Seite angezeigt. Dies wurde behoben.
- Es konnte keine Rezension für Artikel eingereicht werden, wenn nicht auch eine Sternebewertung abgegeben wurde. Dies wurde behoben.


## v2.0.0 (2019-04-29)

### FEATURE

- Die Kompatibilität zu IO 4.0.0 wurde hergestellt.

## v1.4.1 (2019-01-30)

### Fix

- Durch Anpassungen im Kern wurden Kundenbewertungen nicht ausgegeben.

## v1.4.0 (2019-01-10)

### FEATURE

- Die Filter- und Sortiermöglichkeiten können nun in der Konfiguration deaktiviert werden.

## v1.3.1 (2018-10-01)

### Fix

- Durch einen Fehler wurden Bewertungsfacetten nicht angezeigt. Dies wurde behoben.

### CHANGE

- Die Übersetzungstexte des Plugins können jetzt im Menü CMS » Mehrsprachigkeit bearbeitet werden.

## v1.3.0 (2018-07-31)

### CHANGE

- Das Plugin wurde auf Vue.js umgebaut.

## v1.2.1 (2018-07-05)

### Fix

- Migrierte Gastbewertungen werden jetzt angezeigt.

## v1.2.0 (2018-05-24)

### Fix

- Wenn Bewertungen vom Kunden bearbeitet wurden, haben diese ihren Sichtbarkeits Status. Jetzt wird der Konfigurationswert berücksichtigt.

### CHANGE

- h1-Tag wurde in ein div-tag umgewandelt
- Der Nachname vom Autor wird jetzt gekürzt dargestellt

### FEATURE

- Wenn ein Artikel keine Bewertung hat, werden die Sternebewertung standardmässig in der Kategorie ausgeblendet. Diese können über die Konfiguration wieder aktiviert werden.


## v1.1.1 (2018-03-08)

### Fix

- Ein Fehler führte dazu, dass Bewertungen in der Kategorieansicht von Ceres ab Version 2.2.2 nicht gefiltert werden konnten. Dies wurde behoben.

## v1.1.0 (2017-12-01)

### Change

- Ceres 2 Kompatibilität

## v1.0.3 (2017-11-08)

### Hinzugefügt

- Bestehende Feedbacks mit einer Bewertungsskala von bis zu 10 Punkten können nun migriert werden. Weitere Informationen findest du unter <a href="https://knowledge.plentymarkets.com/omni-channel/online-shop/feedbacks-verwalten#100" target="_blank">Kundenrezensionen migrieren</a>.
- Attribute werden nun in der Titelzeile einer Kundenrezension für die entsprechende Variante, für die die Rezension abgegeben wurde, angezeigt.
- Es ist nun möglich in der Kategorieansicht nach Bewertungen zu filtern.
- Es ist nun möglich in der Kategorieansicht nach Bewertungen zu sortieren.
- Die Bewertung eines Artikels kann nun auch am Artikel in der Kategorieansicht angezeigt werden. Dazu muss im Menü **Plugins » Content** der Bereich **Feedback category ratings** mit dem Container **Category item list: Before prices container** verknüpft werden.

## v1.0.2 (2017-10-26)

### Hinzugefügt

- Feedbacks aus dem alten CMS können nun migriert werden.
- Neue Option: Hinzufügen von Feedbacks ohne Bewertungen ermöglichen.
- Neue Option: Hinzufügen von Feedbacks nur für gekaufte Artikel.

## v1.0.1 (2017-10-11)

### Fix

- Fix Plugin-Aufbau

## v1.0.0 (2017-10-10)

### Hinzugefügt

- Initiale Programm-Dateien. Eingeloggte Kunden können im Webshop (z.B. Ceres) Bewertungen für Artikel abgeben und Kommentare speichern. Händler können Kundenbewertungen sichtbar/unsichtbar schalten, löschen oder beantworten.
