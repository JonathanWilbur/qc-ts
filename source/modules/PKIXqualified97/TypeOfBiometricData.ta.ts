/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    PredefinedBiometricType,
    _decode_PredefinedBiometricType,
    _encode_PredefinedBiometricType,
} from "../PKIXqualified97/PredefinedBiometricType.ta";
export {
    handwritten_signature /* IMPORTED_SHORT_NAMED_INTEGER */,
    picture /* IMPORTED_SHORT_NAMED_INTEGER */,
    PredefinedBiometricType,
    PredefinedBiometricType_handwritten_signature /* IMPORTED_LONG_NAMED_INTEGER */,
    PredefinedBiometricType_picture /* IMPORTED_LONG_NAMED_INTEGER */,
    _decode_PredefinedBiometricType,
    _encode_PredefinedBiometricType,
} from "../PKIXqualified97/PredefinedBiometricType.ta";

/* START_OF_SYMBOL_DEFINITION TypeOfBiometricData */
/**
 * @summary TypeOfBiometricData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TypeOfBiometricData  ::=  CHOICE {
 *     predefinedBiometricType PredefinedBiometricType,
 *
 *     biometricDataOid        OBJECT IDENTIFIER }
 * ```
 */
export type TypeOfBiometricData =
    | { predefinedBiometricType: PredefinedBiometricType } /* CHOICE_ALT_ROOT */
    | { biometricDataOid: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION TypeOfBiometricData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TypeOfBiometricData */
let _cached_decoder_for_TypeOfBiometricData: $.ASN1Decoder<TypeOfBiometricData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TypeOfBiometricData */

/* START_OF_SYMBOL_DEFINITION _decode_TypeOfBiometricData */
/**
 * @summary Decodes an ASN.1 element into a(n) TypeOfBiometricData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TypeOfBiometricData} The decoded data structure.
 */
export function _decode_TypeOfBiometricData(el: _Element) {
    if (!_cached_decoder_for_TypeOfBiometricData) {
        _cached_decoder_for_TypeOfBiometricData = $._decode_inextensible_choice<TypeOfBiometricData>(
            {
                "UNIVERSAL 2": [
                    "predefinedBiometricType",
                    _decode_PredefinedBiometricType,
                ],
                "UNIVERSAL 6": ["biometricDataOid", $._decodeObjectIdentifier],
            }
        );
    }
    return _cached_decoder_for_TypeOfBiometricData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TypeOfBiometricData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TypeOfBiometricData */
let _cached_encoder_for_TypeOfBiometricData: $.ASN1Encoder<TypeOfBiometricData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TypeOfBiometricData */

/* START_OF_SYMBOL_DEFINITION _encode_TypeOfBiometricData */
/**
 * @summary Encodes a(n) TypeOfBiometricData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TypeOfBiometricData, encoded as an ASN.1 Element.
 */
export function _encode_TypeOfBiometricData(
    value: TypeOfBiometricData,
    elGetter: $.ASN1Encoder<TypeOfBiometricData>
) {
    if (!_cached_encoder_for_TypeOfBiometricData) {
        _cached_encoder_for_TypeOfBiometricData = $._encode_choice<TypeOfBiometricData>(
            {
                predefinedBiometricType: _encode_PredefinedBiometricType,
                biometricDataOid: $._encodeObjectIdentifier,
            },
            $.BER
        );
    }
    return _cached_encoder_for_TypeOfBiometricData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TypeOfBiometricData */

/* eslint-enable */
