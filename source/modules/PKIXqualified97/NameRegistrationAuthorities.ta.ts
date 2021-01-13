/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "x500-ts/dist/node/modules/CertificateExtensions/GeneralName.ta";

/* START_OF_SYMBOL_DEFINITION NameRegistrationAuthorities */
/**
 * @summary NameRegistrationAuthorities
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NameRegistrationAuthorities  ::=  SEQUENCE SIZE (1..MAX) OF GeneralName
 * ```
 */
export type NameRegistrationAuthorities = GeneralName[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION NameRegistrationAuthorities */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NameRegistrationAuthorities */
let _cached_decoder_for_NameRegistrationAuthorities: $.ASN1Decoder<NameRegistrationAuthorities> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NameRegistrationAuthorities */

/* START_OF_SYMBOL_DEFINITION _decode_NameRegistrationAuthorities */
/**
 * @summary Decodes an ASN.1 element into a(n) NameRegistrationAuthorities
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NameRegistrationAuthorities} The decoded data structure.
 */
export function _decode_NameRegistrationAuthorities(el: _Element) {
    if (!_cached_decoder_for_NameRegistrationAuthorities) {
        _cached_decoder_for_NameRegistrationAuthorities = $._decodeSequenceOf<GeneralName>(
            () => _decode_GeneralName
        );
    }
    return _cached_decoder_for_NameRegistrationAuthorities(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NameRegistrationAuthorities */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NameRegistrationAuthorities */
let _cached_encoder_for_NameRegistrationAuthorities: $.ASN1Encoder<NameRegistrationAuthorities> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NameRegistrationAuthorities */

/* START_OF_SYMBOL_DEFINITION _encode_NameRegistrationAuthorities */
/**
 * @summary Encodes a(n) NameRegistrationAuthorities into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameRegistrationAuthorities, encoded as an ASN.1 Element.
 */
export function _encode_NameRegistrationAuthorities(
    value: NameRegistrationAuthorities,
    elGetter: $.ASN1Encoder<NameRegistrationAuthorities>
) {
    if (!_cached_encoder_for_NameRegistrationAuthorities) {
        _cached_encoder_for_NameRegistrationAuthorities = $._encodeSequenceOf<GeneralName>(
            () => _encode_GeneralName,
            $.BER
        );
    }
    return _cached_encoder_for_NameRegistrationAuthorities(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NameRegistrationAuthorities */

/* eslint-enable */
