import bcrypt from 'bcrypt';

export const comparePassword = async (passwordUser, passwordData) => {
  return await bcrypt.compare(passwordUser, passwordData);
};
