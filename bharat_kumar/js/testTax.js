import incomeTax from "./incomeTax.js";

QUnit.test("a basic test example", function (assert) {
  var value = "hello";
  assert.equal(value, "hello", "We expect value to be hello");
});
QUnit.test("Ontario Tax Bracket amount <= 20000 && amount >= 0", function (assert) {
    const oIT = new incomeTax();
    assert.equal(oIT.calculateIncomeTax(20000), "Enter a value greater than 20,000!", "We expect amount to be greater than 20000.");
});
QUnit.test("Ontario Tax Bracket amount > 20000 && amount <= 40922", function (assert) {
    const oIT = new incomeTax();
    assert.equal(oIT.calculateIncomeTax(20001), 1010.05, "We expect Ontario Tax to be 1010.05.");
});
QUnit.test("Ontario Tax Bracket amount > 40922 && amount <= 81847", function (assert) {
    const oIT = new incomeTax();
    assert.equal(oIT.calculateIncomeTax(81000), 5734.14, "We expect Ontario Tax to be 5734.14.");
});
QUnit.test("Ontario Tax Bracket amount > 81847 && amount <= 150000", function (assert) {
    const oIT = new incomeTax();
    assert.equal(oIT.calculateIncomeTax(140000), 12300.87, "We expect Ontario Tax to be 12300.87.");
});
QUnit.test("Ontario Tax Bracket > 150000 && amount <= 220000", function (assert) {
    const oIT = new incomeTax();
    assert.equal(oIT.calculateIncomeTax(210000), 20713.00, "We expect Ontario Tax to be 20713.00.");
});
QUnit.test("Ontario Tax Bracket > 220000", function (assert) {
    const oIT = new incomeTax();
    assert.equal(oIT.calculateIncomeTax(220001), 21929.13, "We expect Ontario Tax to be 21929.13.");
});
QUnit.test("Ontario Tax Bracket = -1", function (assert) {
  const oHst = new incomeTax();
  try {
    oHst.calculateIncomeTax(-1);
    assert.equal(true, false, "We expect Income Tax for -1 to throw an exception")
  } catch (e) {
    assert.equal(e, "unimplemented", "We expect a bad input to throw an unimplemented exception");
  }
});

QUnit.test("Federal Tax Bracket < 45282 && amount >= 0", function (assert) {
    const oIT = new incomeTax();
    assert.equal(oIT.calculateFederalTax(45000), 6750, "We expect amount to be greater than 6750.");
});
QUnit.test("Federal Tax Bracket amount > 45282 && amount <= 90563", function (assert) {
    const oIT = new incomeTax();
    assert.equal(oIT.calculateFederalTax(46000), 6939.19, "We expect Federal tax to be 6939.19.");
});
QUnit.test("Federal Tax Bracket amount > 90563 && amount <= 140388", function (assert) {
    const oIT = new incomeTax();
    assert.equal(oIT.calculateFederalTax(91000), 16188.62, "We expect Federal tax to be 16188.62.");
});
QUnit.test("Federal Tax Bracket amount > 140388 && amount <= 200000", function (assert) {
    const oIT = new incomeTax();
    assert.equal(oIT.calculateFederalTax(150000), 31816.48, "We expect Federal tax to be 31816.48.");
});
QUnit.test("Federal Tax Bracket amount > 200000", function (assert) {
    const oIT = new incomeTax();
    assert.equal(oIT.calculateFederalTax(210000), 49617.00, "We expect Federal tax to be 49617.00.");
});
QUnit.test("Federal Tax Bracket = -1", function (assert) {
    const oHst = new incomeTax();
    try {
      oHst.calculateFederalTax(-1);
      assert.equal(true, false, "We expect Income Tax for -1 to throw an exception")
    } catch (e) {
      assert.equal(e, "unimplemented", "We expect a bad input to throw an unimplemented exception");
    }
  });