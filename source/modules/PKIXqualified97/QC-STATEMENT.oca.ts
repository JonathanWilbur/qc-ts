/* eslint-disable */
import { OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION QC_STATEMENT */
/**
 * @summary QC_STATEMENT
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * QC-STATEMENT ::= CLASS {
 *     &id   OBJECT IDENTIFIER UNIQUE,
 *     &Type OPTIONAL }
 *     WITH SYNTAX {
 *     [SYNTAX &Type] IDENTIFIED BY &id }
 * ```
 *
 * @interface
 */
export interface QC_STATEMENT<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "QC-STATEMENT";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof QC_STATEMENT<Type>]: $.ASN1Decoder<
                QC_STATEMENT<Type>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof QC_STATEMENT<Type>]: $.ASN1Encoder<
                QC_STATEMENT<Type>[_K]
            >;
        }
    >;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
    /**
     * @summary &Type
     */
    readonly "&Type": Type;
}
/* END_OF_SYMBOL_DEFINITION QC_STATEMENT */

/* eslint-enable */
