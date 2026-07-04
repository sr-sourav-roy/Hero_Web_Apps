// JSON.parse() দিয়ে সেই স্ট্রিংকে আবার অ্যারে বানিয়ে দেয়।
const getStoreApp = () => {
  const storeAppSTR = localStorage.getItem("Installation");

  if (storeAppSTR) {
    const storeAppData = JSON.parse(storeAppSTR);
    return storeAppData;
  } else {
    return [];
  }
};

const addToStoreApp = (id) => {
  const storeAppData = getStoreApp();

  if (storeAppData.includes(id)) {
    alert("it's already exist..😁");
  } else {
    storeAppData.push(id);
    const data = JSON.stringify(storeAppData);
    localStorage.setItem("Installation", data);
  }
};

export { addToStoreApp, getStoreApp };
