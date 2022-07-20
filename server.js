const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
// we will not use that
app.post('/file/:message', (req, res) => {
  let logmessage = req.params.message;

  let  body = { 
    type : 'Info',
    message : logmessage
  };
  let jsonContent = JSON.stringify(body);
  console.log(jsonContent);
  fs.writeFileSync('C:/Users/hp/OneDrive/Bureau/logs/logging.log', jsonContent.concat('\n'),{ flag: 'a+' } );
  //fs.close()

})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})