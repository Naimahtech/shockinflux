"use strict";

const express = require('express');
const app = express();
const root_path = require('app-root-path');
const path = require('path');
let rootpath = root_path.toString();

require(path.join(rootpath, 'config', 'config.js'))(app);

app.listen(1160, function(){
    console.log('App Started by '+ new Date());
});
