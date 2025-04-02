# Release Notes für Feedback

## v5.0.0 (2025-04-02) <a href="https://github.com/plentymarkets/feedback-plugin/compare/4.0.9...5.0.0" target="_blank" rel="noopener"><b>Übersicht aller Änderungen</b></a>

### TODO

- Aufgrund des Umfangs der Änderungen empfehlen wir, die neue Version in einem separaten Plugin-Set zu testen, um Kompatibilität sicherzustellen und mögliche Konflikte mit bestehenden Plugins oder Themes zu vermeiden.

### Hinzugefügt

- Die Barrierefreiheit wurde verbessert.
- Widget-Einstellung zum Ausblenden des Feedback-Widgets auf der Bestellbestätigungsseite, wenn das Versanddatum noch nicht festgelegt wurde. Wir möchten dem Benutzer @MaxBentz für seinen Beitrag danken.

### Geändert

- Das Feedback-Plugin erhält seine Daten jetzt über den Feedback-Microservice und nicht mehr über die PHP-Logik.
- Die Daten für die Anzahl der Bewertungen werden nun vom Feedback-Microservice geliefert und nicht mehr von der PHP-Logik abgerufen.
- Für die Anzeige des Ratings auf den Kategorieseiten werden  die Daten jetzt über die Artikelliste (itemList) geladen.
- Die Option `Bewertungen ohne Bewertung zulassen` wurde aus der Plugin-Konfiguration entfernt.
- Die Übersetzung für den Namen einer Einstellung wurde geändert.

## v4.0.9 (2023-06-19) <a href="https://github.com/plentymarkets/feedback-plugin/compare/4.0.8...4.0.9" target="_blank" rel="noopener"><b>Übersicht aller Änderungen</b></a>

### Geändert

- Durchschnittswertanzeige auf Kategorieebene jetzt möglich. Wir bedanken uns bei User @MaxBentz für den Beitrag.
- Ausgabe von Attributen auf der Bestellbestätigungsseite. Wir bedanken uns bei User @MaxBentz für den Beitrag.
- CSS-Anpassungen. Wir bedanken uns bei User @MaxBentz für den Beitrag.
  
## v4.0.8 (2023-01-05) <a href="https://github.com/plentymarkets/feedback-plugin/compare/4.0.7...4.0.8" target="_blank" rel="noopener"><b>Übersicht aller Änderungen</b></a>

### Geändert

- Die Logik für die Anonymisierung wurde in den Kern verschoben.
- Die Einstellungen zur Sichtbarkeit wurden aus dem Widget in die Plugin-Konfiguration überführt.

## v4.0.7 (2022-10-21) <a href="https://github.com/plentymarkets/feedback-plugin/compare/4.0.6...4.0.7" target="_blank" rel="noopener"><b>Übersicht aller Änderungen</b></a>

### Geändert

- Das Anklicken der Artikelbilder im Bewertungswidget für die Bestellbestätigung leitet nun auf die Artikelseite weiter. Wir bedanken uns bei User @MaxBentz für den Beitrag.

### Behoben

- Beim Editieren von einer Bewertung war die Reihenfolge der Bewertungssterne falsch. Dies wurde behoben. Wir bedanken uns bei User @MaxBentz für den Beitrag.

## v4.0.6 (2021-10-20)

### Geändert

- Das Feedback Plugin wurde auf das Rebranding zu **plentyShop LTS" angepasst.

### Behoben

- Bei Auswahl eines Bewertungsfilter wurde dieser nicht als selektiert angezeigt.
- In den strukturierten Daten wurde beim Autor ein expliziter Typ hinterlegt.

## v4.0.5 (2021-08-17)

### TODO

- Nach dem Update auf Version 4.0.5 müssen Widgets im Menü **CMS » ShopBuilder** durch Klick auf **Inhalte neu generieren** aktualisiert werden.

### Behoben

- Durch einen Fehler in der Namensauflösung für Autoren-Felder konnte der Autorenname in den strukturierten Daten fehlen. Dies wurde behoben.

## v4.0.4 (2021-07-06)

### TODO

- Nach dem Update auf Version 4.0.4 müssen Widgets im Menü **CMS » ShopBuilder** durch Klick auf **Inhalte neu generieren** aktualisiert werden.

### Behoben

- Die gleichzeitige Nutzung von mehreren Artikelbewertung-Widgets für die Artikeleinzelansicht führte zu Fehlern. Dies wurde behoben.
- Bei Editieren einer Rezension wurde fehlerhaftes Markup angezeigt. Dies wurde behoben.

## v4.0.3 (2021-05-10)

### TODO

- Nach dem Update auf Version 4.0.3 müssen Widgets im Menü **CMS » ShopBuilder** durch Klick auf **Inhalte neu generieren** aktualisiert werden.

### Behoben

- Feedbacks ohne Autorennamen haben zu einem Fehler geführt. Dies wurde behoben.

## v4.0.2 (2021-05-05)

### TODO

- Nach dem Update auf Version 4.0.2 müssen Widgets im Menü **CMS » ShopBuilder** durch Klick auf **Inhalte neu generieren** aktualisiert werden.

### Behoben

- Zeilenumbrüche in Kommentaren zu Kundenrezensionen wurden als `<br>`-Tag gerendert. Dies wurde behoben.

## v4.0.1 (2021-04-28)

### TODO

- Zur Nutzung des Feedback-Plugins muss Ceres in Version 5.0.27 oder höher installiert sein.
- Nach dem Update auf Version 4.0.1 müssen Widgets im Menü **CMS » ShopBuilder** durch Klick auf **Inhalte neu generieren** aktualisiert werden.

### Behoben

- Die Anzahl der Feedbacks im Bewertungssterne-Widget war so positioniert, sodass sie von den Bewertungssterne überdeckt wurde. Dies wurde behoben.

## v4.0.0 (2021-04-14)

### TODO

- Zur Nutzung des Feedback-Plugins muss Ceres in Version 5.0.27 oder höher installiert sein.
- Nach dem Update auf Version 4.0.0 müssen Widgets im Menü **CMS » ShopBuilder** durch Klick auf **Inhalte neu generieren** aktualisiert werden.

### Hinzugefügt

- Das Kundenfeedback-Plugin ist nun kompatibel mit Vue Server-Side Rendering.
- Es wurde ein Webpack 5 Build-Prozess aufgebaut.
- Die Logik und Daten der Vue-Komponenten wurde in einen eigenen VueX Store ausgelagert.

### Geändert

- Widgets werden nun nicht mehr über die veraltete `contentwidgets.json`, sondern über PHP-Klassen definiert und registriert.
- Alle Vue-Komponenten liegen nun als vorkompilierte Single File Component-Dateien vor, die asynchron nachgeladen werden.


## v3.6.4 (2021-04-13)

### TODO

- Zur Nutzung des Feedback-Plugins muss Ceres in Version 5.0 oder höher installiert sein.
- Nach dem Update auf Version 3.6.4 müssen Widgets im Menü **CMS » ShopBuilder** durch Klick auf **Inhalte neu generieren** aktualisiert werden.

### Behoben

- Es wurde eine Sicherheitslücke geschlossen, durch die Cross-Site-Scripting möglich war.
- Unter bestimmten Umständen wurde das Feld für Autorname bei Gastbestellungen auf der Bestellbestätigung nicht angezeigt. Dies wurde behoben.

## v3.6.3 (2021-03-26)

### TODO

- Zur Nutzung des Feedback-Plugins muss Ceres in Version 5.0 oder höher installiert sein.
- Nach dem Update auf Version 3.6.3 müssen Widgets im Menü **CMS » ShopBuilder** durch Klick auf **Inhalte neu generieren** aktualisiert werden.

### Behoben

- Bewertungen von Gastbestellungen konnten nicht verifiziert werden. Dies wurde behoben.
- Durch fehlerhaft gecachte Daten wurden Kundenbewertungen auf der Bestellbestätigung teilweise falsch zugeordnet.

## v3.6.2 (2021-03-03)

### TODO

- Zur Nutzung des Feedback-Plugins muss Ceres in Version 5.0 oder höher installiert sein.
- Nach dem Update auf Version 3.6.2 müssen Widgets im Menü **CMS » ShopBuilder** durch Klick auf **Inhalte neu generieren** aktualisiert werden.

### Geändert

- Das Feedback-Widget für die Bestellbestätigung gibt nun im ShopBuilder auf Seiten, auf denen es nicht genutzt werden kann, einen Warnhinweis aus.

### Behoben

- Unter bestimmten Umständen konnte bei Kundenrezensionen der Name des Autors leer sein. Dies wurde behoben.

## v3.6.1 (2020-12-15)

### TODO

- Zur Nutzung des Feedback-Plugins muss Ceres in Version 5.0 oder höher installiert sein.
- Nach dem Update auf Version 3.6.1 müssen Widgets im Menü **CMS » ShopBuilder** durch Klick auf **Inhalte neu generieren** aktualisiert werden. 

### Behoben

- Eine fehlende Kondition zur Ausgabe der strukturierten Daten hat bei unbewerteten Artikeln zu Fehlern geführt. 
- Der Titel der Feedback-Facette war nicht in der Mehrsprachigkeit vorhanden.

## v3.6.0 (2020-12-08)

### TODO

- Zur Nutzung des Feedback-Plugins muss Ceres in Version 5.0 oder höher installiert sein.
- Nach dem Update auf Version 3.6.0 müssen Widgets im Menü **CMS » ShopBuilder** durch Klick auf **Inhalte neu generieren** aktualisiert werden. 

### Hinzugefügt

- Das Feld "reviews" wurde den strukturierten Daten hinzugefügt.

### Geändert

- Die strukturierten Daten werden nun direkt in den Head des HTML-Dokuments generiert.


## v3.5.3 (2020-10-14)

### TODO

- Zur Nutzung des Feedback-Plugins muss Ceres in Version 5.0 oder höher installiert sein.
- Nach dem Update auf Version 3.5.3 müssen Widgets im Menü **CMS » ShopBuilder** durch Klick auf **Inhalte neu generieren** aktualisiert werden. 

### Behoben

- Der Übersetzungsschlüssel "customerReviews" wurde fälschlicherweise entfernt. Dies wurde behoben.


## v3.5.2 (2020-10-13)

### TODO

- Zur Nutzung des Feedback-Plugins muss Ceres in Version 5.0 oder höher installiert sein.
- Nach dem Update auf Version 3.5.2 müssen Widgets im Menü **CMS » ShopBuilder** durch Klick auf **Inhalte neu generieren** aktualisiert werden. 

### Geändert

- Die Schaltflächen für das Editieren und Löschen von Kundenbewertungen von Gästen wurden aus dem Feedback-Widget entfernt.

### Behoben

- Bestimmte Kombinationen von Einstellungen führten dazu, dass verifizierte Käufe von Artikeln nicht erkannt wurden.
- Die Sortierung von Artikeln nach Kundenbewertungen auf Artikelkategorieseiten funktioniert nun wieder korrekt.

## v3.5.1 (2020-08-19)

### TODO

- Zur Nutzung des Feedback-Plugins muss Ceres v5.0 oder höher installiert sein.
- Nach dem Update auf v3.5.1 müssen Widgets im Menü **CMS » ShopBuilder** durch Klick auf **Inhalte neu generieren** aktualisiert werden. 

### Geändert

- Bei Klick auf die Zahl neben den Bewertungssternen wird nun zum nächsten sichtbaren, übergeordneten Element gescrollt.

### Behoben

- Unter bestimmten Umständen konnten Kunden auf der Bestellbestätigungsseite keine Bewertungen abgeben. Dies wurde behoben.
- Durch einen Fehler wurden die Facettenfilter für Bewertungen nicht mehr gerendert.
- Bestimmte Kombinationen von Einstellungen konnten dazu führen, dass fälschlicherweise ein "Verifizierter Kauf" erkannt wurde.

## v3.5.0 (2020-04-14)

### TODO

- Zur Nutzung des Feedback-Plugins muss Ceres in Version 5.0 oder höher installiert sein.
- Nach dem Update auf v3.5.0 müssen Widgets im Menü **CMS » ShopBuilder** durch Klick auf **Inhalte neu generieren** aktualisiert werden. 

### Hinzugefügt

- Es wurde eine neue REST-Route hinzugefügt, um benötigte Daten für das Feedback-Widget nachzuladen.

### Geändert

- Das Feedback-Plugin ist nun kompatibel mit Ceres 5.0.
- Das Feedback-Plugin kann nun für Artikelset-Inhalte verwendet werden.

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
