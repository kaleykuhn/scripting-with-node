const fs = require("fs"); //fs module assigned
const { getComponents, getName, getDesc, trim, getInputs } = require("./regex");
// destructuring functions from regex imported one function at a time {} or require file ext not needed . absolute path./this folder

const sourceFile = String(fs.readFileSync("html-pages/basic-functions.html"));
// gives u your html file in string form
const components = getComponents(sourceFile);
// function passing sourcefile scrape and get array of that file compnents you want

// map turn into objects from list/array of strings search within and look for name,desc etc
// function passed map each component return an array of objects of specified shape
const componentObjs = components.map((component) => {
   return {
      name: getName(component)[0], // another scrape of name in betwen bold tags exp need first arr[0]
      desc: trim(getDesc(component)[0]), // trim white space get first thing in the array as it maps
      inputs: getInputs(component).length, // match num of inputs array .length counts inputs
      type: "basic", // scraping only basic.html file here
      typeNum: 100, // designated for basic type
      isFavorite: false, // Default is false boolean
   };
});
const reveresedObjs = componentObjs.reverse(); // order not right from map

const orderedObjs = []; //empty to push iteration add prop
for (let i = 0; i < reveresedObjs.length; i++) {
   const obj = reveresedObjs[i]; // find ind obj
   obj.order = obj.typeNum + i; // 100 +0 100 +1 no overlap in array
   orderedObjs.push(obj); //push obj with new prop
}
console.log(orderedObjs);

const targetFile = "./json-files/basic.json";

fs.writeFileSync(targetFile, JSON.stringify(orderedObjs)); // js obj not readable stringify JSON
