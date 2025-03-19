import {Me} from '@/types';
import {API_URL} from '@/config';

const URL = API_URL + '/users/me';

export default async function Header() {
  // Step 1: Call fetch()
  const response = await fetch(URL);
  console.log(response.status);

  // Step 2: Extract JSON body
  const data = (await response.json()) as Me;

  // Step 3: Logging for body
  console.log(data);

  // Step 4: Render firstName

  return <span>{data.firstName}</span>;
}
