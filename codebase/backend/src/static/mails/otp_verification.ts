export const otp_verification_mail = (otp: string) => {
  return ` '<h1>Please Verify your account using this OTP: !</h1>
            <p>OTP:${otp}</p>'`;
};
