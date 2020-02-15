/**
 * Post model
 */

import { User } from './user.model';
import { Tag } from './tag.model';

export class Post {
  constructor(
    public _id?: string,
    public title?: string,
    public avatar?: string,
    public author?: User,
    public content?: string,
    public category?: string,
    public tags?: Tag[],
    public updatedAt?: Date,
  ) {}
}
