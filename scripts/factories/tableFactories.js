/*
 *  http://stackoverflow.com/questions/26005687/uploading-downloading-byte-arrays-with-angularjs-and-asp-net-web-api
 */

app.factory('TableSerDeFactory', function TableSerDeFactory($http, $q) {
    'use strict';
    return {
        tableData: getTableData
    };

    function getTableData() {

     // will do the bit magic here Ian to provide
    }

});