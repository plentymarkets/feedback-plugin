# Release Notes for Feedback

## v3.5.1 (2020-08-19)

### TODO

- This version of the feedback plugin is only compatible with Ceres version 5.0 or higher.
- After updating the feedback plugin to version 3.5.1, it is necessary to re-generate the ShopBuilder contents via the **Regenerate contents** button in the **CMS » ShopBuilder** menu.

### Changed

- Bei Klick auf die Zahl neben den Bewertungssternen wird nun zum nächsten sichtbaren, übergeordneten Element gescrollt.

### Fixed
- In gewissen Randfällen konnten Kunden auf der Bestellbestätigung keine Bewertungen abgeben.
- Durch einen Fehler wurden die Facettenfilter für Bewertung nicht mehr gerendert.
- Mit einer gewissen Konstellation an Einstellungen wurde fälschlicherweise ein "Verifizierter Kauf" erkannt.

## v3.5.0 (2020-04-14)

### TODO

- This version of the feedback plugin is only compatible with Ceres version 5.0 or higher.
- After updating the feedback plugin to version 3.5.0, it is necessary to re-generate the ShopBuilder contents via the **Regenerate contents** button in the **CMS » ShopBuilder** menu.

### Added

- A new REST route has been added in order to load the required data for the feedback widget as needed.

### Changed

- The feedback plugin is now compatible with Ceres version 5.0.
- The feedback plugin can now be used for item set contents.

## v3.4.1 (2020-03-04)

### TODO

- This version of the feedback plugin is only compatible with Ceres version 4.6 or higher.

### Changed

- The structured data is now output via '<script2' tags.

### Fixed

- Due to an error, the page did not scroll to the feedback plugin after the user clicked on the number of submitted ratings. This has been fixed.

## v3.4.0 (2020-01-20)

### TODO

- After updating the plugin to v3.4.0, you need to refresh ShopBuilder contents by clicking the button **Regenerate contents** in the **CMS » ShopBuilder** menu.

### Added

- The star rating widget is now able to display the number of submitted ratings. Clicking the number next to the star ratings redirects the user to the item review widget if this widget is also placed in the same content.

### Changed

- The star rating widget now initially loads necessary data. This improves the performance slightly.  

### Fixed

- Item bundles were displayed incorrectly in the item review widget for the order confirmation page. This has been fixed.
- Under certain circumstances, faulty tooltips were displayed in Ceres. This has been fixed.
- The item review widget for the order confirmation page was not displayed in ShopBuilder contents that were anything but an order confirmation page. This has been fixed.

## v3.3.0 (2019-12-18)

### Added

- We added a Shopbuilder widget for filtering items on the category page by rating.

## v3.2.2 (2019-10-22)

### TODO

- After updating to v3.2.2, you need to refresh the widgets by clicking **Regenerate contents** in the **CMS » ShopBuilder** menu.

### Changed

- The feedback widget for the order confirmation page has been converted from a grid layout to a column layout in order to improve compatibility with older browsers.

### Fixed 

- In the feedback widget for the order confirmation page, certain images were not displayed correctly. This has been fixed.
- The item's name is now displayed instead of the variation name.

## v3.2.1 (2019-10-09)

### Added

- A note was added on the order confirmation page informing the user that the widget is loading.

### Fixed

- Due to an error, no data for the feedback widget was loaded on the order confirmation page. This has been fixed.
- Code changes in the `FeedbackService` resulted in an improved stability of the plugin.

## v3.2.0 (2019-09-30)

### TODO

- After updating to v3.2.0, you need to refresh the widgets by clicking **Regenerate contents** in the **CMS » ShopBuilder** menu.

### Added

- The feedback widget can now be used on the order confirmation page.

## v.3.1.2 (2019-09-02)

### Fixed 

- Due to an error, structured data was invalid if no star rating had been given for an item. This has been fixed.
- Due to an error, the setting "Show empty star rating" was not working as intended. This has been fixed. 

## v3.1.1 (2019-08-22)

### Fixed

- Due to an error, styles could not be loaded on certain templates. This has been fixed.

## v3.1.0 (2019-08-19)

### TODO

- After updating to 3.1.0, you need to carry out the setting for automatically publishing reviews in the **Plugin overview » Feedback » Settings** menu.

### Added

- Guest reviews are now possible.
- Guest customers can now save a nickname for each review.
- We added a honeypot to prevent spam.

### Changed

- The settings for automatically releasing reviews have been expanded.

### Fixed

- The user interface has been improved.
- The plugin's performance has been improved.

## v3.0.0 (2019-08-12)

### Added

- The plugin is now compatible with the ShopBuilder.
- The number of item reviews per page can now be specified via the widget settings.
- The size of the rating stars can now be specified via the widget settings.
- The field “aggregateRatings”, which contains the average rating of an item, has been added to the Schema.org markup.

### Changed

- The feedback plugin has been redesigned as 2 ShopBuilder widgets. The widget **Item review** makes it possible for customers to write reviews that are displayed in the online store. The widget **Star rating** provides the average rating of the reviews on the single item view.
- The plugin settings have mostly been relocated to the 2 ShopBuilder widgets.
- The feedback plugin is now open source.
- The former container links have been removed, with the exception of “Feedback category ratings”.

### Fixed

- When submitting a review, the star rating was only displayed after reloading the page. This has been fixed.
- Reviews without a star rating could not be submitted. This has been fixed.

## v2.0.0 (2019-04-29)

### FEATURE

- Add support for IO 4.0.0.

## v1.4.1 (2019-01-30)

### Fix

- Due to changes to the plentymarkets core funcitonality, feedback ratings were not correctly displayed.

## v1.4.0 (2019-01-10)

### CHANGE

- Filters and sorting options can now be deactivated in the configuration.

## v1.3.1 (2018-10-01)

### Fix

- Due to an error, feedback facets were not displayed. This has been fixed.

### CHANGE

- Texts of the plugin can now be translated via the CMS » Multilingualism menu.

## v1.3.0 (2018-07-31)

### CHANGE

- The plugin was modified to incorporate the Vue.js framework.

## v1.2.1 (2018-07-05)

### Fix

- Migrated guest reviews are now displayed.

## v1.2.0 (2018-05-24)

### Fix

- If reviews have been edited by customer, they keep their visibility status. Now the configuration value is considered.

### CHANGE

- h1-Tag changed to div-tag
- The last name of the author is now shortened

### FEATURE

- If an item has no rating, the star rating will be hidden by default in the category. These can be reactivated in the configuration.

## v1.1.1 (2018-03-08)

### Fix

- Due to an error feedback ratings could not be filtered in the category view of Ceres version 2.2.2 or higher. This has been fixed.

## v1.1.0 (2017-12-01)

### Change

- Ceres 2 compatibility

## v1.0.3 (2017-11-08)

### Added

- Existing feedbacks with ratings of up to 10 stars can now be migrated. For further information, refer to <a href="https://knowledge.plentymarkets.com/en/omni-channel/online-store/managing-feedbacks#100" target="_blank">Migrating customer reviews</a>.
- Attributes are now displayed in the title row of a customer review for the variation the customer review was added for.
- It is possible to filter by ratings in the category view.
- It is possible to sort items by ratings in the category view.
- The ratings of an item can now be displayed for items in the category view. To do so, go to the **Plugins » Content** menu and in the **Feedback category ratings** area, activate the **Category item list: Before prices container** container.

## v1.0.2 (2017-10-26)

### Added

- Migrate existing feedbacks
- Add option to allow adding feedbacks without ratings
- Add option to allow adding feedbacks only for items that were purchased


## v1.0.1 (2017-10-11)

### Fix

- Fix build issue

## v1.0.0 (2017-10-10)

### Added

- Initial program files. Logged in users can enter feedbacks for items and save comments in the online store (e.g. Ceres). Store managers can make customer feedbacks visible/invisible, delete feedbacks or write an answer.
