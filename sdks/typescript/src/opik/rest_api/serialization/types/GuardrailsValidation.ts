/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";
import { Check } from "./Check";

export const GuardrailsValidation: core.serialization.ObjectSchema<
    serializers.GuardrailsValidation.Raw,
    OpikApi.GuardrailsValidation
> = core.serialization.object({
    spanId: core.serialization.property("span_id", core.serialization.string().optional()),
    checks: core.serialization.list(Check).optional(),
});

export declare namespace GuardrailsValidation {
    export interface Raw {
        span_id?: string | null;
        checks?: Check.Raw[] | null;
    }
}
