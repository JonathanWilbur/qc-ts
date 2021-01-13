/* eslint-disable */
import { EXTENSION } from "x500-ts/dist/node/modules/AuthenticationFramework/EXTENSION.oca";
import {
    BiometricSyntax,
    _decode_BiometricSyntax,
    _encode_BiometricSyntax,
} from "../PKIXqualified97/BiometricSyntax.ta";
import { id_pe_biometricInfo } from "../PKIXqualified97/id-pe-biometricInfo.va";

/* START_OF_SYMBOL_DEFINITION biometricInfo */
/**
 * @summary biometricInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * biometricInfo  EXTENSION ::= {
 *     SYNTAX             BiometricSyntax
 *     IDENTIFIED BY      id-pe-biometricInfo }
 * ```
 *
 * @constant
 * @type {EXTENSION<BiometricSyntax>}
 * @implements {EXTENSION<BiometricSyntax>}
 */
export const biometricInfo: EXTENSION<BiometricSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_BiometricSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_BiometricSyntax,
    },
    "&id": id_pe_biometricInfo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION biometricInfo */

/* eslint-enable */
