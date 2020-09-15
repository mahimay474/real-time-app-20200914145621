export const FIREBASE_CONFIG = {
    apiKey: "AIzaSyB7p4l_ttM5_yM3BA82LW3SL7mhSBs9dIE",
    authDomain: "real-time-app-7d89f.firebaseapp.com",
    databaseURL: "https://real-time-app-7d89f.firebaseio.com",
    projectId: "real-time-app-7d89f",
    storageBucket: "real-time-app-7d89f.appspot.com",
    messagingSenderId: "434551371912",
    appId: "1:434551371912:web:0955001d3d4b766e74873d",
    measurementId: "G-VCBXW91YLT"
};

export const snapshotToArray = snapshot => {
    let returnArray = [];
    snapshot.forEach(element => {
        let item = element.val();
        item.key = element.key;
        returnArray.push(item);
    });
    return returnArray;
}