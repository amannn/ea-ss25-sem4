import {API_URL} from '@/config';
import {Collection, Room} from '@/types';

const URL = API_URL + '/rooms';

export default async function RoomsPage() {
  const response = await fetch(URL);
  const data = (await response.json()) as Collection<Room>;

  return (
    <ul>
      {data.nodes.map((room) => (
        <li key={room.id}>{room.title}</li>
      ))}
    </ul>
  );
}
