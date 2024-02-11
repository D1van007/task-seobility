const baseURL = "http://localhost:9090/api/registration ";

export const submitForm = (formData) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("POST", baseURL, true);
    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log(xhr)
        resolve(xhr);
      } else {
        reject(xhr);
      }
    };
    xhr.onerror = () => {
      reject(new Error("Network Error"));
    };
    xhr.send(formData);
  });
};
