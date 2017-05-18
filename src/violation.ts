import { JsonMember, JsonObject } from 'typedjson-npm/src/typed-json';

@JsonObject()
export class Violation {
    @JsonMember()
    public message: string;

    @JsonMember()
    public propertyPath: string;
}