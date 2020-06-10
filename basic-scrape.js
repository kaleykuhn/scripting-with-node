const fs = require("fs");
const { getComponents, getName, getDesc, trim, getInputs } = require("./regex");

const sourceFile = String(fs.readFileSync("html-pages/basic-functions.html"));

const components = getComponents(sourceFile);

const componentObjs = components.map((component) => {
   return {
      name: getName(component)[0],
      desc: trim(getDesc(component)[0]),
      inputs: getInputs(component).length,
      type: "basic", // scraping only basic.html file here
      typeNum: 100, // designated for basic type
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

const targetFile = "./json-files/basic.json";

fs.writeFileSync(targetFile, JSON.stringify(orderedObjs));
