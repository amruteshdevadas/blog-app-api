const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());

let articles = [
  {
    id: 1,
    title: "How to Build a React App",
    description:
      "This is a simple guide to building your first React app from scratch.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxb2dRBbhCJkKcTyHdjXLy8ENOneTi-BhSQg&s",
    content: `
        <p>This is a simple guide to building your first React app. React is a powerful library for building user interfaces.</p>
        <p>In this tutorial, we will go step by step to create a simple application that will display a list of items, allowing you to interact with it.</p>
        <p>First, we need to install React and set up a development environment. You can do this by using Create React App, which is a command-line tool to set up everything for you.</p>
      `,
    author: {
      name: "John Doe",
      bio: "Frontend developer and React enthusiast. Writing about modern web development and best practices.",
      avatar: "",
    },
    publishedDate: "March 1, 2025",
  },
];

app.get("/blog", (req, res) => {
  const { tag } = req.query; // Get query param "tag"

  // Filter articles where title includes the tag (case-insensitive)
  const filteredArticles = tag
    ? articles.filter((article) =>
        article.title.toLowerCase().includes(tag.toLowerCase())
      )
    : articles; // If no tag is provided, return all articles

  res.status(200).json(filteredArticles);
});

app.get("/blog/:id", (req, res) => {
  const id = req.params.id;
  res.status(200);
  const singleArticle = articles.find((a) => a.id == id);
  res.send(singleArticle);
});

app.post("/blog", (req, res) => {
  try {
    const payload = req.body;
    payload.id = articles?.length + 1;
    articles.push(payload);
    res.status(200);
    res.json({ title: payload?.title });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.put("/blog/:id", (req, res) => {
  try {
    const payload = req.body;
    const id = req.params?.id;

    // Find the article by id and update it
    let updated = false;

    articles = articles.map((item) => {
      if (item.id == id) {
        updated = true;
        return { ...item, ...payload };
      }
      return item;
    });

    if (updated) {
      res.status(200).json({ message: "Data successfully updated!" });
    } else {
      res.status(404).json({ message: "Blog not found!" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
});

app.delete("/blog/:id", (req, res) => {
  try {
    const id = req.params.id;
    articles.filter((a) => a.id !== id);
    res.status(200);
    res.send(id);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
});

app.use((req, res, err) => {
  res.status(500);
  res.send("Not Found!");
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running,and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
