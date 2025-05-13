//#region API types
/**
 * The cryptography decrypt request model.
 * #JFW-297
 */
export interface IDecryptData {
    /**
     * The cipher text to decrypt.
     */
    cipherText: string;
}

/**
 * The cryptography encrypt request model.
 * #JFW-297
 */
export interface IEncryptData {
    plainText: string;
}
//#endregion
