import { JsonMember, JsonObject } from 'typedjson-npm/src/typed-json';

import { HydraError } from './hydra.error';
import { Violation } from './violation';

@JsonObject()
export class ViolationCollection extends HydraError {
    @JsonMember({ elements: Violation })
    violations:Violation[];
}