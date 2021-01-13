/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    QCStatement,
    _decode_QCStatement,
    _encode_QCStatement,
} from "../PKIXqualified97/QCStatement.ta";
export {
    QCStatement,
    _decode_QCStatement,
    _encode_QCStatement,
} from "../PKIXqualified97/QCStatement.ta";

/* START_OF_SYMBOL_DEFINITION QCStatements */
/**
 * @summary QCStatements
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * QCStatements  ::=  SEQUENCE OF QCStatement
 * ```
 */
export type QCStatements = QCStatement[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION QCStatements */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_QCStatements */
let _cached_decoder_for_QCStatements: $.ASN1Decoder<QCStatements> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_QCStatements */

/* START_OF_SYMBOL_DEFINITION _decode_QCStatements */
/**
 * @summary Decodes an ASN.1 element into a(n) QCStatements
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {QCStatements} The decoded data structure.
 */
export function _decode_QCStatements(el: _Element) {
    if (!_cached_decoder_for_QCStatements) {
        _cached_decoder_for_QCStatements = $._decodeSequenceOf<QCStatement>(
            () => _decode_QCStatement
        );
    }
    return _cached_decoder_for_QCStatements(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_QCStatements */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_QCStatements */
let _cached_encoder_for_QCStatements: $.ASN1Encoder<QCStatements> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_QCStatements */

/* START_OF_SYMBOL_DEFINITION _encode_QCStatements */
/**
 * @summary Encodes a(n) QCStatements into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QCStatements, encoded as an ASN.1 Element.
 */
export function _encode_QCStatements(
    value: QCStatements,
    elGetter: $.ASN1Encoder<QCStatements>
) {
    if (!_cached_encoder_for_QCStatements) {
        _cached_encoder_for_QCStatements = $._encodeSequenceOf<QCStatement>(
            () => _encode_QCStatement,
            $.BER
        );
    }
    return _cached_encoder_for_QCStatements(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_QCStatements */

/* eslint-enable */
