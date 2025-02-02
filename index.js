const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.json({
        email:"somtoochukwuhilary@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url:"https://github.com/HilaryOkonkwo/HNG12-Backend-Stage0Task.git"
    })
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})