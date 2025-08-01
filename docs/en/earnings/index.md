# U.S. Company Earnings Processing & Visualization
**Semi-Automated Workflow Based on n8n and OpenBB**


![US Earnings Workflow](/earnings/n8n_incomestatement.png)


<div class="earnings-link-box">
  <span class="emoji">👉</span>
  <a class="earnings-link-text" href="/en/earnings/catalogue/">Click to View U.S. Earnings Analysis</a>
</div>



## 📌 What is it?

This is an **automated workflow for U.S. company earnings processing and visualization** built on n8n. It is designed to:

- Automatically fetch all U.S. companies releasing quarterly earnings on a given day or within a specified date range
- Extract key financial fields and standardize the data format
- Generate data structures suitable for **Sankey charts**
- Automatically write results into **Google Sheets**
- Integrate **earnings call transcripts** for key takeaway summarization using AI


## ⚙️ How does it work?

### 📅 Fetch the list of companies releasing earnings today
- Use [**FMP API**](https://site.financialmodelingprep.com/) earnings calendar endpoint  
- Set the date range to obtain the stock symbols of all companies releasing earnings  
- Store them as arrays for downstream processing

### 🌐 Dynamically request earnings data for each company
- Use **HTTP Request Node** in n8n to loop through each company and fetch:
  - Income statements
  - Segment revenue data
- Each request URL **dynamically concatenates** the current stock symbol

### 🧹 Filter, Reconstruct & Format Data Fields
- Use **Code Node** to filter for the latest quarterly/annual earnings and extract fields such as  
  **Total Revenue, Gross Profit, Operating Expenses, Pre-Tax Income, etc.**
- Use **Merge Node** to join income statement data with segment revenue data per company
- Use **Code Node** to transform the results into a **from / to / value** structure  
  ready for **Sankey chart** generation and Google Sheet export

### 📤 Write to Google Sheets
- Consolidated data is written to **Google Sheets**
- Each company becomes one record, formatted for downstream visualization

### 📊 Generate Sankey Charts
- Use [**Sankeyart**](https://www.sankeyart.com/) to generate Sankey diagrams from the exported data

### 📄 Integrate Earnings Call Transcripts
- Use [**OpenBB**](https://pro.openbb.co) to fetch the **latest earnings call transcripts**
- Leverage **OpenBB AI** to generate **bilingual summaries** and key takeaways


## ✅ What are the advantages?
- Fully automated daily workflow via n8n, significantly improving earnings analysis efficiency
- Dynamically modifies HTTP URLs to fetch all companies’ earnings data for a given day in a single run, minimizing processing time
- FMP API provides pre-structured financial data, avoiding inconsistencies across company filings
- Output is **directly compatible with Sankey diagrams**, visualizing revenue, expenses, and profit flow paths
- **OpenBB AI** generates concise, bilingual summaries, accelerating the understanding of key business highlights and forward-looking guidance
- Highly extensible: supports fetching any earnings data and automatically generating simple visualizations (line charts, bar charts, etc.)

## 💡 Future Optimization
- Integrate directly with BI tools in n8n to eliminate manual Sankey chart creation
- Connect with OpenBB-generated earnings call summaries to achieve **fully automated end-to-end report generation**
