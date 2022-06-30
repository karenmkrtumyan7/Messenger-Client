// import axios from 'axios';
// import Cookies from 'js-cookie';

// const api = axios.create(({
//   baseURL: 'http://localhost:8000/user/',
// }));

// async function getUserPeronalInfo() {
//   const token = `Bearer ${Cookies.get('token')}`;
//   const userId = Cookies.get('userId');
//   const requestHeader = {
//     authorization: token,
//   };

//   try {
//     const data = await api.get(`current/${userId}`, {
//       headers: requestHeader,
//     });
//     console.log(data);
//   } catch (e) {
//     console.log(e);
//   }
// }

// export { getUserPeronalInfo };
