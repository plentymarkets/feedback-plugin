# Release Notes for Feedback

## v4.0.10 (2024-01-XX) <a href="https://github.com/plentymarkets/feedback-plugin/compare/4.0.9...4.0.10" target="_blank" rel="noopener"><b>Overview of all changes</b></a>

### Changed

-  The rating on the category pages is now loaded via   the item list (itemList).

## v4.0.9 (2023-06-19) <a href="https://github.com/plentymarkets/feedback-plugin/compare/4.0.8...4.0.9" target="_blank" rel="noopener"><b>Overview of all changes</b></a>

### Changed

- It's now possible to display the average rating on category level. We would like to thank user @MaxBentz for their contribution.
- It's now possible to display attributes on the order confirmation page. We would like to thank user @MaxBentz for their contribution.
- CSS adjustments. We would like to thank user @MaxBentz for their contribution.

## v4.0.8 (2023-01-05) <a href="https://github.com/plentymarkets/feedback-plugin/compare/4.0.7...4.0.8" target="_blank" rel="noopener"><b>Overview of all changes</b></a>

### Changed

- The logic for anonymisation was moved to the core.
- Visibility settings were moved from the widget to the plugin configuration.

## v4.0.7 (2022-10-21) <a href="https://github.com/plentymarkets/feedback-plugin/compare/4.0.6...4.0.7" target="_blank" rel="noopener"><b>Overview of all changes</b></a>

### Changed
- 
- Clicking the image of an item in the rating widget for the order confirmation now leads to the item page. We would like to thank user @MaxBentz for their contribution.

### Fixed
 
- The order of the rating stars was incorrect when editing a feedback. This has been fixed. We would like to thank user @MaxBentz for their contribution.

## v4.0.6 (2021-10-20)

### Changed

- The feedback plugin was adapted to the rebranding to **plentyShop LTS".

### Fixed

- When selecting a rating filter, it was not displayed as selected.
- In the structured data, an explicit type was stored for the author.

## v4.0.5 (2021-08-17)

### TODO

- After updating the feedback plugin to v4.0.5, it is necessary to regenerate ShopBuilder widgets via the **Regenerate contents** button in the **CMS » ShopBuilder** menu.

### Behoben

- Due to an error in the name resolution for author fields, the author name was sometimes not included in the structured data. This has been fixed.

## v4.0.4 (2021-07-06)

### TODO

- After updating the feedback plugin to v4.0.4, it is necessary to regenerate ShopBuilder widgets via the **Regenerate contents** button in the **CMS » ShopBuilder** menu.

### Behoben

- The use of multiple feedback widgets on the single item view led to errors. This has been fixed.
- While editing a customer review, a markup error was visible. This has been fixed.

## v4.0.3 (2021-05-10)

### TODO

- After updating the feedback plugin to v4.0.3, it is necessary to re-generate ShopBuilder widgets via the **Regenerate contents** button in the **CMS » ShopBuilder** menu.

### Behoben

- Feedbacks submitted without an author's name led to an error. This has been fixed.

## v4.0.2 (2021-05-05)

### TODO

- After updating the feedback plugin to v4.0.2, it is necessary to re-generate ShopBuilder widgets via the **Regenerate contents** button in the **CMS » ShopBuilder** menu.

### Fixed

- Line breaks in comments for customer reviews were rendered as `<br>` tags. This has been fixed.

## v4.0.1 (2021-04-28)

### TODO

- This version of the feedback plugin is only compatible with Ceres v5.0.27 or higher.
- After updating the feedback plugin to v4.0.1, it is necessary to re-generate ShopBuilder widgets via the **Regenerate contents** button in the **CMS » ShopBuilder** menu.

### Fixed

- The number of feedbacks in the star rating widget was incorrectly positioned. As a result, the rating stars concealed the feedback count. This has been fixed.

## v4.0.0 (2021-04-14)

### TODO

- This version of the feedback plugin is only compatible with Ceres v5.0.27 or higher.
- After updating the feedback plugin to v4.0.0, it is necessary to re-generate ShopBuilder widgets via the **Regenerate contents** button in the **CMS » ShopBuilder** menu.

### Added

- The feedback plugin is now compatible with Vue Server-Side Rendering.
- We added a Webpack 5 build process.
- The logic and data auf the Vue components have been moved to a separate VueX store.

### Changed

- Widgets are no longer defined and registered via the obsolete `contentwidgets.json` file but via PHP classes.
- All Vue components have been realised as precombiled Single File Component files that are loaded asynchronously. 

## v3.6.4 (2021-04-13)

### TODO

- This version of the feedback plugin is only compatible with Ceres v5.0 or higher.
- After updating the feedback plugin to v3.6.4, it is necessary to re-generate ShopBuilder widgets via the **Regenerate contents** button in the **CMS » ShopBuilder** menu.

### Behoben

- We fixed a security issue through which cross-site scripting was made possible.
- Under certain circumstanes, the field for the author's name was not displayed on the order confirmation of guest orders. This has been fixed.

## v3.6.3 (2021-03-26)

### TODO

- This version of the feedback plugin is only compatible with Ceres v5.0 or higher.
- After updating the feedback plugin to v3.6.3, it is necessary to re-generate ShopBuilder widgets via the **Regenerate contents** button in the **CMS » ShopBuilder** menu.

### Fixed

- Feedbacks could not be verified, when written from a guests order confirmation. This has been fixed.
- Incorrectly cached data lead to wrongly linked feedbacks on the order confirmation.

## v3.6.2 (2021-03-03)

### TODO

- This version of the feedback plugin is only compatible with Ceres v5.0 or higher.
- After updating the feedback plugin to v3.6.2, it is necessary to re-generate ShopBuilder widgets via the **Regenerate contents** button in the **CMS » ShopBuilder** menu.

### Changed

- The feedback widget for the order confirmation now displays a notification on contents in the ShopBuilder on which it cannot be used.

### Fixed

- Under certain circumstances, the author's name could be left empty in customer reviews. This has been fixed. 

## v3.6.1 (2020-12-15)

### TODO

- This version of the feedback plugin is only compatible with Ceres v5.0 or higher.
- After updating the feedback plugin to v3.6.1, it is necessary to re-generate ShopBuilder widgets via the **Regenerate contents** button in the **CMS » ShopBuilder** menu.

### Fixed

- A missing condition for the output of the structured data led to errors for unrated articles. 
- The title of the feedback facet was not available in the CMS » Multilingualism menu.


## v3.6.0 (2020-12-08)

### TODO

- This version of the feedback plugin is only compatible with Ceres v5.0 or higher.
- After updating the feedback plugin to v3.6.0, it is necessary to re-generate ShopBuilder widgets via the **Regenerate contents** button in the **CMS » ShopBuilder** menu.

### Added

- The field "reviews" has been added to the structured data.

### Changed

- The structured data is now directly generated into the head of the HTML document.

## v3.5.3 (2020-10-14)

### TODO

- This version of the feedback plugin is only compatible with Ceres v5.0 or higher.
- After updating the feedback plugin to v3.5.3, it is necessary to re-generate ShopBuilder widgets via the **Regenerate contents** button in the **CMS » ShopBuilder** menu.

### Fixed

- The translation key "customerReviews" was mistakenly removed. This has been fixed.


## v3.5.2 (2020-10-13)

### TODO

- This version of the feedback plugin is only compatible with Ceres v5.0 or higher.
- After updating the feedback plugin to v3.5.2, it is necessary to re-generate ShopBuilder widgets via the **Regenerate contents** button in the **CMS » ShopBuilder** menu.

### Changed

- The buttons for editing and deleting customer ratings submitted by guest accounts have been removed from the feedback widget.

### Fixed

- Certain combinations of settings could lead to verified purchases of items not being registered. This has been fixed.
- Sorting items on category pages according to customer rating now works as intended.

## v3.5.1 (2020-08-19)

### TODO

- This version of the feedback plugin is only compatible with Ceres v5.0 or higher.
- After updating the feedback plugin to v3.5.1, it is necessary to re-generate ShopBuilder widgets via the **Regenerate contents** button in the **CMS » ShopBuilder** menu.

### Changed

- When a user clicks the number next to the star rating, the page now scrolls to the next superordinate element that is visible. 

### Fixed

- Under certain circumstances, customers were unable to submit a rating on the order confirmation page.
- Due to an error, facet filters for ratings were no longer rendered. 
- Certain combinations of settings could lead to an erroneous display of the "Verified purchase" badge.

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
