import RoomRepository from '@/repositories/RoomRepository';
import {notFound} from 'next/navigation';
import {NextRequest, NextResponse} from 'next/server';
import {z} from 'zod';

export async function GET(
  request: NextRequest,
  props: {params: Promise<{id: string}>}
) {
  const id = z.coerce
    .number()
    .optional()
    .catch(undefined)
    .parse((await props.params).id);
  if (id == null) notFound();

  let result = RoomRepository.getRoom(id);
  if (!result) notFound();

  return NextResponse.json(result);
}
