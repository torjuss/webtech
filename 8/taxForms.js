const taxForms = [{
  realName: "Bruce Wayne",
  income: 750000,
  wealth: 300000
}, {
  realName: "John Blake",
  income: 440000,
  wealth: 832000
}, {
  realName: "Selina Kyle",
  income: 640000,
  wealth: 432000
}];

// Part 1 - Filter objects in an array
function getRealName(taxPayer) {
  return taxPayer.realName;
}

function earnsBigMoney(taxPayer) {
  return isEqualOrGreater(taxPayer.income, 500000);
}

function isEqualOrGreater(value, reference) {
  return value >= reference;
}

var filteredTaxForms = taxForms.filter(earnsBigMoney).map(getRealName);
