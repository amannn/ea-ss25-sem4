import {PageInfo} from '@/types';

type Props = {
  page: PageInfo;
};

export default function Pagination({page}: Props) {
  return <p>Page 1 of 3 (20 results in total)</p>;
}
