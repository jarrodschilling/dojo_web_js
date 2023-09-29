var janeElement = document.querySelector("#janeDoe");

function userName() {
    janeElement.innerText = "Luke Skywalker";
}

var toddElement = document.querySelector("#toddE");
var philElement = document.querySelector("#philE");
var connRequestsElement = document.querySelector("#connRequests");
var yourConnElement = document.querySelector("#yourConnections");
var connRequests = 2
var yourConnections = 500

function deleteTodd() {
    toddElement.remove();
    connRequests--;
    connRequestsElement.innerText = connRequests;
}

function addTodd() {
    toddElement.remove();
    connRequests--;
    connRequestsElement.innerText = connRequests;
    yourConnections++;
    yourConnElement.innerText = yourConnections;
}

function deletePhil() {
    philElement.remove();
    connRequests--;
    connRequestsElement.innerText = connRequests;
}

function addPhil() {
    philElement.remove();
    connRequests--;
    connRequestsElement.innerText = connRequests;
    yourConnections++;
    yourConnElement.innerText = yourConnections;
}