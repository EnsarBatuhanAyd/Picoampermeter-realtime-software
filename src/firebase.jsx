import firebase from "firebase/compat/app";

function firebaseApp() {
  const config = {
    databaseURL: "https://picoammeter-database-default-rtdb.firebaseio.com/",
    projectId: "picoammeter-database",
    apiKey: "AIzaSyBKhYZvrZkuTqxKCfx2jIh1d4OHKNV7o64",
  };
  return firebase.initializeApp(config);
}

export default firebaseApp;
