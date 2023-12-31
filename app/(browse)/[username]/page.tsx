interface UserPageProps {
  params: {
    username: string;
  };
}

const UserPage = async ({ params }: UserPageProps) => {
  return (
    <div>
      <h1>{params.username}</h1>
    </div>
  );
};

export default UserPage;
