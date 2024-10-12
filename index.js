const express = require('express')
const app = express()
const port = 3000

let articles = [{
    Title: 'immunotherapy',
    Content: 'Immunotherapy is a treatment that uses a persons immune system to eliminate cancer.The immune system finds and defends the body from infection and disease'
}, {
    Title: 'Stem Cell Therapy',
    Content: 'Stem cell therapy is an indirect method to eliminate or compensate for the genetic deficiency by replacing or overriding existing diseased cells'
}

]
app.use(express.json());

app.get('/articles', (req, res) => {
    res.json(articles);
})

app.post('/upload', (req, res) => {
    const newTitle = req.body.Title;
    const newContent = req.body.Content;
    if (newTitle && newContent) {
        const newArticle = {
            Title: newTitle,
            Content: newContent
        };
        articles.push(newArticle);
        res.json({ message: 'Your article was added successfully!' })
    } else {
        res.json({ message: 'Oops! Please make sure you give both a title and content for your article.' });
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});