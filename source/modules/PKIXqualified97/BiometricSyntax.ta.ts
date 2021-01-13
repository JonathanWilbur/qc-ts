/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    BiometricData,
    _decode_BiometricData,
    _encode_BiometricData,
} from "../PKIXqualified97/BiometricData.ta";
export {
    BiometricData,
    _decode_BiometricData,
    _encode_BiometricData,
} from "../PKIXqualified97/BiometricData.ta";

/* START_OF_SYMBOL_DEFINITION BiometricSyntax */
/**
 * @summary BiometricSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BiometricSyntax  ::=  SEQUENCE OF BiometricData
 * ```
 */
export type BiometricSyntax = BiometricData[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION BiometricSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BiometricSyntax */
let _cached_decoder_for_BiometricSyntax: $.ASN1Decoder<BiometricSyntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BiometricSyntax */

/* START_OF_SYMBOL_DEFINITION _decode_BiometricSyntax */
/**
 * @summary Decodes an ASN.1 element into a(n) BiometricSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BiometricSyntax} The decoded data structure.
 */
export function _decode_BiometricSyntax(el: _Element) {
    if (!_cached_decoder_for_BiometricSyntax) {
        _cached_decoder_for_BiometricSyntax = $._decodeSequenceOf<BiometricData>(
            () => _decode_BiometricData
        );
    }
    return _cached_decoder_for_BiometricSyntax(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BiometricSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BiometricSyntax */
let _cached_encoder_for_BiometricSyntax: $.ASN1Encoder<BiometricSyntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BiometricSyntax */

/* START_OF_SYMBOL_DEFINITION _encode_BiometricSyntax */
/**
 * @summary Encodes a(n) BiometricSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricSyntax, encoded as an ASN.1 Element.
 */
export function _encode_BiometricSyntax(
    value: BiometricSyntax,
    elGetter: $.ASN1Encoder<BiometricSyntax>
) {
    if (!_cached_encoder_for_BiometricSyntax) {
        _cached_encoder_for_BiometricSyntax = $._encodeSequenceOf<BiometricData>(
            () => _encode_BiometricData,
            $.BER
        );
    }
    return _cached_encoder_for_BiometricSyntax(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BiometricSyntax */

/* eslint-enable */
