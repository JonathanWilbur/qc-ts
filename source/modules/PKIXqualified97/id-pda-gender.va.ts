/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { AttributeType } from "x500-ts/dist/node/modules/InformationFramework/AttributeType.ta";
import { id_pda } from "../PKIXqualified97/id-pda.va";

/* START_OF_SYMBOL_DEFINITION id_pda_gender */
/**
 * @summary id_pda_gender
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pda-gender               AttributeType ::= { id-pda 3 }
 * ```
 *
 * @constant
 */
export const id_pda_gender: AttributeType = new _OID([3], id_pda);
/* END_OF_SYMBOL_DEFINITION id_pda_gender */

/* eslint-enable */
