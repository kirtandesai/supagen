interface ProfileDataProps {
  userid: string;
  useremail: string;
}

export default function ProfileData({ userid, useremail }: ProfileDataProps) {
  return (
    <div className="flex justify-center">
      <div className="border rounded w-full max-w-3xl">
        <div className="flex justify-between p-3">
          <p className="font-medium">UUID</p>
          <p>{userid}</p>
        </div>
        <div className="flex justify-between p-3">
          <p className="font-medium">EMAIL</p>
          <p>{useremail}</p>
        </div>
      </div>
    </div>
  );
}
