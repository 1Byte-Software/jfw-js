/**
 * # Custom HTTP Codes of Jframework
 *
 * @see {@link https://developers.jframework.io/references/api-reference/overview#custom-http-codes}
 */
export enum JFWHttpStatusCode {
    NotPermission = 209,
    InvalidUsername = 606,
    WrongPassword = 701,
    UserNotFound = 704,
    EmailExists = 723,
    UsernameExists = 724,
    PhoneVerified = 726,
    OtpExpired = 804,
}
