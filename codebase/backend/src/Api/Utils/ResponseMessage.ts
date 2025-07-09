enum ResponseType {
  SUCCESS = "success",
  ERROR = "error",
}

abstract class ResponseMessageAbstract<T> {
  constructor(
    protected message: string,
    protected status: number,
    protected data: T | null = null
  ) {}

  abstract toJSon(): object;
}

class SendResponse<T> extends ResponseMessageAbstract<T> {
  type: string;
  public static MESSAGE = "Operation succeeded";
  public static INVALID_TOKEN = "invalid_token";
  public static LOGIN_MESSAGE = "Login Successful";
  public static SERVER_ERROR = "server_errors";
  public static EXISTING_USER = "user_already_exists";
  public static INVALID_LOGIN = "invalid_login_details";
  public static NOT_FOUND_ERROR = "not_found";
  public static VALIDATION_ERROR = "request_validation_errors";
  public static OTP_MISMATCH_ERROR = "otp_mismatch";
  public static SERVICE_REQUEST_ERROR = "service_request_errors";
  public static SERVICE_REQUEST_SUCCESS = "service_request_successful";

  constructor(message: string, type: string, status: number, data: T) {
    super(message, status, data);
    this.type = type;
  }

  toJSon() {
    return {
      message: this.message,
      type: this.type,
      status: this.status,
      data: this.data,
    };
  }
}

export { SendResponse, ResponseType };
