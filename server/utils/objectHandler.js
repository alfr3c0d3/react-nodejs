import _ from "lodash";

const toCamelCase = (obj) => Array.isArray(obj)
      ? obj.map(item => _.mapKeys(item, (v, k) => _.camelCase(k)))
      : _.mapKeys(obj, (v, k) => _.camelCase(k));

const parseJson = (json) => {
      try {
          return JSON.parse(json);
      } catch (error) {
          return json;
      }
  };
  
const stringifyJson = (json) => JSON.stringify(json);

export {toCamelCase, parseJson, stringifyJson};