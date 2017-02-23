import { JsonObject, JsonMember, TypedJSON } from 'typedjson-npm/src/typed-json';
import { HydraMember } from './hydra.member';
import { HydraView } from './hydra.view';

@JsonObject
export class HydraCollection extends HydraMember {

    @JsonMember({ name: 'hydra:totalItems' })
    totalItems: number;

    // @JsonMember({ name: 'hydra:member', elements: Object })
    // member: Object[];

    @JsonMember({ name: 'hydra:view' })
    view: HydraView;

}


