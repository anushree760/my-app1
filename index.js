app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Welcome to My App</title>
        <style>
          body {
            background-color: #f0f0f0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          h1 {
            color: #4CAF50;
            font-size: 2.5rem;
            margin-bottom: 10px;
          }
          p {
            font-size: 1.2rem;
            color: #333;
          }
          footer {
            margin-top: 30px;
            font-size: 0.9rem;
            color: #777;
          }
        </style>
      </head>
      <body>
        <h1>Hello from Render 👋</h1>
        <p>This is a styled Node.js + Express app deployed with CI/CD on Render.</p>
        <footer>© 2025 Anushree's Demo Project</footer>
      </body>
    </html>
  `);
});
