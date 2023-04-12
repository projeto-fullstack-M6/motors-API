import { z } from "zod";
import {
  addressResponseSerializer,
  createAddressSerializer,
  updateAddressSerializer,
} from "../serializers/addresses.serializer";

type IAddressRequest = z.infer<typeof createAddressSerializer>;
type IAddressResponse = z.infer<typeof addressResponseSerializer>;
type IAddressUpdate = z.infer<typeof updateAddressSerializer>;

export { IAddressRequest, IAddressResponse, IAddressUpdate };
