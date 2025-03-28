import { useAppSelector } from "@store/hooks";
import { Heading } from "@components/common";

const Account = () => {
  const accountInfo = useAppSelector((state) => state.auth.user);

  return (
    <>
      <head>
        <title>our eCommerce | Account</title>
      </head>

      {/* Heading title */}
      <Heading title="Account Info" />
      {/*=== Heading title ===*/}

      <ul>
        <li>First Name: {accountInfo?.firstName}</li>
        <li>Last Name: {accountInfo?.lastName}</li>
        <li>Email: {accountInfo?.email}</li>
      </ul>
    </>
  );
};

export default Account;
