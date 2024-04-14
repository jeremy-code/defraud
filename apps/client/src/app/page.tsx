import { db } from "@defraud/database";

const Page = async () => {
  const users = await db.query.users.findFirst();

  console.log(users);

  return <div>Test test test</div>;
};

export default Page;
