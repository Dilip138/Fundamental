const input = require("readline-sync");
const fs = require("fs");
addressOperations = jsonFile => {
  let N = input.questionInt(
    "press \n '1' to edit person \n '2' to add new person \n '3' to delete person \n '4' to search by name\n'5' to print all contacts \n :"
  );
  switch (N) {
    case 1:
      editPerson(jsonFile);
      break;
    case 2:
      addPerson(jsonFile);
      break;
    case 3:
      deletePerson(jsonFile);
      break;
    case 4:
      searchByName(jsonFile);
      break;
    case 5:
      printFile(jsonFile);
      break;
  }
};
editPerson = jsonFile => {
  let i = input.questionInt("Enter the index number of the person:");
  let content = input.questionInt(
    "press \n '1' to edit FirstName \n '2' to edit LastName \n '3' to edit Address \n '4' to edit City \n '5'to edit PhoneNumber\n:"
  );
  console.log(jsonFile[i]);
  let update = input.question("Enter the new feature:");
  fs.writeFileSync("AdresBook.json", JSON.stringify(jsonFile));
  switch (content) {
    case 1:
      jsonFile[i].FirstName = update;
      break;
    case 2:
      jsonFile[i].LastName = update;
      break;
    case 3:
      jsonFile[i].Address = update;
      break;
    case 4:
      jsonFile[i].City = update;
      break;
    case 5:
      jsonFile[i].PhoneNum = update;
      break;
  }
  fs.writeFileSync("AdresBook.json", JSON.stringify(jsonFile));
  return jsonFile;
};
addPerson = jsonFile => {
  let newPerson = {};
  newPerson.FirstName = input.question("Enter firstName:");
  newPerson.LastName = input.question("Enter LastName:");
  newPerson.Address = input.question("Enter Address:");
  newPerson.City = input.question("Enter City:");
  newPerson.PhoneNum = input.question("Enter PhoneNum:");
  jsonFile.push(newPerson);
  fs.writeFileSync("AdresBook.json", JSON.stringify(jsonFile));
  return jsonFile;
};
deletePerson = jsonFile => {
  let i = input.question("Enter the index number to delete the contact:");
  jsonFile.pop(i);
  fs.writeFileSync("AdresBook.json", JSON.stringify(jsonFile));
  return jsonFile;
};
searchByName = jsonFile => {
  let Name = input.question("Enter the First or Last name:");
  jsonFile.forEach(nameInRecord => {
    if (
      nameInRecord.FirstName.includes(Name) ||
      nameInRecord.LastName.includes(Name)
    )
      console.log(nameInRecord);
  });
};
printFile = jsonFile => {
  jsonFile.forEach(person => {
    console.log(person);
  });
};
groceryDisplayInventory = jsonFile => {
  jsonFile.forEach(item => {
    asset = parseInt(item.price) * parseInt(item.Weight);
    console.log(item, "Asset =", asset);
  });
};
module.exports = {
  addressOperations
};
