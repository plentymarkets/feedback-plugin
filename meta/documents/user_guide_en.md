# Feedback

Display customer reviews in the online store and reply to feedbacks. The feedback plugin requires the plentyShop LTS ShopBuilder.

## Setting up customer reviews

In order to display customer reviews in your online store, you have to carry out a few settings in the PlentyONE backend and ShopBuilder.

##### Setting up customer reviews:

1. Go to **Plugins » Plugin set overview**.<br /> → The plugin set overview will open.
2. Open your plugin set.
3. Enter "feedback" into the plugin search.
4. Click on the feedback plugin.
5. Click the **Install** button in the feedback plugin.
6. **Publish** the plugin set after the installation has completed.
7. Open the ShopBuilder by clicking on **Shop » ShopBuilder**. The feedback widgets are now available in the widget category **item**.
8. Open an item page, add the feedback widgets to your page and carry out the widget settings according to table 1.

<table>
<caption>Table 1: Carrying out settings for customer reviews</caption>
	<thead>
		<th>
			Setting
		</th>
		<th>
			Explanation
		</th>
	</thead>
	<tbody>
        <tr>
			<td>
				<b>Show date of reviews</b>
			</td>
			<td>
				Activate to display the date of creation of the customer review in the online store.
			</td>
		</tr>
		<tr>
			<td>
				<b>Allow reviews without rating</b>
			</td>
			<td>
				Activate to allow adding reviews without star ratings.
			</td>
		</tr>
		<tr>
			<td>
				<b>Only allow reviews after purchase</b>
			</td>
			<td>
				Activate to allow adding reviews only for items that were purchased.
			</td>
		</tr>
		<tr>
			<td>
				<b>Maximum number of reviews per author and item</b>
			</td>
			<td>Enter a value to limit the customer reviews of an author for an item. If now value is entered, a logged in customer can create an unlimited number of reviews for an item.
			</td>
		</tr>
    <tr>
			<td>
				<b>Maximum number of reviews per page</b>
			</td>
			<td>Enter a value to limit the number of reviews per page. The remaining reviews are loaded after customers click the **more** button at the bottom of the reviews.
			</td>
		</tr>
	</tbody>
</table>

Additionally, you can carry out further settings in the **Plugins » Plugin overview » Feedback » Settings**, which are detailed in the following table:

<table>
<caption>Tab. 2: Settings for customer reviews in the plugin</caption>
	<thead>
		<th>
			Setting
		</th>
		<th>
			Description
		</th>
	</thead>
	<tbody>
        <tr>
			<td>
				Automatically publish reviews
			</td>
			<td>
				Select whether reviews should be released automatically, or should only be released for customers who are logged in.
			</td>
		</tr>
		<tr>
	<td>
		Show empty star ratings in the category view
	</td>
	<td>
		Activate to display empty star ratings as long as no rating has been given for the item.
	</td>
	</tr>
	<tr>
	<td>
		Show rating filter
	</td>
	<td>
		Activate to enable customers to filter search results of customer reviews.
	</td>
	</tr>
	<tr>
	<td>
		Show sorting option in item lists
	</td>
	<td>
		Activate to enable customers to sort item lists by rating.
	</td>
	</tr>
</table>

## Displaying customer reviews in the category view

The feedback plugin makes it possible to display customer reviews in the category view by using template containers. To display customer reviews in the category view, proceed as follows.

##### Displaying customer reviews in the category view:

1. Go to **Plugins » Plugin set overview**.
2. Open your plugin set.
3. Click the feedback plugin to open the plugin settings.
4. Click the tab **Container links** in the navigation tree on the left side.
5. Click the **Default container links** area to expand it.
6. Activate the checkbox for the container **Ceres::CategoryItem.BeforePrices**.
7. **Save** the settings.<br />→ Customer reviews will be displayed in category view before item prices.

## Managing customer reviews

Manage your customer reviews in the **Shop » Feedback ratings** menu. For further information about customer reviews, refer to the <a href="https://knowledge.plentyone.com/en-gb/manual/main/online-store/managing-feedbacks.html" target="_blank"><b>Managing feedbacks</b></a> page of the manual.
