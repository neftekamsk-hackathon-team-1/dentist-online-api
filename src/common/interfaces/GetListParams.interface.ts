import { Order } from '../../constants/Order.enum';

export interface GetListParams {
  offset: number;
  qnt: number;
  sortField?: string;
  order?: Order;
}
