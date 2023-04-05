import { z } from "zod";
import {
  commentResponseSerializer,
  createCommentSerializer,
  updateCommentSerializer,
} from "../serializers/comments.serializer";

type ICommentsRequest = z.infer<typeof createCommentSerializer>;
type ICommentsResponse = z.infer<typeof commentResponseSerializer>;
type ICommentsUpdate = z.infer<typeof updateCommentSerializer>;

export { ICommentsRequest, ICommentsResponse, ICommentsUpdate };
