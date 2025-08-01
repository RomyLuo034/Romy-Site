# Daily Financial News Push
**Automated workflow powered by n8n**


![Financial News Workflow](/posts/n8n_posts.png)


<div class="posts-link-box">
  <span class="emoji">👉</span>
  <a class="posts-link-text" href="/en/posts/catalogue/">Click to View Daily Financial News</a>
</div>



## 📌 What is it?

This is an **automated financial news workflow** built on n8n.  
It is designed to automatically collect content from multiple major domestic and international financial news sources every day, process it with **DeepSeek**, and complete:

- Generating **structured financial news summaries**
- Automatically sending to **subscriber emails**
- Automatically updating to **personal website** (via GitHub commits and Netlify deployment)
- The entire workflow is **fully unattended**, achieving automation, structuring, and multi-channel distribution of financial news


## ⚙️ How does it work?


### 🕘 Scheduled Trigger
- **Schedule Trigger Node** automatically triggers the entire workflow every day at **9:00 AM Beijing Time**


### 🌐 Multi-source News Collection
- **HTTP Request Node** fetches the latest content from 5 financial news sources:
- [**Bloomberg**](https://feeds.bloomberg.com/markets/news.rss), [**CNBC**](https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=100727362) official RSS feeds
- **36Kr**, **CLS**, **iFinD 7×24 Realtime Flash News** via [RSSHub](https://docs.rsshub.app/)


### 🧹 Content Cleaning & Structuring
- **XML Node** converts raw XML data into JSON format
- **Code Node** extracts fields such as news title, body text, and original link, then converts them into Markdown and filters content within a specific time window (e.g., yesterday 9 AM to today 9 AM)
- **Merge Node** combines news from 5 sources into a unified data item for subsequent processing


### 🤖 AI Filtering, Translation, Summarization & Writing
- This workflow calls **DeepSeek-Reasoner Model**, using carefully designed prompts to:
- Translate English content into Chinese
- Filter financial-related news, including macro policies, financial markets, and corporate updates
- Categorize filtered news into **Policy, Stock Market, Forex Market, Corporate News**, etc.
- Generate a financial-news-style summary, with a title and ~100-200 words


### 📤 Email Push & Website Publishing
- **Send Email Node** automatically sends generated news briefs to subscriber emails
- **GitHub (Create/Get/Edit a file) Node** and **AI Agent Node** automatically create and update documents, generate new linked entries, and trigger **Netlify** for website auto-deployment


## ✅ What are its advantages?
- Complete multi-source integration with AI-powered processing
- End-to-end automation, suitable for building a "Daily Financial Briefing" service, with flexible output to **email, Google Docs, or even WeChat Official Accounts**
- Highly extensible: easily integrates with additional news sources and adapts to diverse business intelligence needs
