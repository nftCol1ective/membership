// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Entity,
  Value,
  ValueKind,
  store
} from "@graphprotocol/graph-ts";

export class MembershipEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("name", Value.fromString(""));
    this.set("profileId", Value.fromString(""));
    this.set("tags", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MembershipEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type MembershipEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("MembershipEntity", id.toString(), this);
    }
  }

  static load(id: string): MembershipEntity | null {
    return changetype<MembershipEntity | null>(
      store.get("MembershipEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get profileId(): string {
    let value = this.get("profileId");
    return value!.toString();
  }

  set profileId(value: string) {
    this.set("profileId", Value.fromString(value));
  }

  get tags(): string {
    let value = this.get("tags");
    return value!.toString();
  }

  set tags(value: string) {
    this.set("tags", Value.fromString(value));
  }

  get tokenId(): i32 {
    let value = this.get("tokenId");
    return value!.toI32();
  }

  set tokenId(value: i32) {
    this.set("tokenId", Value.fromI32(value));
  }
}