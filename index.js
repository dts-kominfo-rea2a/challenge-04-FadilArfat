// ! JANGAN DIMODIFIKASI
const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];

// TODO: Buatlah fungsi createDate
const createDate = (function (arrayOfString, index) {
  let dateEpoch = [];

  if (index === undefined) {
    for (let index = 0; index < arrayOfString.length; index++) {
      dateEpoch.push(Date.parse(arrayOfString[index]) / 1000);
    }

    let dateEpochToString = dateEpoch.sort().join("-");
    return dateEpochToString;
  } else {
    dateEpoch.push(Date.parse(arrayOfString[index]) / 1000);
    return dateEpoch.toString();
  }
})(
  // ! JANGAN DIMODIFIKASI
  () => {
    // IIFE

    // '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
    console.log(createDate?.(dates));

    // '1614841200' (dalam string)
    console.log(createDate?.(dates, 2));
  }
)();

module.exports = {
  dates,
  createDate,
};
