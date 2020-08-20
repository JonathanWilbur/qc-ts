/*
    BEGIN_MODULE PKIXqualified97
    OID: iso.identified-organization.dod.internet.security.mechanisms.pkix.id-mod.id-mod-qualified-cert-97
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "x500-ts/dist/node/AuthenticationFramework";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "x500-ts/dist/node/CertificateExtensions";
import { AttributeType } from "x500-ts/dist/node/InformationFramework";
import { id_pe, id_pkix } from "./PKIX1Explicit88";
import * as __utils from "./__utils";

export const id_pda: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [9],
    id_pkix
);

export const id_qcs: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [11],
    id_pkix
);

export const id_pda_dateOfBirth: AttributeType = new asn1.ObjectIdentifier(
    [1],
    id_pda
);

export const id_pda_placeOfBirth: AttributeType = new asn1.ObjectIdentifier(
    [2],
    id_pda
);

export const id_pda_gender: AttributeType = new asn1.ObjectIdentifier(
    [3],
    id_pda
);

export const id_pda_countryOfCitizenship: AttributeType = new asn1.ObjectIdentifier(
    [4],
    id_pda
);

export const id_pda_countryOfResidence: AttributeType = new asn1.ObjectIdentifier(
    [5],
    id_pda
);

export const id_pe_biometricInfo: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    id_pe
);

export const id_pe_qcStatements: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    id_pe
);

export const id_qcs_pkixQCSyntax_v1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_qcs
);

export const id_qcs_pkixQCSyntax_v2: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    id_qcs
);

// TODO: ObjectAssignment: dateOfBirth

// TODO: ObjectAssignment: placeOfBirth

// TODO: ObjectAssignment: gender

// TODO: ObjectAssignment: countryOfCitizenship

// TODO: ObjectAssignment: countryOfResidence

// TODO: ObjectAssignment: biometricInfo

export type PredefinedBiometricType = asn1.INTEGER;
export const PredefinedBiometricType_picture: PredefinedBiometricType = 0; /* LONG_NAMED_INTEGER_VALUE */
export const PredefinedBiometricType_handwritten_signature: PredefinedBiometricType = 1; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_PredefinedBiometricType: __utils.ASN1Decoder<
    PredefinedBiometricType
> | null = null;
let _cached_encoder_for_PredefinedBiometricType: __utils.ASN1Encoder<
    PredefinedBiometricType
> | null = null;
export function _decode_PredefinedBiometricType(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PredefinedBiometricType) {
        _cached_decoder_for_PredefinedBiometricType = __utils._decodeInteger;
    }
    return _cached_decoder_for_PredefinedBiometricType(el);
}
export function _encode_PredefinedBiometricType(
    value: PredefinedBiometricType,
    elGetter: __utils.ASN1Encoder<PredefinedBiometricType>
) {
    if (!_cached_encoder_for_PredefinedBiometricType) {
        _cached_encoder_for_PredefinedBiometricType = __utils._encodeInteger;
    }
    return _cached_encoder_for_PredefinedBiometricType(value, elGetter);
}

export type TypeOfBiometricData =
    | { predefinedBiometricType: PredefinedBiometricType } /* CHOICE_ALT_ROOT */
    | { biometricDataOid: asn1.OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_TypeOfBiometricData: __utils.ASN1Decoder<
    TypeOfBiometricData
> | null = null;
let _cached_encoder_for_TypeOfBiometricData: __utils.ASN1Encoder<
    TypeOfBiometricData
> | null = null;
export function _decode_TypeOfBiometricData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TypeOfBiometricData) {
        _cached_decoder_for_TypeOfBiometricData = __utils._decode_inextensible_choice<
            TypeOfBiometricData
        >({
            "UNIVERSAL 2": [
                "predefinedBiometricType",
                _decode_PredefinedBiometricType,
            ],
            "UNIVERSAL 6": [
                "biometricDataOid",
                __utils._decodeObjectIdentifier,
            ],
        });
    }
    return _cached_decoder_for_TypeOfBiometricData(el);
}
export function _encode_TypeOfBiometricData(
    value: TypeOfBiometricData,
    elGetter: __utils.ASN1Encoder<TypeOfBiometricData>
) {
    if (!_cached_encoder_for_TypeOfBiometricData) {
        _cached_encoder_for_TypeOfBiometricData = __utils._encode_choice<
            TypeOfBiometricData
        >(
            {
                predefinedBiometricType: _encode_PredefinedBiometricType,
                biometricDataOid: __utils._encodeObjectIdentifier,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_TypeOfBiometricData(value, elGetter);
}

export class BiometricData {
    constructor(
        readonly typeOfBiometricData: TypeOfBiometricData,
        readonly hashAlgorithm: AlgorithmIdentifier,
        readonly biometricDataHash: asn1.OCTET_STRING,
        readonly sourceDataUri: asn1.OPTIONAL<asn1.IA5String>,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_BiometricData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "typeOfBiometricData",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "hashAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "biometricDataHash",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sourceDataUri",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 22),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_BiometricData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_BiometricData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_BiometricData: __utils.ASN1Decoder<
    BiometricData
> | null = null;
let _cached_encoder_for_BiometricData: __utils.ASN1Encoder<
    BiometricData
> | null = null;
export function _decode_BiometricData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_BiometricData) {
        _cached_decoder_for_BiometricData = function (
            el: asn1.ASN1Element
        ): BiometricData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let typeOfBiometricData!: TypeOfBiometricData;
            let hashAlgorithm!: AlgorithmIdentifier;
            let biometricDataHash!: asn1.OCTET_STRING;
            let sourceDataUri: asn1.OPTIONAL<asn1.IA5String>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                typeOfBiometricData: (_el: asn1.ASN1Element): void => {
                    typeOfBiometricData = _decode_TypeOfBiometricData(_el);
                },
                hashAlgorithm: (_el: asn1.ASN1Element): void => {
                    hashAlgorithm = _decode_AlgorithmIdentifier(_el);
                },
                biometricDataHash: (_el: asn1.ASN1Element): void => {
                    biometricDataHash = __utils._decodeOctetString(_el);
                },
                sourceDataUri: (_el: asn1.ASN1Element): void => {
                    sourceDataUri = __utils._decodeIA5String(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BiometricData,
                _extension_additions_list_spec_for_BiometricData,
                _root_component_type_list_2_spec_for_BiometricData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new BiometricData /* SEQUENCE_CONSTRUCTOR_CALL */(
                typeOfBiometricData,
                hashAlgorithm,
                biometricDataHash,
                sourceDataUri,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_BiometricData(el);
}
export function _encode_BiometricData(
    value: BiometricData,
    elGetter: __utils.ASN1Encoder<BiometricData>
) {
    if (!_cached_encoder_for_BiometricData) {
        _cached_encoder_for_BiometricData = function (
            value: BiometricData,
            elGetter: __utils.ASN1Encoder<BiometricData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_TypeOfBiometricData(
                                value.typeOfBiometricData,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.hashAlgorithm,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeOctetString(
                                value.biometricDataHash,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.sourceDataUri === undefined
                                ? undefined
                                : __utils._encodeIA5String(
                                      value.sourceDataUri,
                                      __utils.BER
                                  ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_BiometricData(value, elGetter);
}

export type BiometricSyntax = BiometricData[]; // SequenceOfType
let _cached_decoder_for_BiometricSyntax: __utils.ASN1Decoder<
    BiometricSyntax
> | null = null;
let _cached_encoder_for_BiometricSyntax: __utils.ASN1Encoder<
    BiometricSyntax
> | null = null;
export function _decode_BiometricSyntax(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_BiometricSyntax) {
        _cached_decoder_for_BiometricSyntax = __utils._decodeSequenceOf<
            BiometricData
        >(() => _decode_BiometricData);
    }
    return _cached_decoder_for_BiometricSyntax(el);
}
export function _encode_BiometricSyntax(
    value: BiometricSyntax,
    elGetter: __utils.ASN1Encoder<BiometricSyntax>
) {
    if (!_cached_encoder_for_BiometricSyntax) {
        _cached_encoder_for_BiometricSyntax = __utils._encodeSequenceOf<
            BiometricData
        >(() => _encode_BiometricData, __utils.BER);
    }
    return _cached_encoder_for_BiometricSyntax(value, elGetter);
}

// TODO: ObjectAssignment: qcStatements

export class QCStatement {
    constructor(
        readonly statementId: asn1.OBJECT_IDENTIFIER,
        readonly statementInfo: asn1.OPTIONAL<asn1.ASN1Element>
    ) {}
}
export const _root_component_type_list_1_spec_for_QCStatement: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "statementId",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "statementInfo",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_QCStatement: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_QCStatement: __utils.ComponentSpec[] = [];
let _cached_decoder_for_QCStatement: __utils.ASN1Decoder<
    QCStatement
> | null = null;
let _cached_encoder_for_QCStatement: __utils.ASN1Encoder<
    QCStatement
> | null = null;
export function _decode_QCStatement(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_QCStatement) {
        _cached_decoder_for_QCStatement = function (
            el: asn1.ASN1Element
        ): QCStatement {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let statementId!: asn1.OBJECT_IDENTIFIER;
            let statementInfo: asn1.OPTIONAL<asn1.ASN1Element>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                statementId: (_el: asn1.ASN1Element): void => {
                    statementId = __utils._decodeObjectIdentifier(_el);
                },
                statementInfo: (_el: asn1.ASN1Element): void => {
                    statementInfo = __utils._decodeAny(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_QCStatement,
                _extension_additions_list_spec_for_QCStatement,
                _root_component_type_list_2_spec_for_QCStatement,
                undefined
            );
            return new QCStatement /* SEQUENCE_CONSTRUCTOR_CALL */(
                statementId,
                statementInfo
            );
        };
    }
    return _cached_decoder_for_QCStatement(el);
}
export function _encode_QCStatement(
    value: QCStatement,
    elGetter: __utils.ASN1Encoder<QCStatement>
) {
    if (!_cached_encoder_for_QCStatement) {
        _cached_encoder_for_QCStatement = function (
            value: QCStatement,
            elGetter: __utils.ASN1Encoder<QCStatement>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeObjectIdentifier(
                            value.statementId,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.statementInfo === undefined
                            ? undefined
                            : __utils._encodeAny(
                                  value.statementInfo,
                                  __utils.BER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_QCStatement(value, elGetter);
}

export type QCStatements = QCStatement[]; // SequenceOfType
let _cached_decoder_for_QCStatements: __utils.ASN1Decoder<
    QCStatements
> | null = null;
let _cached_encoder_for_QCStatements: __utils.ASN1Encoder<
    QCStatements
> | null = null;
export function _decode_QCStatements(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_QCStatements) {
        _cached_decoder_for_QCStatements = __utils._decodeSequenceOf<
            QCStatement
        >(() => _decode_QCStatement);
    }
    return _cached_decoder_for_QCStatements(el);
}
export function _encode_QCStatements(
    value: QCStatements,
    elGetter: __utils.ASN1Encoder<QCStatements>
) {
    if (!_cached_encoder_for_QCStatements) {
        _cached_encoder_for_QCStatements = __utils._encodeSequenceOf<
            QCStatement
        >(() => _encode_QCStatement, __utils.BER);
    }
    return _cached_encoder_for_QCStatements(value, elGetter);
}

// TODO: ObjectClassAssignment: QC-STATEMENT

// TODO: ObjectAssignment: qcStatement-1

// TODO: ObjectAssignment: qcStatement-2

export type NameRegistrationAuthorities = GeneralName[]; // SequenceOfType
let _cached_decoder_for_NameRegistrationAuthorities: __utils.ASN1Decoder<
    NameRegistrationAuthorities
> | null = null;
let _cached_encoder_for_NameRegistrationAuthorities: __utils.ASN1Encoder<
    NameRegistrationAuthorities
> | null = null;
export function _decode_NameRegistrationAuthorities(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_NameRegistrationAuthorities) {
        _cached_decoder_for_NameRegistrationAuthorities = __utils._decodeSequenceOf<
            GeneralName
        >(() => _decode_GeneralName);
    }
    return _cached_decoder_for_NameRegistrationAuthorities(el);
}
export function _encode_NameRegistrationAuthorities(
    value: NameRegistrationAuthorities,
    elGetter: __utils.ASN1Encoder<NameRegistrationAuthorities>
) {
    if (!_cached_encoder_for_NameRegistrationAuthorities) {
        _cached_encoder_for_NameRegistrationAuthorities = __utils._encodeSequenceOf<
            GeneralName
        >(() => _encode_GeneralName, __utils.BER);
    }
    return _cached_encoder_for_NameRegistrationAuthorities(value, elGetter);
}

export class SemanticsInformation {
    constructor(
        readonly semanticsIdentifier: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>,
        readonly nameRegistrationAuthorities: asn1.OPTIONAL<
            NameRegistrationAuthorities
        >
    ) {}
}
export const _root_component_type_list_1_spec_for_SemanticsInformation: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "semanticsIdentifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "nameRegistrationAuthorities",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SemanticsInformation: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SemanticsInformation: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SemanticsInformation: __utils.ASN1Decoder<
    SemanticsInformation
> | null = null;
let _cached_encoder_for_SemanticsInformation: __utils.ASN1Encoder<
    SemanticsInformation
> | null = null;
export function _decode_SemanticsInformation(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SemanticsInformation) {
        _cached_decoder_for_SemanticsInformation = function (
            el: asn1.ASN1Element
        ): SemanticsInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let semanticsIdentifier: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
            let nameRegistrationAuthorities: asn1.OPTIONAL<NameRegistrationAuthorities>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                semanticsIdentifier: (_el: asn1.ASN1Element): void => {
                    semanticsIdentifier = __utils._decodeObjectIdentifier(_el);
                },
                nameRegistrationAuthorities: (_el: asn1.ASN1Element): void => {
                    nameRegistrationAuthorities = _decode_NameRegistrationAuthorities(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SemanticsInformation,
                _extension_additions_list_spec_for_SemanticsInformation,
                _root_component_type_list_2_spec_for_SemanticsInformation,
                undefined
            );
            return new SemanticsInformation /* SEQUENCE_CONSTRUCTOR_CALL */(
                semanticsIdentifier,
                nameRegistrationAuthorities
            );
        };
    }
    return _cached_decoder_for_SemanticsInformation(el);
}
export function _encode_SemanticsInformation(
    value: SemanticsInformation,
    elGetter: __utils.ASN1Encoder<SemanticsInformation>
) {
    if (!_cached_encoder_for_SemanticsInformation) {
        _cached_encoder_for_SemanticsInformation = function (
            value: SemanticsInformation,
            elGetter: __utils.ASN1Encoder<SemanticsInformation>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.semanticsIdentifier === undefined
                            ? undefined
                            : __utils._encodeObjectIdentifier(
                                  value.semanticsIdentifier,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.nameRegistrationAuthorities ===
                        undefined
                            ? undefined
                            : _encode_NameRegistrationAuthorities(
                                  value.nameRegistrationAuthorities,
                                  __utils.BER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_SemanticsInformation(value, elGetter);
}

// TODO: ObjectSetAssignment: SupportedStatements

/* END_MODULE PKIXqualified97 */
