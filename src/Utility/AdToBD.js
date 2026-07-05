// Utility File: AdToBD.js

// Get all installed apps
const getStoreApp = () => {
  const storeAppSTR = localStorage.getItem("Installation");
  return storeAppSTR ? JSON.parse(storeAppSTR) : [];
};

// Add app to installed list
const addToStoreApp = (id) => {
  const storeAppData = getStoreApp();

  if (storeAppData.includes(id)) {
    alert("It's already installed 😁");
  } else {
    storeAppData.push(id);
    localStorage.setItem("Installation", JSON.stringify(storeAppData));
  }
};

// Remove app from installed list
const removeFromStore = (id) => {
  const storedApps = getStoreApp();

  const remaining = storedApps.filter(
    (appId) => parseInt(appId) !== parseInt(id),
  );

  localStorage.setItem("Installation", JSON.stringify(remaining));
};

export { addToStoreApp, getStoreApp, removeFromStore };
