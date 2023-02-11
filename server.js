const express = require('express')
const path = require('path')
const multer  = require('multer')
const merge=require('./pdfMerger.js')

const dele=require('./delete.js')
const upload = multer({ dest: 'uploads/' })

const app = express()
const port = 3000

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"templates/index.html"))
})

app.post("/merge",upload.array('pdfs'),async (req,res,next)=>{
    console.log(req.files) 

    let i = 0;
    let arr = [];

    while (i !== req.files.length) {
      arr[i] = path.join(__dirname, req.files[i].path);
      i++;
    }
  
    let d = await merge.merge(arr);
  
  res.redirect(`http://localhost:3000/${d}.pdf`)
         let filePath=`public/${d}.pdf`;
        setTimeout(()=>{dele(filePath)}, 15* 1000);
       
        for (const e of arr) { 
          setTimeout(()=>{dele(e)}, 15* 1000);
        }

}

)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/`)

})