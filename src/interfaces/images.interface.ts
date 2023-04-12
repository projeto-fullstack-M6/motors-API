import { z } from "zod";
import {
  createImageSerializer,
  imageResponseSerializer,
  updateImageSerializer,
} from "../serializers/images.serializer";

type IImageRequest = z.infer<typeof createImageSerializer>;
type IImageResponse = z.infer<typeof imageResponseSerializer>;
type IImageUpdate = z.infer<typeof updateImageSerializer>;

export { IImageRequest, IImageResponse, IImageUpdate };
