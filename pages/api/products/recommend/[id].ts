import type { NextApiResponse } from 'next'

import { data } from './data';
import { ProductList } from '@/interfaces/demo';

export default function handler(
  { query: { id } }: any,
  res: NextApiResponse<ProductList>
) {
  const filter = data.filter((d) => d.id === id);

  res.status(200).json(filter[0])
}
