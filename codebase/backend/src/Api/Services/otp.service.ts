import { IOtp } from "../Interfaces";
import { Otp } from "../Models";

type OtpPayload = {
    email: string;
    otp: string;
};

abstract class OtpAbstract {
  abstract createOtp(payload: OtpPayload): Promise<IOtp>;
  abstract findOtp(email: string): Promise<IOtp | null>;
  abstract deleteOtp(id: string): Promise<void>;
}

export class OtpService extends OtpAbstract {
  async createOtp(payload: OtpPayload): Promise<IOtp> {
    const otp_created = await Otp.create(payload);
    return otp_created as IOtp;
  }
  async findOtp(email: string): Promise<IOtp | null> {
    const find_otp = await Otp.findOne({ email }).lean();
    return find_otp as IOtp;
  }
  async deleteOtp(id: string): Promise<void> {
    await Otp.deleteOne({ id });
    return;
  }
}
