const objSort = (data: any, property: any, direction:boolean) => {
  data.sort(function (first: any, second: any) {
    if (first[property] > second[property]) return direction ? -1 : 1;
    return direction ? 1 : -1;
  });
  return data;
};

export { objSort }