const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors(
    {
        origin: "http://localhost:6667",
        methods: ["POST", "GET"],
        credentials: true
    }
));

const db = mysql.createConnection({
    user: "root",
    port: "3306",
    host: "127.0.0.1",
    password: "root",
    database: "7381_Dataset"
})

db.connect((err) => {
    if(err) {
        console.log(err);
        return
    }
    console.log("my sql is connected");
})

app.listen(6667, () => {
    console.log("server is running on 6667");
})

app.get('/data', (req, res) => {
    const sql = 'SELECT * FROM QuickProduct';
    db.query(sql, function(err, result, fields) {
        if (err) throw err;
        else res.json(result)
        console.log("result in node js", result);
    })
})

app.get('/requestLogin/otherInfo', (req, res) => {
    const {UserName, Password} = req.query;
    const sql = `SELECT * FROM User WHERE Email = "${UserName}" AND Password = "${Password}"` ;
    db.query(sql, function(err, result, fields) {
        if (err) throw err;
        else res.json(result)
    })
})

app.get('/getNumOfUsers', (req, res) => {
    const sql = `SELECT count(*) AS Num FROM User` ;
    // const sql = 'SELECT UserID FROM User WHERE Email = "' + UserName + '" AND Password = "' + Password + '"' ;
    db.query(sql, function(err, result, fields) {
        if (err) throw err;
        else res.json(result)
    })
})

app.post('/registUser/extra', (req, res) => {
    const {UserID, Phone, Email, UserName, Password, Dob, Type} = req.query
    
    const sql = 'INSERT INTO `User`(`UserID`, `Phone`, `Email`, `UserName`, `Password`, `Dob`, `IconPath`, `Type`) ' +
    ' VALUES ('+UserID+','+Phone+',"'+Email+'",'+UserName+',"'+Password+'","'+Dob+'",'+null+','+Type+')';
    db.query(sql, function(err, result, fields) {
        if (err) throw err;
        else res.json(result);
    })
})

app.post('/registCustomer/extra', (req, res) => {
    const {UserID, Address} = req.query
    const sql = 'INSERT INTO `Customer`(`UserID`, `Address`) VALUES ('+UserID+',"'+Address+'")';
    db.query(sql, function(err, result, fields) {
        if (err) throw err;
        else res.json(result);
    })
})
app.post('/registProvider/extra', (req, res) => {
    const {ProviderID, EmergencyContact} = req.query
    const sql = 'INSERT INTO `Provider`(`UserID`, `EmergencyContact`, `Licence`) VALUES ('+ProviderID+','+EmergencyContact+',"http://www.123.com")'
    db.query(sql, function(err, result, fields) {
        if (err) throw err;
        else res.json(result);
    })
})

app.post('/registBuyerCard/extra', (req, res) => {
    const {UserID, CardNum, ExpireDate} = req.query
    const sql = 'INSERT INTO `BuyerCreditCard`(`HolderID`, `CardNum`, `ExpireDate`) VALUES ('+UserID+','+CardNum+','+ExpireDate+')';
    db.query(sql, function(err, result, fields) {
        if (err) throw err;
        else res.json(result);
    })
})

app.post('/registProviderCard/extra', (req, res) => {
    const {ProID, CardNum, ExpireDate, BankName} = req.query
    const sql = 'INSERT INTO `ProviderCreditCard`(`HolderID`, `CardNum`, `ExpireDate`, `BankName`) VALUES ('+ProID+','+CardNum+',"'+ExpireDate+'","'+BankName+'")'
    db.query(sql, function(err, result, fields) {
        if (err) throw err;
        else res.json(result);
    })
})

app.post('/registShop/extra', (req, res) => {
    const {FarmerID, StoreName, FarmName, FarmAddress} = req.query
    const sql = 'INSERT INTO `Shop`(`ID`, `Name`, `Address`, `SelfPickUp`, `Delivery`, `FarmName`) VALUES ('+FarmerID+',"'+StoreName+'","'+FarmAddress+'",'+true+','+true+',"'+FarmName+'")'
    db.query(sql, function(err, result, fields) {
        if (err) throw err;
        else res.json(result);
    })
})

app.get('/requestAddress/extra', (req, res) => {
    const {Identify} = req.query;
    const sql = 'SELECT `Address` FROM `Customer` WHERE UserID=' + Identify;
    db.query(sql, function(err, result, fields) {
        if (err) throw err;
        else res.json(result)
    })
})

app.get('/requestQuickProduct', (req, res) => {
    const sql = 'SELECT * FROM `QuickProduct`';
    db.query(sql, function(err, result, fields) {
        if (err) throw err;
        else res.json(result)
    })
})

app.get('/requestGroupProduct', (req, res) => {
    const sql = 'SELECT * FROM `GroupProduct`';
    db.query(sql, function(err, result, fields) {
        if (err) throw err;
        else res.json(result)
    })
})

app.get('/requestQuickCarter/extra', (req, res) => {
    const {id} = req.query;
    const sql = 'SELECT * FROM `QuickCart` WHERE CustomerID=' + id;
    db.query(sql, function(err, result, fields) {
        if (err) throw err;
        else res.json(result)
    })
})

app.get('/requestGroupCarter/extra', (req, res) => {
    const {id} = req.query;
    const sql = 'SELECT * FROM `GroupCart` WHERE CustomerID=' + id;
    db.query(sql, function(err, result, fields) {
        if (err) throw err;
        else res.json(result)
    })
})

app.get('/requestQuickProductOfProvider/extra', (req, res) => {
    const {providerID} = req.query;
    const sql = 'SELECT * FROM `QuickProduct` WHERE ProviderID=' + providerID;
    db.query(sql, function(err, result, fields) {
        if (err) throw err;
        else res.json(result)
    })
})

app.get('/requestGroupProductOfProvider/extra', (req, res) => {
    const {providerID} = req.query;
    const sql = 'SELECT * FROM `GroupProduct` WHERE ProviderID=' + providerID;
    db.query(sql, function(err, result, fields) {
        if (err) throw err;
        else res.json(result)
    })
})


app.post('/updateQuickProduct/extra', (req, res) => {
    const {QuickProdID, QuickName, QuickPrice, QuickQuantity, QuickDescription} = req.query
    const sql = 'UPDATE `QuickProduct` SET `Name`="'+QuickName+'",`Price`='+QuickPrice+',`Quantity`='+QuickQuantity+',`Description`="'+QuickDescription+'" WHERE ID='+QuickProdID
    db.query(sql, function(err, result, fields) {
        if (err) throw err;
        else res.json(result);
    })
})

app.post('/updateGroupProduct/extra', (req, res) => {
    const {GroupProdID, GroupName, GroupPrice, GroupQuantity, GroupDescription, NumOfPerson, TimeLimit} = req.query
    const sql = 'UPDATE `GroupProduct` SET `Name`="'+GroupName+'",`Price`='+GroupPrice+',`Quantity`='+GroupQuantity+',`Description`="'+GroupDescription+'",`NumOfPerson`='+NumOfPerson+',`TimeLimit`="'+TimeLimit+'" WHERE ID='+GroupProdID
    db.query(sql, function(err, result, fields) {
        if (err) throw err;
        else res.json(result);
    })
})


app.get('/requestFarmName/extra', (req, res) => {
    const {Farmerid} = req.query;
    const sql = 'SELECT `FarmName` FROM `Shop` WHERE ID=' + Farmerid;
    db.query(sql, function(err, result, fields) {
        if (err) throw err;
        else res.json(result)
    })
})


app.post('/insertQuickProduct/extra', (req, res) => {
    const {QuickProviderID, QuickName, QuickPrice, QuickQuantity, QuickDescription} = req.query
    const sql = 'INSERT INTO `QuickProduct`(`Name`, `Price`, `Quantity`, `ProviderID`, `Description`) ' + 
    ' VALUES ("'+QuickName+'",'+QuickPrice+','+QuickQuantity+','+QuickProviderID+',"'+QuickDescription+'")'
    db.query(sql, function(err, result, fields) {
        if (err) throw err;
        else res.json(result);
    })
})

app.post('/insertGroupProduct/extra', (req, res) => {
    const {GroupProviderID, GroupName, GroupPrice, GroupQuantity, GroupDescription, FarmName, NumOfPerson, TimeLimit} = req.query
    const sql = 'INSERT INTO `GroupProduct`(`Name`, `Price`, `Quantity`, `ProviderID`, `FarmName`, `Description`, `NumOfPerson`, `TimeLimit`) ' +
    'VALUES ("'+GroupName+'",'+GroupPrice+','+GroupQuantity+','+GroupProviderID+',"'+FarmName+'","'+GroupDescription+'",'+NumOfPerson+',"'+TimeLimit+'")'
    db.query(sql, function(err, result, fields) {
        if (err) throw err;
        else res.json(result);
    })
})

app.post('/updateQuickProductAmount/extra', (req, res) => {
    const {CustomerID, ProductID, ProductAmount} = req.query
    const sql = 'UPDATE `QuickCart` SET `ProductQuantity`='+ProductAmount+' WHERE CustomerID='+CustomerID+' AND ProductID='+ProductID
    db.query(sql, function(err, result, fields) {
        if (err) throw err;
        else res.json(result);
    })
})

app.post('/updateGroupProductAmount/extra', (req, res) => {
    const {CustomerID, ProductID, ProductAmount} = req.query
    const sql = 'UPDATE `GroupCart` SET `ProductQuantity`='+ProductAmount+' WHERE CustomerID='+CustomerID+' AND ProductID='+ProductID
    db.query(sql, function(err, result, fields) {
        if (err) throw err;
        else res.json(result);
    })
})

app.post('/insertQuickProductIntoCart/extra', (req, res) => {
    const {CustomerID, ProductID, ProductPrice, ProductName, ProductQuantity} = req.query
    const sql = 'INSERT INTO `QuickCart`(`CustomerID`, `ProductID`, `ProductPrice`, `ProductName`, `ProductQuantity`) '+
    'VALUES ('+CustomerID+','+ProductID+','+ProductPrice+',"'+ProductName+'",'+ProductQuantity+')'
    db.query(sql, function(err, result, fields) {
        if (err) throw err;
        else res.json(result);
    })
})

app.post('/insertGroupProductIntoCart/extra', (req, res) => {
    const {CustomerID, ProductID, ProductPrice, ProductName, ProductQuantity} = req.query
    const sql = 'INSERT INTO `GroupCart`(`CustomerID`, `ProductID`, `ProductPrice`, `ProductName`, `ProductQuantity`) '+
    'VALUES ('+CustomerID+','+ProductID+','+ProductPrice+',"'+ProductName+'",'+ProductQuantity+')'
    db.query(sql, function(err, result, fields) {
        if (err) throw err;
        else res.json(result);
    })
})

app.post('/addProductIntoDelivery/extra', (req, res) => {
    const {ProductID, CustomerID, Quantity, DeliveryType, PickUpID, Type} = req.query
    const sql = 'INSERT INTO `Delivery`(`ProductID`, `CustomerID`, `Quantity`, `Time`, `DeliveryType`, `PickUpID`, `Type`) '+
    'VALUES ('+ProductID+','+CustomerID+','+Quantity+','+'"2021-12-25"'+',"'+DeliveryType+'",'+PickUpID+',"'+Type+'")'
    db.query(sql, function(err, result, fields) {
        if (err) throw err;
        else res.json(result);
    })
})