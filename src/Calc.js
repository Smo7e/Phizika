import Chart from "./Chart";

const Calc = () => {
  const arrResult = [];
  const arr1 = [
    2.18, 2.17, 2.17, 2.15, 2.13, 2.13, 2.08, 1.99, 1.66, 0.85, 0.3, 0.13, 0.07,
  ]; //
  const arr2 = [
    1.11, 1.12, 1.12, 1.11, 1.11, 1.05, 1.06, 0.95, 0.6, 0.26, 0.08,
  ]; //
  const arr3 = [
    0.55, 0.54, 0.55, 0.55, 0.55, 0.54, 0.52, 0.48, 0.36, 0.17, 0.05,
  ];
  const func = (a, b) => {
    const m0 = 11.9 * 10 ** -7; //
    const m = 1; //
    const I = 1; //
    const n = 1818; //
    const R = 0.013; //
    const calc =
      ((m0 * m * I * n) / 2) *
      (a / Math.sqrt(R ** 2 + a ** 2) + b / Math.sqrt(R ** 2 + b ** 2));
    return calc;
  };
  (() => {
    arr1.forEach((elem, index) => {
      const l = 0.165;
      let a = l / 2 - index * 0.01;
      let b = l / 2 + index * 0.01;
      arrResult.push(func(a, b) * 10 ** 3);
    });
  })();
  const zArr = [];
  arrResult.forEach((e, index) => {
    zArr.push(index * 10);
  });
  const bArr2 = [];
  (() => {
    arr2.forEach((elem, index) => {
      const l = 0.165;
      let a = l / 2 - index * 0.01;
      let b = l / 2 + index * 0.01;
      bArr2.push(func(a, b) * 10 ** 3);
    });
  })();

  return (
    <>
      <Chart zArr={zArr} bArr={arrResult} arr1={arr1} arr2={arr2} arr3={arr3} />
    </>
  );
};
export default Calc;
