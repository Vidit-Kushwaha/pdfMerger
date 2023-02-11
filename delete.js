const fs = require('fs');
const express = require('express')
const path = require('path')


const dele=(filePath) => {
    fs.unlink(path.resolve(filePath), (err) => {
      if (err) {
        console.error(`Error deleting file: ${err}`);
      } else {
        console.log(`File deleted successfully: ${filePath}`);
      }
    });
  }
  module.exports=dele;