export const generateOtp = () => {
  const rand_int = Math.floor(100000 + Math.random() * 900000);

  return rand_int.toString();
};
