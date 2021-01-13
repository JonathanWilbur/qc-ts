/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { AttributeType } from "x500-ts/dist/node/modules/InformationFramework/AttributeType.ta";
import { id_pda } from "../PKIXqualified97/id-pda.va";

/* START_OF_SYMBOL_DEFINITION id_pda_dateOfBirth */
/**
 * @summary id_pda_dateOfBirth
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pda-dateOfBirth          AttributeType ::= { id-pda 1 }
 * ```
 *
 * @constant
 */
export const id_pda_dateOfBirth: AttributeType = new _OID([1], id_pda);
/* END_OF_SYMBOL_DEFINITION id_pda_dateOfBirth */

/* eslint-enable */
