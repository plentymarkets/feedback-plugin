# Feedback

Display customer reviews in the online store.

## Setting up customer reviews

In order to display customer reviews in your online store, you have to carry out the settings in the plentymarkets back end.

##### Setting up customer reviews:

1. Go to **Start » Plugins**.<br /> → The plugin overview will open. 
2. Click on **Feedback**.<br /> → The plugin will open in a new tab. 
3. Click on **Configuration** in the directory tree.<br /> → The **Feedback settings** is pre-selected. 
4. Carry out the settings. Pay attention to the information given in table 1. 
5. **Save** the settings.

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
				<b>Release feedbacks automatically</b>
			</td>
			<td>
                Activate to release customer reviews automatically in the online store. If this setting is deactivated, customer reviews must be manually released in the **CMS » Feedback ratings** menu. Only customer reviews created after activating this function will be released automatically.
			</td>
		</tr>
        <tr>
			<td>
				<b>Show date for the feedback</b>
			</td>
			<td>
				Activate to display the date of creation of the customer review in the online store.
			</td>
		</tr>
		<tr>
			<td>
				<b>Maximum number of feedbacks per author and item</b>
			</td>
			<td>Enter a value to limit the customer reviews of an author for an item. If now value is entered, a logged in customer can create an unlimited number of reviews for an item.
			</td>
		</tr>
	</tbody>
</table>

## Displaying customer reviews in the online store

The template plugin **Ceres** allows you to display customer reviews in the single item view by using template containers. To display customer reviews in the online store, proceed as follows.

##### Displaying customer reviews in the online store:

1. Go to **Plugins&nbsp;» Content**. 
2. Go to the **Feedback Javascript** area. 
3. Activate the container **Script loader: Register/load JS**. 
4. Go to the **Feedback CSS (Ceres)** area. 
5. Activate the container **Template: Style**. 
6. Go to the **Feedback ratings** area. 
7. Activate the container **Single item: Container for customer feedback**. 
8. **Save** the settings.<br />→ Customer reviews will be displayed in single item view.

## License

This project is licensed under the GNU AFFERO GENERAL PUBLIC LICENSE. – find further information in the [LICENSE.md](https://github.com/plentymarkets/feedback-plugin/blob/master/LICENSE.md).