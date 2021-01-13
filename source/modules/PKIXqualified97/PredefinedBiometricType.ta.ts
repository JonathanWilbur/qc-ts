/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION PredefinedBiometricType */
/**
 * @summary PredefinedBiometricType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PredefinedBiometricType  ::=  INTEGER {
 *     picture(0), handwritten-signature(1)}
 *     (picture|handwritten-signature,...)
 * ```
 */
export type PredefinedBiometricType = INTEGER;
/* END_OF_SYMBOL_DEFINITION PredefinedBiometricType */

/* START_OF_SYMBOL_DEFINITION PredefinedBiometricType_picture */
/**
 * @summary PredefinedBiometricType_picture
 * @constant
 * @type {number}
 */
export const PredefinedBiometricType_picture: PredefinedBiometricType = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PredefinedBiometricType_picture */

/* START_OF_SYMBOL_DEFINITION picture */
/**
 * @summary PredefinedBiometricType_picture
 * @constant
 * @type {number}
 */
export const picture: PredefinedBiometricType = PredefinedBiometricType_picture; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION picture */

/* START_OF_SYMBOL_DEFINITION PredefinedBiometricType_handwritten_signature */
/**
 * @summary PredefinedBiometricType_handwritten_signature
 * @constant
 * @type {number}
 */
export const PredefinedBiometricType_handwritten_signature: PredefinedBiometricType = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PredefinedBiometricType_handwritten_signature */

/* START_OF_SYMBOL_DEFINITION handwritten_signature */
/**
 * @summary PredefinedBiometricType_handwritten_signature
 * @constant
 * @type {number}
 */
export const handwritten_signature: PredefinedBiometricType = PredefinedBiometricType_handwritten_signature; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION handwritten_signature */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PredefinedBiometricType */
let _cached_decoder_for_PredefinedBiometricType: $.ASN1Decoder<PredefinedBiometricType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PredefinedBiometricType */

/* START_OF_SYMBOL_DEFINITION _decode_PredefinedBiometricType */
/**
 * @summary Decodes an ASN.1 element into a(n) PredefinedBiometricType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PredefinedBiometricType} The decoded data structure.
 */
export function _decode_PredefinedBiometricType(el: _Element) {
    if (!_cached_decoder_for_PredefinedBiometricType) {
        _cached_decoder_for_PredefinedBiometricType = $._decodeInteger;
    }
    return _cached_decoder_for_PredefinedBiometricType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PredefinedBiometricType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PredefinedBiometricType */
let _cached_encoder_for_PredefinedBiometricType: $.ASN1Encoder<PredefinedBiometricType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PredefinedBiometricType */

/* START_OF_SYMBOL_DEFINITION _encode_PredefinedBiometricType */
/**
 * @summary Encodes a(n) PredefinedBiometricType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PredefinedBiometricType, encoded as an ASN.1 Element.
 */
export function _encode_PredefinedBiometricType(
    value: PredefinedBiometricType,
    elGetter: $.ASN1Encoder<PredefinedBiometricType>
) {
    if (!_cached_encoder_for_PredefinedBiometricType) {
        _cached_encoder_for_PredefinedBiometricType = $._encodeInteger;
    }
    return _cached_encoder_for_PredefinedBiometricType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PredefinedBiometricType */

/* eslint-enable */
