One of my greatest pleasures, dear readers, is **building things** — in any shape or form. 🛠️  
I don’t know why, but since I was a kid, I loved creating tools and objects just for fun. You could say I was a “maker” long before I even knew what that meant.

Fast-forward a few years into my tech career, and I stumbled upon an unexpected **investment opportunity** — a nearly wrecked old house in my hometown. 🏚️  
It needed *everything*: floors, walls, pipes, electricity, kitchen, windows, doors… even a new soul (and a few coats of paint). 🎨  

But that’s not what this story is about.

---

## 🏡 From Renovation to Reporting

After months of renovation, I finally rented out the apartment. The tenant planned to stay only for a few months, so it didn’t make sense to transfer all the utility accounts to his name.  
Instead, he’d pay me a fixed fee every month, and every quarter we’d calculate the real usage based on actual consumption.

Simple, right? Except for one problem:  
I didn’t want to manually check invoices every month and send an email saying, “Hey, you owe this much…” 😩  

I wanted **live reporting** — a simple, automated way to visualize total utility costs in real time.  

So I came up with a neat idea 💡:  
Why not use **Grafana**, one of my favorite tools, and connect it to a **Google Sheet**? That way, the tenant could see up-to-date expenses, monthly averages, and usage trends directly on a dashboard — no emails, no math!

---

## ⚙️ Setting It Up: Grafana + Google Sheets

The secret ingredient here is one of the most popular Grafana plugins — the **Google Sheets Data Source Plugin**.  
Here’s how to get it running (spoiler: it’s super easy 🚀):

1. **Create or log in** to your [Grafana Cloud stack](https://grafana.com/products/cloud/). It’s free and generous for personal projects.  
2. In Grafana, go to **Connections → Google Sheets → Install Plugin → Add Data Source**.  
3. In the configuration page, click **Generate an API key** — the simplest way to connect Grafana with Google Sheets.  
4. Alternatively, create the key manually:  
   - Go to the [Google Cloud Console](https://console.cloud.google.com/)  
   - Navigate to **API Library → Google Sheets API → Credentials → Create Credentials → API Key**  
   - Copy that key and paste it into your Grafana data source configuration.  
5. Now, grab the URL of your Google Sheet, for example:  
https://docs.google.com/spreadsheets/d/1NBqIhG-NalyCIaxSHREK-JM3cDIZs1DMBx1-p36Jg/edit?gid=0#gid=0
You’ll only need the **Spreadsheet ID** — the part between `/d/` and `/edit`.  
6. Back in Grafana, select the Google Sheets data source you just created, then enter:  
- The **Spreadsheet ID**  
- The **Range** you want to query (for example, `'Sheet1'!A2:I7`)  
7. Wait a few minutes ⏳ — it might take a short while before the first data appears.  
8. Once connected, you can create **tables**, **gauges**, or **bar charts** — whatever helps visualize your data best.

Here’s an example of how it looks in Grafana 👇  
![Grafana Example](https://i.imgur.com/l6PAI2b.png)

---

## 🌍 Sharing the Dashboard

Now, here comes the fun part — you can **publish your dashboard** and make it publicly accessible, so your tenant (or anyone else) can view it in real time.  
No more chasing invoices or doing late-night math 🧮.

This setup worked beautifully for both of us:  
- I could easily update the monthly invoice amounts.  
- The tenant could instantly see what they were spending.  

Pretty cool, right? 😎  

Well… almost.  
It still required me to manually update the numbers every month, which wasn’t the perfect automation I had in mind.  

Wouldn’t it be amazing to fully automate this process? 🤖  

Stay tuned for **Part 2**, where I’ll show you exactly how I took this real-time reporting to the next level!
