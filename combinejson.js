const fs = require("fs");

const basicSourceFile = JSON.parse(fs.readFileSync("json-files/basic.json"));
//console.log(basicSourceFile);
const intermediateSourceFile = JSON.parse(
   fs.readFileSync("json-files/intermediate.json")
);
//console.log(intermediateSourceFile);
const functionalSourceFile = JSON.parse(
   fs.readFileSync("json-files/functional.json")
);
//console.log(functionalSourceFile);
const algorithmSourceFile = JSON.parse(
   fs.readFileSync("json-files/algorithm.json")
);

allFiles = basicSourceFile.concat(
   intermediateSourceFile,
   functionalSourceFile,
   algorithmSourceFile
);
console.log("comcat", allFiles);

const targetFile = "./dist/dist.json";

fs.writeFileSync(targetFile, JSON.stringify(allFiles)); // js obj not readable stringify JSON
