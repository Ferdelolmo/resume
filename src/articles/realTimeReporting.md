# Real-Time Reporting for Utility Bills with Grafana and Google Sheets 📊

After a few years in tech, I came up with an investment opportunity in real estate 🏠. It was an old house in my hometown that was almost wrecked. It needed a full renovation, that is to say: floor, walls, pipes, electricity, kitchen, windows, doors and painting.

Anyways, that’s not the scope of the article. The thing is that after I did all that work in the house, I rented the apartment. With the tenant staying just for a few months, it didn’t make sense to change the bank account for all the utility bills. Instead, he’d pay me a fee on a monthly basis and we'd make a calculation based on the real consumption every quarter. Only one thing was missing: Live reporting 📈. In other words, I didn't want to look at every invoice and send an email saying how much was owed…

## The Solution: Grafana + Google Sheets 💡

So I came up with a way to display the total sum of the utilities without having to do maths. I decided to use one of the most popular plugins in the Grafana ecosystem: the Google Spreadsheet plugin. That way, a Grafana dashboard would display in real-time the monthly amounts, so the tenant could see things like how short/long he was with the expenses, the average monthly spend, and so on.

## The Setup Process 🛠️

Using it was really simple, these are the steps:

1.  **Use or create a Grafana Cloud stack.** It’s free and the tier gives you a generous allotment for personal projects.
2.  **Install the Google Sheets plugin.** Go to Connections -> Google Sheets -> Click on Install -> Add a datasource.
3.  **Generate an API key.** In the configuration page, click on "generate an API key". This is the simplest way to connect Grafana with Google Sheets.
4.  **Get your Google Sheets API key.** Go to the Google Cloud console -> API Library -> Google Sheets API -> Credentials -> Create credentials -> API key and then copy that key for your Grafana Cloud datasource connection.
5.  **Get your spreadsheet ID.** Once this is done, you only need the URL of the google sheet to start querying Google Sheets. For example, for this URL `https://docs.google.com/spreadsheets/d/1NBqIhG-NalyCIaxSHREK-JM3cDIZs1DMBx1-p36Jg/edit?gid=0#gid=0`, you will only need the spreadsheet ID, which is the ID between the `/d` and the `/edit`.
6.  **Configure the query.** You will select the Google Sheets datasource we just created and then add the ID and the range. You can also select the range from the spreadsheet tab you want to query. The syntax has to be exactly what the datasource expects: `'Sheet1'!A2:I7`.
7.  **Wait for the data.** Allow a few minutes, it might take a while till you start receiving actual data for the first time.

You can create tables, gauges or bar charts, just like this example:

![Alt text for your image](https://i.imgur.com/l6PAI2b.png)

## The Result 🎉

And there you go! Now you can create a public dashboard so the viewer can see the data in real time.

This definitely made sense to both of us. I could post the invoice values and then asynchronously, the tenant could see what he was spending. Wasn’t it wonderful?

Not quite yet… that still required me to add manually every month the amounts, so the full problem was not solved. Wouldn’t it be possible to automate all this workflow? Stay tuned for the second part… 😉