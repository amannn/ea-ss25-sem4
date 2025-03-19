import {Me} from '@/types';
import {API_URL} from '@/config';

const URL = API_URL + '/users/me';

export default async function Header() {
  // Step 1: fetch()
  const response = await fetch(URL);
  console.log(response.status);

  // Step 2: Extract JSON from response
  const data = (await response.json()) as Me;

  // Step 3: Log JSON response
  console.log(data);

  // Step 4: Render firstName and lastName
  return (
    <div>
      <span>{data.firstName}</span>
      <span>{data.lastName}</span>
    </div>
  );
}
