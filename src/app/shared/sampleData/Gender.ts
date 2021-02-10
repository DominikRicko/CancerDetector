
export class Gender {
  public constructor(
    readonly displayName: string,
    readonly exportName: string
  ) { }

  public toString(): string {
    return this.displayName;
  }

}

export const Male : Gender = new Gender("{{'DATA.MALE' | translate}}", 'M');
export const Female : Gender = new Gender("{{'DATA.FEMALE' | translate}}", 'F');
export const GenderList : Gender[] = [Male, Female];
