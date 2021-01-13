/* eslint-disable */
import { EXTENSION } from "x500-ts/dist/node/modules/AuthenticationFramework/EXTENSION.oca";
import { id_pe_qcStatements } from "../PKIXqualified97/id-pe-qcStatements.va";
import {
    QCStatements,
    _decode_QCStatements,
    _encode_QCStatements,
} from "../PKIXqualified97/QCStatements.ta";

/* START_OF_SYMBOL_DEFINITION qcStatements */
/**
 * @summary qcStatements
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * qcStatements  EXTENSION ::= {
 *     SYNTAX        QCStatements
 *     IDENTIFIED BY id-pe-qcStatements }
 * ```
 *
 * @constant
 * @type {EXTENSION<QCStatements>}
 * @implements {EXTENSION<QCStatements>}
 */
export const qcStatements: EXTENSION<QCStatements> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_QCStatements,
    },
    encoderFor: {
        "&ExtnType": _encode_QCStatements,
    },
    "&id": id_pe_qcStatements /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION qcStatements */

/* eslint-enable */
