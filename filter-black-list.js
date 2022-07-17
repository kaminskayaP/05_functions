export default function filterBlackList (allEmailsList, blackEmailsList) {
  let filterEmailList = [];
  for (let i = 0; i < allEmailsList.length; i++) {
     if (blackEmailsList.includes(allEmailsList[i])) {
      continue;
     } else {
       filterEmailList.push(allEmailsList[i]);
     }
  }
  return filterEmailList;
}