export const AppConstants = {
  methods: {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
    PATCH: 'patch',
  },
  api: {
    Auth: 'auth',
    SignIn: 'signin',
    SignUp: 'signup',
    Users: 'users',
    Verify: 'verify',
    UpdatePermissions: 'updatePermissions',
  },
  regexp: {
    username: '^[a-z](?!.*?\\.{2})[a-z0-9.]{1,28}[a-z0-9]$',
    password: '^(?=.*\\d)(?=.*[A-Z]).{8,40}$',
    contactNumber: '^\\+[1-9]{1}[0-9]{3,14}$',
  },
};
