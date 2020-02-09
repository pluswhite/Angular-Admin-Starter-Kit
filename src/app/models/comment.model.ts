/**
 * Comment Model
 */

export class Comment {
  constructor(
    public content?: string,
    public commentator?: string,
    public postId?: string,
    public rootCommentId?: string,
    public replyTo?: string,
  ) {}
}
