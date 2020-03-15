export const environment = new Promise((resolve, reject) => {
  const xhr : XMLHttpRequest = new XMLHttpRequest();
  xhr.open('GET', '../assets/enviroments/enviroment.json');
  xhr.onload = (): void => {
    if (xhr.status === 200) {
      resolve(JSON.parse(xhr.responseText));
    } else {
      reject('Cannot load configuration...');
    }
  };
  xhr.send();
 });
 
export const serverURL = 'https://medical-service.westeurope.cloudapp.azure.com/api';