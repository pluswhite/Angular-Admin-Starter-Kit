/**
 * User model
 */

export class User {
  constructor(
    public id?: string,
    public name?: string,
    public email?: string,
    public password?: string,
    public avatar?: string,
    public gender?: string,
    public locations?: string[],
  ) {}
}
