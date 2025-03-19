import {API_URL} from '@/config';
import {Collection, Room} from '@/types';

export default async function RoomsPage() {
  const response = await fetch(API_URL + '/rooms?size=9');
  const data = (await response.json()) as Collection<Room>;
  console.log(data);

  return (
    <div>
      {data.nodes.map((room) => (
        <p key={room.id}>{room.title}</p>
      ))}
    </div>
  );
}
