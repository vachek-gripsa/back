import cookie from 'cookie';

export const setCookies = (generateRefresh = true, age, access = '', refresh = '') => {
  const cookies = [
    cookie.serialize('accessToken', access, {
      httpOnly: false,
      secure: true,
      sameSite: 'None',
      maxAge: age,
      path: '/'
    })
  ];

  if (generateRefresh) {
    cookies.push(
      cookie.serialize('refreshToken', refresh, {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
        maxAge: age,
        path: '/'
      })
    );
  }
  return cookies;
};
