import { getUser } from '@/app/data-access/user';
import Form from './form';

export default async function UsersPage({
  params,
}: {
  params: { userId: string };
}) {
  const user = await getUser(params.userId);

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div>Users {user.name}</div>

      <Form userId={user.id} />
    </main>
  );
}
