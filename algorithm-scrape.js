const fs = require("fs");
const { getComponents, getName, getDesc, trim, getInputs } = require("./regex");

const sourceFile = String(
   fs.readFileSync("./html-pages/algorithm-functions.html")
);
const components = getComponents(sourceFile);

const componentObjs = components.map((component) => {
   return {
      name: getName(component)[0],
      desc: trim(getDesc(component)[0]),
      inputs: getInputs(component).length,
      type: "Algorithms", // scraping only algorithm-functions.html file here
      typeNum: 400, // designated for algorithm type
      isFavorite: false, // Default is false boolean
   };
});
const reveresedObjs = componentObjs.reverse();

const orderedObjs = [];
for (let i = 0; i < reveresedObjs.length; i++) {
   const obj = reveresedObjs[i];
   obj.order = obj.typeNum + i;
   orderedObjs.push(obj);
}
console.log(orderedObjs);

const targetFile = "./json-files/algorithm.json";

fs.writeFileSync(targetFile, JSON.stringify(orderedObjs));
