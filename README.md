# Information Retrieval and Web Search Project

This is the frontend repo. For backend, please visit https://github.com/ltdatphan/search-engine.

## CPS842 Final Project - Search Engine

This project, created by David Phan, Sania Syed, Kirill Shmakov, and Kim Rikter-Svendsen, is the culmination of our efforts in CPS842 - Information Retrieval and Web Search. The goal of this project is to leverage our understanding of information retrieval concepts to build a meaningful search engine. We focused on a subset of 1000 Wikipedia articles and employed two distinct models to enhance the search engine's capabilities.

### Project Overview

Our search engine utilizes the following models to provide accurate and relevant search results:

1. **Okapi BM25 Model:**
   - *Purpose:* This model is designed to calculate the relevance of a search term to the contents of the Wikipedia articles. It assesses the content of each article and ranks their relevance compared to the input search term.
   - *Scoring:* The Okapi BM25 model assigns a score to each article, with a higher score indicating greater relevance to the search term.

2. **Naive Bayes (NB) Model:**
   - *Purpose:* The NB model aids the search engine in interpreting which topics are the most relevant to the search terms. The model was trained using a subset of articles and their corresponding topic labels, and then tested with the remaining data.
   - *Outcome:* The NB model enhances the search engine's ability to infer the topics that users are interested in based on their search terms.

### How It Works

1. **Search Term Input:**
   - Users input a search term into the search engine.

2. **Okapi BM25 Processing:**
   - The Okapi BM25 model calculates the relevance scores for each article based on their content compared to the search term.

3. **Naive Bayes Topic Inference:**
   - The Naive Bayes model interprets which topics are most relevant to the search term, leveraging the training data.

4. **Result Compilation:**
   - The final result is a search engine output that provides the most relevant articles within the inferred topics related to the user's search term.

### Usage

To use the search engine, simply input your search term, and the system will deliver a curated list of articles based on relevance and inferred topics.

It is currently hosted at [https://search-engine-cps842.netlify.app/](https://search-engine-cps842.netlify.app/).

Note: Since we are using a free service for backend, it may take a few minutes for the service to spin up and return any results.

### Technology stack
**Front end**
- React
- Axios
- Netlify

**Backend**
- Flask
- Render

### Contributors

- David Phan
- Sania Syed
- Kirill Shmakov
- Kim Rikter-Svendsen

### Acknowledgments

We would like to express our gratitude to the instructors of CPS842 for their guidance and support throughout the project.

Thank you for exploring our Information Retrieval and Web Search Project!
