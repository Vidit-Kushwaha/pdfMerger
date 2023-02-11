const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const merge=async (arr) => {

  for (const e of arr) {
    await merger.add(e);  
  }
  
let d= new Date().getTime();
  await merger.save(`public/${d}.pdf`);
  return d;
};
module.exports={merge};