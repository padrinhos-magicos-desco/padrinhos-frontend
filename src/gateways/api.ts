function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getData = async () => {
  await timeout(3000);
};

const getAnotherData = async () => {
  await timeout(5000);
};

export { getData, getAnotherData };
