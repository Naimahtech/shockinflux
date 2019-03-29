// "use strict";
const express = require("express");
const root_path = require('app-root-path');
const path = require('path');

let rootpath = root_path.toString();

module.exports = function (app) {
    app
        
        .use(express.static(path.join(rootpath, 'public')))

        .get('*', function (request, response, next) {

            let urlPath = request.params[0].split('/')[1];
            
            if(urlPath == 'about'){
                response.sendFile(path.join(rootpath, 'public', 'about.html'));
            }
            else if(urlPath == 'customers'){
                response.sendFile(path.join(rootpath, 'public', 'customers.html'));
            }
            else if(urlPath == 'pricing'){
                response.sendFile(path.join(rootpath, 'public', 'pricing.html'));
            }
            else{
                response.sendFile(path.join(rootpath, 'public', 'index.html'));
            }
            
        })

}