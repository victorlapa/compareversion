export function compare(version1: string, version2: string) {
  const v1Arr = version1.split(".");
  const v2Arr = version2.split(".");

  for (let i = 0; i <= v1Arr.length; i++) {
    if (parseInt(v1Arr[i]) > parseInt(v2Arr[i])) {
      return true;
    }
    if (parseInt(v1Arr[i]) < parseInt(v2Arr[i])) {
      return false;
    }

    if (i === v1Arr.length) {
      if (v1Arr.length === v2Arr.length) {
        return true;
      }

      if (v1Arr.length > v2Arr.length) {
        return true;
      } else return false;
    }
  }
}
