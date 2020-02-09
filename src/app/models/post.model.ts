/**
 * Post model
 */

export class Post {
  constructor(
    public id?: number,
    public title?: string,
    public avatar?: string,
    public author?: string,
    public content?: string,
    public category?: string,
    public tags?: number[],
  ) {}
}
