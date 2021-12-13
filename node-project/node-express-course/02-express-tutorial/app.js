const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send("<h1> Home Page </h1><a href='/api/products'>products</a>");
});
//route params-start
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  console.log(req.params);
  const { productID } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send("Product does not exist!");
  }

  return res.json(singleProduct);
});
//route params-end

//queryString-start
app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    console.log("here1");
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });

    sortedProducts = sortedProducts.slice(0, Number(1));
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    //return res.status(200).send("No products matched your search!");
    return res.status(200).json({ sucess: true, data: [] });
  }
  return res.status(200).json(sortedProducts);
});
//queryString-end

app.listen(5113, () => {
  console.log("SERVER is listening on port 5113...");
});
